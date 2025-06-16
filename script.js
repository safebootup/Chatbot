const questionsAndAnswers = {
  "how did i get picked for jury service":
    "From a combined list of registered Philadelphia voters and adult licensed drivers, jurors are randomly selected by computer.",
  "why have some people never been called for jury service and i've been called more than once":
    "Selection is random. Duplicate name formats on different lists can increase chances. The court cannot alter the lists.",
  "what if i fail to return the questionnaire or report for service":
    "You may be held in contempt and fined. The court tries to avoid using this option.",
  "will i get paid for serving as a juror":
    "Yes. $9/day for the first 3 days, $25/day after. A check will be mailed after your service.",
  "how long will i be required to serve":
    "You must serve one day unless selected for a trial, then for the trial duration.",
  "how often must i serve":
    "If you serve 1–2 days, you're exempt for 1 year. If you serve 3+ days, you're exempt for 3 years.",
  "does my employer have to pay me for jury service":
    "No, but they can’t punish you for attending. Employers are not required to pay you.",
  "what is considered an extreme hardship":
    "Childcare, lost wages, or caregiving issues. Documentation required. Call 215-683-7170 with questions.",
  "what if the date i'm called to serve is not convenient":
    "Fill out your questionnaire and request a new date by phone or online. Hardship requests must be mailed.",
  "can i bring electronics":
    "Yes, but they must be turned off in the courtroom unless otherwise instructed.",
  "i lost my summons how do i get a new one":
    "Call 215 683-7170 and follow prompts or speak to a representative, available Mon–Fri 8:30 AM – 3:30 PM.",
  "what form of id is needed when inquiring about my summons":
    "Name, address, date of birth, and participant number (if known). Never your SSN.",
  "why am i told to call the night before":
    "To check if you’re still needed, since juror demand changes daily. Call the night before to confirm.",
  "what should i wear":
    "Casual, respectful clothing. Ties not required. Slacks, dresses, or sport shirts are appropriate.",
  "where can i park":
    "Use public transit if possible. See the SEPTA or Philadelphia Parking Authority websites.",
  "if i am excused by the voice response system when will i have to report again":
    "You’re treated as if you served and won’t be required again for 12 months."
};

const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "https://randomuser.me/api/portraits/men/32.jpg";
    avatar.alt = "James";
    const textBox = document.createElement("div");
    textBox.classList.add("text");
    textBox.textContent = `James: ${text}`;
    msg.appendChild(avatar);
    msg.appendChild(textBox);
  } else {
    const textBox = document.createElement("div");
    textBox.classList.add("text");
    textBox.textContent = text;
    msg.appendChild(textBox);
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getFuzzyAnswer(input) {
  const normalizedInput = input.toLowerCase();
  const questions = Object.keys(questionsAndAnswers);
  const match = questions.find(q => normalizedInput.includes(q)) ||
    questions.find(q => similarity(normalizedInput, q) > 0.6);
  return match ? questionsAndAnswers[match] : "I'm sorry, I couldn't find an answer to that.";
}

function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0)
        costs[j] = j;
      else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Handle question input
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  userInput.value = "";
  setTimeout(() => {
    const response = getFuzzyAnswer(input);
    appendMessage(response, "bot");
  }, 500);
});

// Collapsible FAQ groups
document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "flex" ? "none" : "flex";
  });
});

// Add FAQ button responses
document.querySelectorAll(".faq-content button").forEach(button => {
  button.addEventListener("click", () => {
    const question = button.textContent.toLowerCase().replace(/\?$/, '');
    appendMessage(button.textContent, "user");
    setTimeout(() => {
      appendMessage(questionsAndAnswers[question], "bot");
    }, 400);
  });
});

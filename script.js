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
  "does my employer have to pay me for time missed from work due to jury service":
    "No, but they can’t punish you for attending. Employers are not required to pay you.",
  "what is considered an extreme hardship":
    "Childcare, lost wages, or caregiving issues. Documentation required. Call 215-683-7170 with questions.",
  "where can i park":
    "Use public transit if possible. See the SEPTA or Philadelphia Parking Authority websites.",
  "can i bring my cell phone, laptop, or other electronic device into the courthouse":
    "Yes, but they must be turned off in the courtroom unless otherwise instructed.",
  "i lost my summons how do i get a new one":
    "Call 215 683-7170 and follow prompts or speak to a representative, available Mon–Fri 8:30 AM – 3:30 PM.",
  "what form of id is needed when inquiring about my summons":
    "Name, address, date of birth, and participant number (if known). Never your SSN.",
  "why am i told to call the night before":
    "To check if you’re still needed, since juror demand changes daily. Call the night before to confirm.",
  "what should i wear":
    "Casual, respectful clothing. Ties not required. Slacks, dresses, or sport shirts are appropriate.",
  "if i am excused by the voice response system when will i have to report again":
    "You’re treated as if you served and won’t be required again for 12 months.",
  "what if the date i'm called to serve is not convenient":
    "Fill out your questionnaire and request a new date by phone or online. Hardship requests must be mailed.",
  "who do i talk to about my jury check":
    "Call the Jury Commission Payroll Dept at 215-683-7193."
};

const faqStructure = {
  "Jury Selection": [
    "how did i get picked for jury service",
    "why have some people never been called for jury service and i've been called more than once",
    "what if i fail to return the questionnaire or report for service"
  ],
  "Payment / Work Hours": [
    "will i get paid for serving as a juror",
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for time missed from work due to jury service",
    "what is considered an extreme hardship",
    "where can i park"
  ],
  "Requirements for Jury Duty": [
    "can i bring my cell phone, laptop, or other electronic device into the courthouse",
    "i lost my summons how do i get a new one",
    "what form of id is needed when inquiring about my summons",
    "why am i told to call the night before",
    "what should i wear"
  ],
  "Time Conflicts": [
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for time missed from work due to jury service",
    "what if the date i'm called to serve is not convenient",
    "what is considered an extreme hardship",
    "if i am excused by the voice response system when will i have to report again"
  ]
};

const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const faqContainer = document.getElementById("faqContainer");

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

function getClosestMatch(input) {
  input = input.toLowerCase();
  let bestMatch = "";
  let highestScore = 0;

  for (const question in questionsAndAnswers) {
    let score = 0;
    const inputWords = input.split(" ");
    const questionWords = question.split(" ");

    inputWords.forEach(word => {
      if (questionWords.includes(word)) score++;
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = question;
    }
  }

  return highestScore >= 2 ? bestMatch : null;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  userInput.value = "";

  setTimeout(() => {
    const match = getClosestMatch(input);
    if (match) {
      appendMessage(questionsAndAnswers[match], "bot");
    } else {
      appendMessage("I'm sorry, I couldn't find an answer to that. Try selecting a question below.", "bot");
    }
  }, 600);
});

function renderFAQ() {
  for (const group in faqStructure) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = group;
    details.appendChild(summary);

    faqStructure[group].forEach((questionKey) => {
      const btn = document.createElement("button");
      btn.textContent = questionKey.charAt(0).toUpperCase() + questionKey.slice(1) + "?";
      btn.onclick = () => {
        appendMessage(btn.textContent, "user");
        setTimeout(() => {
          appendMessage(questionsAndAnswers[questionKey], "bot");
        }, 500);
      };
      details.appendChild(btn);
    });

    faqContainer.appendChild(details);
  }
}

window.onload = () => {
  appendMessage("Hi, I'm James. Ask me anything about jury duty or pick a question below.", "bot");
  renderFAQ();
};

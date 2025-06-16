const questionsAndAnswers = {
  // Jury Selection
  "how did i get picked for jury service":
    "From a combined list of registered Philadelphia voters and adult licensed drivers, jurors are randomly selected by computer.",
  "why have some people never been called for jury service and i've been called more than once":
    "Selection is random. Duplicate name formats on different lists can increase chances. The court cannot alter the lists.",
  "what if i fail to return the questionnaire or report for service":
    "You may be held in contempt and fined. The court tries to avoid using this option.",

  // Scheduling
  "how long will i be required to serve":
    "You must serve one day unless selected for a trial, then for the trial duration.",
  "how often must i serve":
    "If you serve 1–2 days, you're exempt for 1 year. If you serve 3+ days, you're exempt for 3 years.",
  "does my employer have to pay me for time missed from work due to jury service":
    "No, but they can’t punish you for attending. Employers are not required to pay you.",
  "what if the date i'm called to serve is not convenient":
    "Fill out your questionnaire and request a new date by phone or online. Hardship requests must be mailed.",
  "what is considered an extreme hardship":
    "Childcare, lost wages, or caregiving issues. Documentation required. Call 215-683-7170 with questions.",
  "if i am excused by the voice response system when will i have to report again":
    "You’re treated as if you served and won’t be required again for 12 months.",

  // Payment/Work Hours
  "will i get paid for serving as a juror":
    "Yes. $9/day for the first 3 days, $25/day after. A check will be mailed after your service.",

  // Requirements for Jury Duty
  "can i bring my cell phone, laptop, or other electronic device into the courthouse":
    "Yes, but they must be turned off in the courtroom unless otherwise instructed.",
  "i lost my summons how do i get a new one":
    "Call 215 683-7170 and follow prompts or speak to a representative, available Mon–Fri 8:30 AM – 3:30 PM.",
  "what form of id is needed when inquiry about the status of a questionnaire/summons":
    "Name, address, date of birth, and participant number (if known). Never your SSN.",
  "why am i told to call the night before i report for jury duty":
    "To check if you’re still needed, since juror demand changes daily. Call the night before to confirm.",
  "what should i wear":
    "Casual, respectful clothing. Ties not required. Slacks, dresses, or sport shirts are appropriate.",
  "where can i park":
    "Use public transit if possible. See the SEPTA or Philadelphia Parking Authority websites.",
  "who do i talk to about my jury check":
    "Call the Jury Commission Payroll Dept at 215-683-7193."
};

const questionGroups = {
  "Jury Selection": [
    "how did i get picked for jury service",
    "why have some people never been called for jury service and i've been called more than once",
    "what if i fail to return the questionnaire or report for service"
  ],
  Scheduling: [
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for time missed from work due to jury service",
    "what if the date i'm called to serve is not convenient",
    "what is considered an extreme hardship",
    "if i am excused by the voice response system when will i have to report again"
  ],
  "Payment / Work Hours": [
    "will i get paid for serving as a juror"
  ],
  "Requirements for Jury Duty": [
    "can i bring my cell phone, laptop, or other electronic device into the courthouse",
    "i lost my summons how do i get a new one",
    "what form of id is needed when inquiry about the status of a questionnaire/summons",
    "why am i told to call the night before i report for jury duty",
    "what should i wear",
    "where can i park",
    "who do i talk to about my jury check"
  ]
};

const chatBox = document.getElementById("chatBox");
const questionTree = document.getElementById("questionTree");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

appendMessage("How may I help you?", "bot");

// Helper: append message to chat
function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Collapsible group tree
function buildQuestionTree() {
  Object.entries(questionGroups).forEach(([group, questions]) => {
    const btn = document.createElement("button");
    btn.classList.add("collapsible");
    btn.textContent = group;
    questionTree.appendChild(btn);

    const content = document.createElement("div");
    content.classList.add("content");

    questions.forEach((q) => {
      const qBtn = document.createElement("button");
      qBtn.textContent = capitalizeFirstLetter(q) + "?";
      qBtn.onclick = () => {
        appendMessage(qBtn.textContent, "user");
        setTimeout(() => {
          appendMessage(questionsAndAnswers[q], "bot");
        }, 300);
      };
      content.appendChild(qBtn);
    });

    questionTree.appendChild(content);

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// Capitalize first letter helper
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Basic similarity check for user input
function similarity(str1, str2) {
  const words1 = str1.split(/\s+/);
  const words2 = str2.split(/\s+/);
  let matches = 0;
  words1.forEach((w1) => {
    if (words2.includes(w1)) matches++;
  });
  return matches / Math.max(words1.length, words2.length);
}

// Find best matching question for input
function getBotResponse(input) {
  const cleanInput = input.toLowerCase().trim();

  let bestMatch = null;
  let highestScore = 0;

  for (const question in questionsAndAnswers) {
    const score = similarity(cleanInput, question);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = question;
    }
  }

  if (highestScore > 0.4) {
    return questionsAndAnswers[bestMatch];
  } else {
    return "I'm not sure how to answer that. Try selecting a question from the list.";
  }
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  userInput.value = "";
  setTimeout(() => {
    const response = getBotResponse(input);
    appendMessage(response, "bot");
  }, 600);
});

buildQuestionTree();

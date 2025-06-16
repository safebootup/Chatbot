const questionsAndAnswers = {
  // Jury Selection
  "how did i get picked for jury service":
    "From a combined list of registered Philadelphia voters and adult licensed drivers, jurors are randomly selected by computer.",
  "why have some people never been called for jury service and i've been called more than once":
    "Selection is random. Duplicate name formats on different lists can increase chances. The court cannot alter the lists.",

  // Scheduling & Time Conflicts
  "what if the date i'm called to serve is not convenient":
    "Fill out your questionnaire and request a new date by phone or online. Hardship requests must be mailed.",
  "if i am excused by the voice response system when will i have to report again":
    "You’re treated as if you served and won’t be required again for 12 months.",
  "how long will i be required to serve":
    "You must serve one day unless selected for a trial, then for the trial duration.",
  "how often must i serve":
    "If you serve 1–2 days, you're exempt for 1 year. If you serve 3+ days, you're exempt for 3 years.",
  "does my employer have to pay me for jury service":
    "No, but they can’t punish you for attending. Employers are not required to pay you.",
  "what is considered an extreme hardship":
    "Childcare, lost wages, or caregiving issues. Documentation required. Call 215-683-7170 with questions.",

  // Payment
  "will i get paid for serving as a juror":
    "Yes. $9/day for the first 3 days, $25/day after. A check will be mailed after your service.",
  "who do i talk to about my jury check":
    "Call the Jury Commission Payroll Dept at 215-683-7193.",

  // Logistics & Requirements
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
  "what if i fail to return the questionnaire or report":
    "You may be held in contempt and fined. The court tries to avoid using this option.",
  "where can i park":
    "Use public transit if possible. See the SEPTA or Philadelphia Parking Authority websites."
};

// Grouped categories
const questionCategories = {
  "Jury Selection": [
    "how did i get picked for jury service",
    "why have some people never been called for jury service and i've been called more than once"
  ],
  "Scheduling & Time Conflicts": [
    "what if the date i'm called to serve is not convenient",
    "if i am excused by the voice response system when will i have to report again",
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for jury service",
    "what is considered an extreme hardship"
  ],
  "Payment": [
    "will i get paid for serving as a juror",
    "who do i talk to about my jury check"
  ],
  "Logistics & Requirements": [
    "can i bring electronics",
    "i lost my summons how do i get a new one",
    "what form of id is needed when inquiring about my summons",
    "why am i told to call the night before",
    "what should i wear",
    "what if i fail to return the questionnaire or report",
    "where can i park"
  ]
};

const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const categoryList = document.getElementById("categoryList");
const questionList = document.getElementById("questionList");

appendMessage("How may I help you?", "bot");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const cleanInput = input.toLowerCase().trim();
  for (const question in questionsAndAnswers) {
    if (cleanInput.includes(question)) {
      return questionsAndAnswers[question];
    }
  }
  return "I'm sorry, I couldn't find an answer to that. Try selecting a category.";
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

// Show categories on page load
Object.keys(questionCategories).forEach((category) => {
  const btn = document.createElement("button");
  btn.textContent = category;
  btn.onclick = () => showQuestions(category);
  categoryList.appendChild(btn);
});

function showQuestions(category) {
  questionList.innerHTML = "";
  const questions = questionCategories[category];
  questions.forEach((q) => {
    const btn = document.createElement("button");
    btn.textContent = q.charAt(0).toUpperCase() + q.slice(1) + "?";
    btn.onclick = () => {
      appendMessage(btn.textContent, "user");
      setTimeout(() => {
        appendMessage(questionsAndAnswers[q], "bot");
      }, 500);
    };
    questionList.appendChild(btn);
  });
}

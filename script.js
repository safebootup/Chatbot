// Data structure for Q&A with grouping
const groupedQuestions = {
  "Jury Selection": [
    "how did i get picked for jury service",
    "why have some people never been called for jury service and i've been called more than once",
    "what if i fail to return the questionnaire or report for service"
  ],
  "Scheduling": [
    "what if the date i'm called to serve is not convenient"
  ],
  "Payment/Work Hours": [
    "will i get paid for serving as a juror",
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for jury service",
    "what is considered an extreme hardship",
    "where can i park"
  ],
  "Requirements for Jury Duty": [
    "can i bring electronics",
    "how often must i serve",
    "i lost my summons how do i get a new one",
    "what form of id is needed when inquiring about my summons",
    "why am i told to call the night before",
    "what if i fail to return the questionnaire or report",
    "what should i wear"
  ],
  "Time Conflicts": [
    "how long will i be required to serve",
    "how often must i serve",
    "does my employer have to pay me for jury service",
    "what if the date i'm called to serve is not convenient",
    "what is considered an extreme hardship",
    "if i am excused by the voice response system when will i have to report again"
  ]
};

const questionsAndAnswers = {
  "how did i get picked for jury service":
    "From a combined list of registered Philadelphia voters and adult licensed drivers, jurors are randomly selected by computer.",
  "how often must i serve":
    "If you serve 1–2 days, you're exempt for 1 year. If you serve 3+ days, you're exempt for 3 years.",
  "i lost my summons how do i get a new one":
    "Call 215 683-7170 and follow prompts or speak to a representative, available Mon–Fri 8:30 AM – 3:30 PM.",
  "why have some people never been called for jury service and i've been called more than once":
    "Selection is random. Duplicate name formats on different lists can increase chances. The court cannot alter the lists.",
  "how long will i be required to serve":
    "You must serve one day unless selected for a trial, then for the trial duration.",
  "will i get paid for serving as a juror":
    "Yes. $9/day for the first 3 days, $25/day after. A check will be mailed after your service.",
  "does my employer have to pay me for jury service":
    "No, but they can’t punish you for attending. Employers are not required to pay you.",
  "what if the date i'm called to serve is not convenient":
    "Fill out your questionnaire and request a new date by phone or online. Hardship requests must be mailed.",
  "what is considered an extreme hardship":
    "Childcare, lost wages, or caregiving issues. Documentation required. Call 215-683-7170 with questions.",
  "what form of id is needed when inquiring about my summons":
    "Name, address, date of birth, and participant number (if known). Never your SSN.",
  "if i am excused by the voice response system when will i have to report again":
    "You’re treated as if you served and won’t be required again for 12 months.",
  "why am i told to call the night before":
    "To check if you’re still needed, since juror demand changes daily. Call the night before to confirm.",
  "what should i bring when i report":
    "Bring your summons and something to read while waiting.",
  "what if i fail to return the questionnaire or report":
    "You may be held in contempt and fined. The court tries to avoid using this option.",
  "what should i wear":
    "Casual, respectful clothing. Ties not required. Slacks, dresses, or sport shirts are appropriate.",
  "can i bring electronics":
    "Yes, but they must be turned off in the courtroom unless otherwise instructed.",
  "where can i park":
    "Use public transit if possible. See the SEPTA or Philadelphia Parking Authority websites.",
  "who do i talk to about my jury check":
    "Call the Jury Commission Payroll Dept at 215-683-7193."
};

const chatBox = document.getElementById("chatBox");
const questionList = document.getElementById("questionList");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const questionTree = document.getElementById("questionTree");

// Initialize bot with welcome message
appendBotMessage("How may I help you?");

// Append user message function
function appendUserMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Append bot message function with avatar and name "James"
function appendBotMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("message", "bot");

  const avatar = document.createElement("img");
  avatar.src = "https://randomuser.me/api/portraits/men/75.jpg"; // Random male avatar
  avatar.alt = "James Avatar";
  avatar.classList.add("avatar");

  const content = document.createE

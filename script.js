const questionsAndAnswers = {
  "Jury Selection": {
    "How did I get picked for jury service":
      "From a combined list of registered Philadelphia voters and licensed drivers, jurors are randomly selected.",
    "Why have some people never been called for jury service and I've been called more than once":
      "Selection is random. Different name formats or multiple listings can increase your chances.",
    "What if I fail to return the questionnaire or report for service":
      "You may be held in contempt and fined. The court prefers voluntary compliance."
  },
  "Payment/Work Hours": {
    "Will I get paid for serving as a juror":
      "Yes. $9/day for the first 3 days, $25/day after. A check will be mailed.",
    "How long will I be required to serve":
      "One day unless selected for trial, then you serve the trial's duration.",
    "How often must I serve":
      "Serve 1–2 days: exempt 1 year. Serve 3+ days: exempt 3 years.",
    "Does my employer have to pay me for jury service":
      "No, but they cannot punish you for attending jury duty.",
    "What is considered an extreme hardship":
      "Childcare, lost wages, or caregiver issues. Documentation may be required.",
    "Where can I park":
      "Use public transportation if possible. Refer to SEPTA or Parking Authority."
  },
  "Requirements for Jury Duty": {
    "Can I bring electronics":
      "Yes, but they must be turned off in the courtroom.",
    "I lost my summons how do I get a new one":
      "Call 215-683-7170 and follow the prompts or speak with a representative.",
    "What form of ID is needed when inquiring about my summons":
      "Name, address, date of birth, and participant number (if known)."
  },
  "Time Conflicts": {
    "What if the date I'm called to serve is not convenient":
      "Submit a rescheduling request online or by phone. Hardships must be mailed.",
    "If I am excused by the voice response system when will I have to report again":
      "You're treated as if you served and won't be called again for 12 months.",
    "Why am I told to call the night before":
      "To check if you’re still needed. Juror demand changes daily.",
    "What should I wear":
      "Respectful attire: slacks, dresses, or sport shirts. No ties required."
  },
  "Other": {
    "Who do I talk to about my jury check":
      "Call the Jury Commission Payroll Dept at 215-683-7193."
  }
};

const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const faqContainer = document.getElementById("faqContainer");

appendMessage("Hi, I'm James. How may I assist you today?", "bot");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "https://randomuser.me/api/portraits/men/32.jpg";
    avatar.alt = "James";
    avatar.classList.add("bot-avatar");

    const span = document.createElement("span");
    span.textContent = text;

    msg.appendChild(avatar);
    msg.appendChild(span);
  } else {
    msg.textContent = text;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const cleaned = input.toLowerCase().trim();
  for (const category in questionsAndAnswers) {
    for (const q in questionsAndAnswers[category]) {
      if (cleaned.includes(q.toLowerCase())) {
        return questionsAndAnswers[category][q];
      }
    }
  }
  return "I'm sorry, I couldn't find an answer to that. Please select a question below.";
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

function renderFAQ() {
  for (const category in questionsAndAnswers) {
    const details = document.createElement("details");
    details.className = "faq-group";

    const summary = document.createElement("summary");
    summary.textContent = category;
    details.appendChild(summary);

    for (const question in questionsAndAnswers[category]) {
      const btn = document.createElement("button");
      btn.textContent = question + "?";
      btn.onclick = () => {
        appendMessage(question + "?", "user");
        setTimeout(() => {
          appe

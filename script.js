const questionsAndAnswers = {
  "Jury Selection": {
    "How did I get picked for jury service":
      "From a combined list of registered Philadelphia voters and adult licensed drivers...",
    "Why have some people never been called for jury service and I've been called more than once":
      "Selection is random. Duplicate name formats can increase chances.",
    "What if I fail to return the questionnaire or report for service":
      "You may be held in contempt and fined."
  },
  "Scheduling Conflicts": {
    "What if the date I'm called to serve is not convenient":
      "Request a new date online or by phone. Hardship requests must be mailed.",
    "If I am excused by the voice response system, when will I have to report again":
      "You are treated as having served and won’t be required for 12 months."
  },
  "Payment / Work Hours": {
    "Will I get paid for serving as a juror":
      "Yes. $9/day for the first 3 days, $25/day after.",
    "How long will I be required to serve":
      "One day unless selected for a trial.",
    "How often must I serve":
      "If you serve 1–2 days, you're exempt for 1 year...",
    "Does my employer have to pay me for time missed from work due to jury service":
      "No, but they cannot punish you for attending.",
    "What is considered an extreme hardship":
      "Childcare, lost wages, caregiving. Documentation required.",
    "Where can I park":
      "Use public transit if possible. See SEPTA or Parking Authority."
  },
  "Requirements": {
    "Can I bring my cell phone, laptop, or other electronic device into the courthouse":
      "Yes, but they must be turned off in the courtroom.",
    "I lost my Summons how do I get a new one":
      "Call 215 683-7170 and follow the prompts.",
    "What form of ID is needed when inquiry about the status of a questionnaire/summons":
      "Name, address, DOB, and participant number (if known).",
    "Why am I told to call the night before I report for jury duty":
      "To check if you’re still needed. Demand changes daily.",
    "What should I wear":
      "Casual, respectful clothing. Ties not required."
  }
};

const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const faqContainer = document.getElementById("faqContainer");

// Welcome message
appendMessage("Hi, I'm James. How can I help you with jury duty today?", "bot");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "https://randomuser.me/api/portraits/men/75.jpg"; // Random avatar for 'James'
    avatar.className = "avatar";
    msg.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.textContent = text;
  msg.appendChild(bubble);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  for (const category in questionsAndAnswers) {
    for (const question in questionsAndAnswers[category]) {
      if (lowerInput.includes(question.toLowerCase())) {
        return questionsAndAnswers[category][question];
      }
    }
  }
  return "I'm sorry, I couldn't find an answer to that. Try selecting a question below.";
}

// Handle chat submit
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

// Populate FAQ
for (const category in questionsAndAnswers) {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = category;
  details.appendChild(summary);

  for (const question in questionsAndAnswers[category]) {
    const btn = document.createElement("button");
    btn.textContent = question + "?";
    btn.onclick = () => {
      appendMessage(btn.textContent, "user");
      setTimeout(() => {
        appendMessage(questionsAndAnswers[category][question], "bot");
      }, 500);
    };
    details.appendChild(btn);
  }

  faqContainer.appendChild(details);
}

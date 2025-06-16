// Data: grouped questions & answers
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

// Group definitions
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

const chatBox = document.getElementById("chatBox");
const questionList = document.getElementById("questionList");
const questionTree = document.getElementById("questionTree");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

// Bot details
const botName = "James";
const botAvatar = "https://randomuser.me/api/portraits/men/65.jpg"; // Random male avatar

// Append a message to chat
function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = botAvatar;
    avatar.alt = `${botName} avatar`;
    avatar.className = "avatar";

    const content = document.createElement("div");
    content.className = "content";

    const name = document.createElement("div");
    name.textContent = botName;
    name.className = "name";

    const bubble = document.createElement("div");
    bubble.textContent = text;
    bubble.className = "bubble";

    content.appendChild(name);
    content.appendChild(bubble);

    msg.appendChild(avatar);
    msg.appendChild(content);
  } else {
    // user message bubble only
    const bubble = document.createElement("div");
    bubble.textContent = text;
    bubble.className = "bubble";
    msg.appendChild(bubble);
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Returns bot response for input
function getBotResponse(input) {
  const cleanInput = input.toLowerCase().trim();
  for (const question in questionsAndAnswers) {
    if (cleanInput.includes(question)) {
      return questionsAndAnswers[question];
    }
  }
  return "I'm sorry, I couldn't find an answer to that. Please try one of the questions below.";
}

// Handle form submit
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

// Populate quick question buttons below chat
Object.keys(questionsAndAnswers).forEach((question) => {
  const btn = document.createElement("button");
  btn.textContent = question.charAt(0).toUpperCase() + question.slice(1) + "?";
  btn.onclick = () => {
    appendMessage(btn.textContent, "user");
    setTimeout(() => {
      appendMessage(questionsAndAnswers[question], "bot");
    }, 500);
  };
  questionList.appendChild(btn);
});

// Build collapsible question tree
function buildQuestionTree() {
  for (const group in groupedQuestions) {
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("group");

    const header = document.createElement("div");
    header.classList.add("group-header");
    header.tabIndex = 0; // make keyboard focusable

    const title = document.createElement("span");
    title.textContent = group;

    const toggleIcon = document.createElement("span");
    toggleIcon.classList.add("toggle-icon");
    toggleIcon.textContent = "+";

    header.appendChild(title);
    header.appendChild(toggleIcon);
    groupDiv.appendChild(header);

    const questionsList = document.createElement("div");
    questionsList.classList.add("questions-list");

    groupedQuestions[group].forEach(q => {
      const qBtn = document.createElement("button");
      qBtn.textContent = q.charAt(0).toUpperCase() + q.slice(1) + "?";
      qBtn.onclick = () => {
        appendMessage(qBtn.textContent, "user");
        setTimeout(() => {
          appendMessage(questionsAndAnswers[q] || "Sorry, answer not found.", "bot");
        }, 300);
      };
      questionsList.appendChild(qBtn);
    });

    groupDiv.appendChild(questionsList);

    // Toggle on click
    header.addEventListener("click", () => {
      const isOpen = groupDiv.classList.toggle("open");
      toggleIcon.textContent = isOpen ? "−" : "+";
    });

    // Toggle with keyboard (Enter or Space)
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });

    questionTree.appendChild(groupDiv);
  }
}

// Initialize bot with welcome message and build tree
appendMessage("How may I help you?", "bot");
buildQuestionTree();

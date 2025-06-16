const botName = "James";
const botAvatar = "https://www.bing.com/images/search?q=avatar+image&id=BD27E8044123DA6E1E38206F81A140DC8A12C2CC&FORM=IACFIR"; // Replace with your avatar image URL

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

const questionGroups = {
  "Jury Selection": [
    "how did i get picked for jury service",
    "why have some people never been called for jury service and i've been called more than once",
    "what if i fail to return the questionnaire or report"
  ],
  "Scheduling": [
    "what if the date i'm called to serve is not convenient",
    "how often must i serve",
    "if i am excused by the voice response system when will i have to report again"
  ],
  "Payment/Work Hours": [
    "will i get paid for serving as a juror",
    "how long will i be required to serve",
    "does my employer have to pay me for jury service",
    "what is considered an extreme hardship",
    "where can i park"
  ],
  "Requirements for Jury Duty": [
    "can i bring electronics",
    "i lost my summons how do i get a new one",
    "what form of id is needed when inquiring about my summons",
    "why am i told to call the night before",
    "what should i wear",
    "what if i fail to return the questionnaire or report"
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
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const questionGroupsContainer = document.getElementById("questionGroups");

// Initialize bot with welcome message
appendMessage("How may I help you?", "bot");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = botAvatar;
    avatar.alt = botName;
    avatar.classList.add("avatar");

    const textContainer = document.createElement("div");
    textContainer.classList.add("bot-text-container");

    const nameLabel = document.createElement("div");
    nameLabel.textContent = botName;
    nameLabel.classList.add("bot-name");

    const messageText = document.createElement("div");
    messageText.textContent = text;
    messageText.classList.add("bot-text");

    textContainer.appendChild(nameLabel);
    textContainer.appendChild(messageText);

    msg.appendChild(avatar);
    msg.appendChild(textContainer);
  } else {
    msg.textContent = text;
  }

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
  return "I'm sorry, I couldn't find an answer to that. Try selecting a question below.";
}

// Handle text input submit
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

// Populate clickable questions below input box
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

// Populate collapsible question groups
for (const group in questionGroups) {
  // Create group title button
  const groupTitle = document.createElement("div");
  groupTitle.textContent = group;
  groupTitle.classList.add("group-title");

  // Create container for group questions
  const groupContent = document.createElement("div");
  groupContent.classList.add("group-content");

  // Add each question button to group content
  questionGroups[group].forEach((q) => {
    const btn = document.createElement("button");
    btn.textContent = q.charAt(0).toUpperCase() + q.slice(1) + "?";
    btn.onclick = () => {
      appendMessage(btn.textContent, "user");
      setTimeout(() => {
        appendMessage(questionsAndAnswers[q], "bot");
      }, 500);
    };
    groupContent.appendChild(btn);
  });

  // Toggle open/close on group title click
  groupTitle.addEventListener("click", () => {
    groupContent.classList.toggle("open");
  });

  questionGroupsContainer.appendChild(groupTitle);
  questionGroupsContainer.appendChild(groupContent);
}

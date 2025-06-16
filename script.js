const questionsAndAnswers = {
  "How did I get picked for jury service?":
    "From a combined list of registered Philadelphia voters and adult licensed drivers, the required number of jurors for a particular day are randomly selected by computer and summoned to appear for jury duty.",

  "How often must I serve?":
    "If a person serves for one or two days, they need not serve again for a period of one year. If service is for three or more days, the exemption period is three years.",

  "I lost my Summons how do I get a new one?":
    "Call 215 683-7170 and either follow the prompts to request a new summons or press '4' then '0' to speak to a representative. Available Mon–Fri 8:30 AM – 3:30 PM.",

  "Why have some people never been called for jury service and I've been called more than once?":
    "Selection is random. Differences in how your name appears on voter/DMV lists can increase chances of selection. The court cannot modify these lists.",

  "How long will I be required to serve?":
    "You will be required to serve for one day unless selected for a trial, in which case you must serve for the length of the trial.",

  "Will I get paid for serving as a juror?":
    "Yes. $9/day for the first three days, $25/day after that. A check is mailed after your service ends.",

  "Does my employer have to pay me for time missed from work due to jury service?":
    "Employers aren’t required to pay you, but they cannot penalize you for attending jury duty.",

  "What if the date I'm called to serve is not convenient?":
    "Complete your questionnaire and request a new date via phone or online. Hardship requests must be mailed with proof.",

  "What is considered an extreme hardship?":
    "Loss of wages, child care issues, or caregiver duties. Verification is required. Call 215-683-7170 with questions.",

  "What form of ID is needed when inquiring about the status of a summons?":
    "Provide full name, mailing address, date of birth, and participant number. Never provide your SSN.",

  "If I am excused by the voice system, when will I have to report again?":
    "If excused, you are treated as if you served. You won’t be required again for at least 12 months.",

  "Why am I told to call the night before I report?":
    "The court may not need all jurors. Call the night before to find out if you must report the next day.",

  "What should I bring when I report?":
    "Bring your summons and something to read. You’ll spend time waiting.",

  "What if I fail to return the questionnaire or report for service?":
    "You may be held in contempt and fined. The court tries to be flexible to avoid this.",

  "What should I wear?":
    "Dress casually but respectfully. No need for ties. Slacks, sport shirts, and dresses are appropriate.",

  "Can I bring electronics into the courthouse?":
    "Yes, but turn them off in courtrooms unless told otherwise by court staff.",

  "Where can I park?":
    "Use public transport if possible. Visit SEPTA and Philadelphia Parking Authority websites for help.",

  "Who do I talk to about my jury check?":
    "Contact the Jury Commission Payroll Department at 215-683-7193."
};

const chatBox = document.getElementById("chatBox");
const questionList = document.getElementById("questionList");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleQuestionClick(question) {
  appendMessage(question, "user");
  setTimeout(() => {
    appendMessage(questionsAndAnswers[question], "bot");
  }, 500); // 0.5s delay for realism
}

Object.keys(questionsAndAnswers).forEach((question) => {
  const btn = document.createElement("button");
  btn.textContent = question;
  btn.onclick = () => handleQuestionClick(question);
  questionList.appendChild(btn);
});

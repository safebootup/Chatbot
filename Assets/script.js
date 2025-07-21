const questionsAndAnswers = { //List of normal questions and answers. the order is <QUESTION>: <ANSWER>, 
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
    "Call the Jury Commission Payroll Dept at 215-683-7193.",
    //Dud Questions that lead to negative responses
    //This makes the fuzzy more strict
  "how did i":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "why have some":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "what if":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "will i":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "how long":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "how often must":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "does my":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "what is":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "where can":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "can i bring a":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "can":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "if i":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "what if the":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "who do":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "who":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "What":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "When":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Where":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Why":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Which":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Whose":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "How":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Weapon":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Into the courthouse":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Into the":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Why cant I":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Gun":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "What if I":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "how have you":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "you":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Bomb":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Smuggle":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Knife":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Firearm":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "explosive":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "shoot":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "stab":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "Attack":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "violent":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "threat":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "grenade":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "poison":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "arson":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "assualt":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.", 
  "drugs":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "weed":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "marijuana":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "bribe":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "meth":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "cocaine":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "sabotage":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "steal":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "theft":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "fraud":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "tamper":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "false documents":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
  "fake id":
    "I'm sorry, I couldn't find an answer to that. Try selecting a question below.",
};
//A list of words that should return a dud response no matter what if they are included in the sentence
const wordBlacklist = ["tamper", "theft", "steal", "gun", "shoot", "firearm", "sabotage","bomb", "explosive", "bribe", "knife", "smuggle","arson", "poison", "meth", "cocaine", "weapon"];
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
const avatar = document.createElement("img");// Make these global so the text init can reach the given profile
avatar.src=" ";
avatar.alt= " ";
rnum = -1;
fm = -1;
function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);


  if (sender === "bot") {
    const avatar = document.createElement("img");

    //Random avatar generator
    if(rnum<0){
      fm = Math.floor(Math.random() * 2);
      if(fm >=1){ //Male or female, 1< is male 1> is female
        rnum = Math.floor(Math.random() * 10); //0-9 generate the "random" image
        switch(rnum){ //Switch case of all possible options. Selects name and picture both of which are from the site
          case 0:
            avatar.src = "https://randomuser.me/api/portraits/women/44.jpg"
            avatar.alt = "Jordan"
            break;
          case 1:
            avatar.src = "https://randomuser.me/api/portraits/women/89.jpg"
            avatar.alt = "Tiffany"
            break;
          case 2:
            avatar.src = "https://randomuser.me/api/portraits/women/62.jpg"
            avatar.alt = "Rhonda"
            break;
          case 3:
            avatar.src = "https://randomuser.me/api/portraits/women/59.jpg"
            avatar.alt = "Brianna"
            break;
          case 4:
            avatar.src = "https://randomuser.me/api/portraits/women/42.jpg"
            avatar.alt = "Jackie"
            break;
          case 5:
            avatar.src = "https://randomuser.me/api/portraits/women/27.jpg"
            avatar.alt = "Megan"
            break;
          case 6:
            avatar.src = "https://randomuser.me/api/portraits/women/12.jpg"
            avatar.alt = "Shannon"
            break;
          case 7:
            avatar.src = "https://randomuser.me/api/portraits/women/85.jpg"
            avatar.alt = "Wanda"
            break;
          case 8:
            avatar.src = "https://randomuser.me/api/portraits/women/90.jpg"
            avatar.alt = "Ruby"
            break;
          default: //If its something unexpected you get scarlett
            avatar.src = "https://randomuser.me/api/portraits/women/61.jpg"
            avatar.alt = "Scarlett"
        }
      } else {
        rnum = Math.floor(Math.random() * 10); //0-9 generate the random image
        switch(rnum){ //Switch case of all possible options. 
          case 0:
            avatar.src = "https://randomuser.me/api/portraits/men/55.jpg"
            avatar.alt = "Louvel"
            break;
          case 1:
            avatar.src = "https://randomuser.me/api/portraits/men/83.jpg"
            avatar.alt = "Eric"
            break;
          case 2:
            avatar.src = "https://randomuser.me/api/portraits/men/69.jpg"
            avatar.alt = "Ken"
            break;
          case 3:
            avatar.src = "https://randomuser.me/api/portraits/men/26.jpg"
            avatar.alt = "Pedro"
            break;
          case 4:
            avatar.src = "https://randomuser.me/api/portraits/men/58.jpg"
            avatar.alt = "Armando"
            break;
          case 5:
            avatar.src = "https://randomuser.me/api/portraits/men/56.jpg"
            avatar.alt = "Bill"
            break;
          case 6:
            avatar.src = "https://randomuser.me/api/portraits/men/49.jpg"
            avatar.alt = "Maurice"
            break;
          case 7:
            avatar.src = "https://randomuser.me/api/portraits/men/1.jpg"
            avatar.alt = "Lloyd"
            break;
          case 8:
            avatar.src = "https://randomuser.me/api/portraits/men/32.jpg"
            avatar.alt = "James"
            break;
          default: //Incase its something random you get francisco
            avatar.src = "https://randomuser.me/api/portraits/men/61.jpg"
            avatar.alt = "Francisco"
        }
      }
    } else {
      if(fm >=1){ //Male or female, 1< is male 1> is female
        switch(rnum){ //Switch case of all possible options. Selects name and picture both of which are from the site
          case 0:
            avatar.src = "https://randomuser.me/api/portraits/women/44.jpg"
            avatar.alt = "Jordan"
            break;
          case 1:
            avatar.src = "https://randomuser.me/api/portraits/women/89.jpg"
            avatar.alt = "Tiffany"
            break;
          case 2:
            avatar.src = "https://randomuser.me/api/portraits/women/62.jpg"
            avatar.alt = "Rhonda"
            break;
          case 3:
            avatar.src = "https://randomuser.me/api/portraits/women/59.jpg"
            avatar.alt = "Brianna"
            break;
          case 4:
            avatar.src = "https://randomuser.me/api/portraits/women/42.jpg"
            avatar.alt = "Jackie"
            break;
          case 5:
            avatar.src = "https://randomuser.me/api/portraits/women/27.jpg"
            avatar.alt = "Megan"
            break;
          case 6:
            avatar.src = "https://randomuser.me/api/portraits/women/12.jpg"
            avatar.alt = "Shannon"
            break;
          case 7:
            avatar.src = "https://randomuser.me/api/portraits/women/85.jpg"
            avatar.alt = "Wanda"
            break;
          case 8:
            avatar.src = "https://randomuser.me/api/portraits/women/90.jpg"
            avatar.alt = "Ruby"
            break;
          default:
            avatar.src = "https://randomuser.me/api/portraits/women/61.jpg"
            avatar.alt = "Scarlett"
        }
      } else {
        switch(rnum){ //Switch case of all possible options. 
          case 0:
            avatar.src = "https://randomuser.me/api/portraits/men/55.jpg"
            avatar.alt = "Louvel"
            break;
          case 1:
            avatar.src = "https://randomuser.me/api/portraits/men/83.jpg"
            avatar.alt = "Eric"
            break;
          case 2:
            avatar.src = "https://randomuser.me/api/portraits/men/69.jpg"
            avatar.alt = "Ken"
            break;
          case 3:
            avatar.src = "https://randomuser.me/api/portraits/men/26.jpg"
            avatar.alt = "Pedro"
            break;
          case 4:
            avatar.src = "https://randomuser.me/api/portraits/men/58.jpg"
            avatar.alt = "Armando"
            break;
          case 5:
            avatar.src = "https://randomuser.me/api/portraits/men/56.jpg"
            avatar.alt = "Bill"
            break;
          case 6:
            avatar.src = "https://randomuser.me/api/portraits/men/49.jpg"
            avatar.alt = "Maurice"
            break;
          case 7:
            avatar.src = "https://randomuser.me/api/portraits/men/1.jpg"
            avatar.alt = "Lloyd"
            break;
          case 8:
            avatar.src = "https://randomuser.me/api/portraits/men/32.jpg"
            avatar.alt = "James"
            break;
          default:
            avatar.src = "https://randomuser.me/api/portraits/men/61.jpg"
            avatar.alt = "Francisco"
        }
      }
    }
    //Legacy
    //avatar.src = "https://randomuser.me/api/portraits/men/32.jpg";
    //avatar.alt = "James";

    const textBox = document.createElement("div");
    textBox.classList.add("text");
    textBox.textContent = avatar.alt + `: ${text}`;
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

// Levenshtein distance function
function levenshteinDistance(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() =>
    Array(b.length + 1).fill(null)
  );

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,       // Deletion
        dp[i][j - 1] + 1,       // Insertion
        dp[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  return dp[a.length][b.length];
}

// Closest match using Levenshtein similarity
function getClosestMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let lowestDistance = Infinity;

  for (const question in questionsAndAnswers) {
    const distance = levenshteinDistance(input, question);
    const threshold = Math.floor(question.length * 0.3); // ~70% similarity

    if (distance <= threshold && distance < lowestDistance) {
      lowestDistance = distance;
      bestMatch = question;
    }
  }

  return bestMatch;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  userInput.value = "";

  setTimeout(() => {
    //immediately check if the message contains a word in the blacklist
    if (wordBlacklist.some(validate => input.includes(validate))){
      appendMessage("I'm sorry, I couldn't find an answer to that. Try selecting a question below or talk to a representative at (215-683-7170) / (215-683-7183)!", "bot");
      return -1
    }
    const match = getClosestMatch(input);
    if (match) {
      appendMessage(questionsAndAnswers[match], "bot");
    } else {
      appendMessage("I'm sorry, I couldn't find an answer to that. Try selecting a question below or talk to a representative at (215-683-7170) / (215-683-7183).", "bot");
    }
  }, 600);
});

function renderFAQ() {
  for (const group in faqStructure) {
    const details = document.createElement("details");
    details.classList.add("faq-group");
    
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
  //Cant make the Introduction work so im temporarily removing it
  //appendMessage("Hi, I'm "+ avatar.alt +". Ask me anything about jury duty or pick a question below.", "bot");
  appendMessage("Hello, Ask me anything about jury duty or pick a question below.", "bot");
  renderFAQ();
};

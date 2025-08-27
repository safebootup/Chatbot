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
  //New questions
  "It is against my religion to judge people. How can I be excused":
    "The First Judicial District does not excuse citizens due to religious beliefs. However, upon your request, we can assist you and reschedule your jury service to a Civil trial, which does not involve criminal matters.",
  "How can I postpone my jury duty date":
    "If this is your first postponement request, you can postpone yourself through our website at: https://fjdjurorq.phila.gov/ejuror/webapp/login. If you have been postponed once before, or failed to appear for your original service date, please email us at: jury@courts.phila.gov with your request. Please include your name, participant number, and date you would like to be postponed to. The Jury Staff will email you letting you know if your request has been granted.",
  "Will I receive a new summons if I postpone my jury duty date online":
    "Yes, a new summons will be mailed to your home address.",
  "I serve in the military and I cannot attend jury duty, how can I be excused":
    "Please be advised to be excused from jury service a copy of your Military Orders is needed. Please email the document to jury@courts.phila.gov Please include your juror participant number on the documents.",
  "I am the sole provider for my family and cannot afford to come to jury duty":
    "A letter will be needed from your EMPLOYER on COMPANY LETTERHEAD stating that you are not compensated for jury service. Once you receive the letter, email, or fax it to us, and after we receive the letter, we will excuse you from service for the year. Please include your juror participant number on the documents. The fax number is 215-683-7183 and our email address is jury@courts.phila.gov",
  "I am not paid by my job/employer for jury service, how can I be excused":
    "A letter will be needed from your EMPLOYER on COMPANY LETTERHEAD stating that you are not compensated for jury service. Once you receive the letter, email, or fax it to us, and after we receive the letter, we will excuse you from service for the year. Please include your juror participant number on the documents. The fax number is 215-683-7183 and our email address is jury@courts.phila.gov",
  "I am sick, disabled, under doctor’s care, depressed, have anxiety, Bi-polar, take medication that affects me, cannot sit for long periods of time, and cannot come to jury duty; how can I be excused":
    "To be excused for a medical hardship, the Jury Commission requires a letter from your doctor stating that you are unable to perform the functions of a juror. Once you have the letter, please email it to jury@courts.phila.gov or fax it to 215-683-7183. Please include your juror participant number when sending the letter.",
  "I am self-employed and own my own business. How can I be excused":
    "If you are self-employed and asking to be excused from Jury service, please send us your business card and EIN. Please email the proof to jury@courts.phila.gov. Please include your juror participant number in the email. After we receive the information you will be excused.",
  "I am a full-time student and cannot miss classes to attend jury duty. How can I be excused":
    "If you are a full-time student, and would like to be excused from jury service, the Jury Commission requires a copy of your Student ID AND a copy of your full-time class schedule. Email the proof to jury@courts.phila.gov Please include your juror participation number in the email. Once we receive the proof, we will excuse you from service for a year.",
  "I moved out of Philadelphia and received a jury summons. How can I be taken off the Philadelphia jury list":
    "Please provide us with proof that you no longer live in Philadelphia. Proof is one of the following with your name and new address outside of Philadelphia on it: Driver’s License, Voter’s Registration card, Utility bill, Mortgage/Lease papers, or anything that shows your name and non-Philadelphia address. Please email the proof to jury@courts.phila.gov and include your juror participant number in the email. Once we receive the proof, you will be excused from jury service.",
  "I am a doctor, lawyer, nurse, teacher, essential employee and cannot serve jury duty. How can I be excused":
    "Per Philadelphia’s new Jury Commissioner, the nature of your employment does not excuse you from jury duty. However, the Jury Commissioner is more than willing to accommodate you with a new date if you cannot make the date on your summons. Please email jury@courts.phila.gov with a date within the next two months that will work for your schedule.",
  "I am a police officer/firefighter in Philadelphia. How do I get excused":
    "The Jury Commissioner offers a courtesy to active Philadelphia police officers and firefighters and will excuse you from service for the year with the proper documentation. Please submit a Directive 13, filled out by your supervisor, to jury@courts.phila.gov .",
  "I have family members who are police officers, attorneys, judges, and do not think I will be a fair/impartial juror. How can I be excused":
    "Being related to someone who works for the police department or in the court system does not excuse you from jury duty. However, we can reassign you to a civil trial instead of a criminal trial. You will have the opportunity to voice any concerns or biases you might have to the Judge on your selection day.",
  "I am a breastfeeding mother. What are my options":
    "We have lactation rooms available in both City Hall and the Stout Center. Please notify the jury staff when you arrive, and they will assist you. If you are asking to be excused from service, please email your request to the jury staff at: jury@courts.phila.gov",
  "I was arrested/convicted of a crime; does that excuse me from jury duty":
    "If you were convicted of a crime punishable by one or more years in prison, you will be disqualified from service. If you were arrested and not sure if you qualify for jury duty, please email your question to: jury@courts.phila.gov. We will do a background check and notify you of your status. Please include your full name and participant number in the email.",
  "What time does the jury room open":
    "The Jury offices in both City Hall room 195 and 1301 Filbert St., room 101 open at 7:30am.",
  "I want to bring my lunch with me. Are there microwaves available for me to use":
    "If you need to use a microwave, please let the jury staff in the assembly room know and they will assist you.",
  "What is the fax number":
    "The Jury Commission’s fax number is 215-683-7183. When faxing a document, please make sure your name and participant number are clearly visible. Please include your email address and we will notify you when the document is received.",
  "What happens if I do not show up for jury duty":
    "If you do not show up for your scheduled jury duty date, you will be mailed a Failure to Appear summons. If you do not show up for the rescheduled date, you will be placed on a scofflaw list. When the President Judge sees too many people are not coming in for service, they will subpoena you to court where you could possibly be fined up to $500 and sent to prison for up to 10 days. Then ultimately given a new jury duty date.",
  "How do I get in contact someone in the Jury Commission":
    "You can call us at 215-683-7170 Monday through Friday from 7:30am to 4:00pm. You can also email us at: jury@courts.phila.gov. If you are emailing us, please include your name and participant number.",
  "I lost my summons. How do I get my participant number":
    "Email the Jury Commission at: jury@courts.phila.gov Please send us your full name and home address.",
  "Does the Jury Commission provide transportation":
    "No, the Jury Commission does not provide transportation. We recommend using public transportation.",
  "What do I do if the information on my summons is wrong":
    "If your name or birthdate is incorrect on your summons, please email us at jury@courts.phila.gov. Please provide us with your participant number, what information is wrong, and the correct information. We will email you back once the correction has been made. If your address is wrong, you will be able to make that change online at https://fjdjurorq.phila.gov/ejuror/webapp/login",
  "How do I request a hardship":
    "You can email your request to: jury@courts.phila.gov. Please include your name, participant number, and hardship. The Jury staff will email you back with our decision.",
  "Where do I report for jury duty":
    "If your scheduled jury service date is on a Monday, Tuesday, or Wednesday, you are to report to 1301 Filbert St., room 101. If you are scheduled to appear on a Thursday or Friday, you are to report to City Hall room 195.",
  "I only received a final notice postcard; I never received the original summons. What should I do":
    "On the final notice postcard, above your name, is a nine-digit juror number. Please go to https://fjdjurorq.phila.gov/ejuror/webapp/login input your information and answer the questionnaire. If the date on the notice does not work for your schedule, you will be able to postpone yourself after the questionnaire is complete. If you need additional help, please email us at jury@courts.phila.gov",

    //Dud Questions that lead to negative responses
    //This makes the fuzzy more strict
    /*
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
    */
};
//A list of words that should return a dud response no matter what if they are included in the sentence
const wordBlacklist = ["tamper", "theft", "steal", "gun", "shoot", "firearm", "sabotage","bomb", "explosive", "bribe", "knife", "smuggle","arson", "poison", "meth", "cocaine", "weapon"];
// Whitelist keywords for boosting match accuracy
const wordWhitelist = ["military", "childcare", "police", "officer", "firefighter"];


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
  ]/*,
  "New not yet placed": [
    "It is against my religion to judge people. How can I be excused?",
    "How can I postpone my jury duty date?",
    "Will I receive a new summons if I postpone my jury duty date online?",
    "I serve in the military and I cannot attend jury duty, how can I be excused?",
    "I am not paid by my job/employer for jury service, how can I be excused?",
    "I am the sole provider for my family and cannot afford to come to jury duty.",
    "I am sick, disabled, under doctor’s care, depressed, have anxiety, Bi-polar, take medication that affects me, cannot sit for long periods of time, and cannot come to jury duty; how can I be excused?",
    "I am self-employed and own my own business. How can I be excused?",
    "I am a full-time student and cannot miss classes to attend jury duty. How can I be excused?",
    "I moved out of Philadelphia and received a jury summons. How can I be taken off the Philadelphia jury list?",
    "I am a police officer/firefighter in Philadelphia. How do I get excused?",
    "I have family members who are police officers, attorneys, judges, and do not think I will be a fair/impartial juror. How can I be excused?",
    "I am a breastfeeding mother. What are my options?",
    "I was arrested/convicted of a crime; does that excuse me from jury duty?",
    "What time does the jury room open?",
    "I want to bring my lunch with me. Are there microwaves available for me to use?",
    "What is the fax number?",
    "What happens if I do not show up for jury duty?",
    "How do I get in contact someone in the Jury Commission?",
    "I lost my summons. How do I get my participant number?",
    "Does the Jury Commission provide transportation?",
    "What do I do if the information on my summons is wrong?",
    "How do I request a hardship?",
    "Where do I report for jury duty?",
    "I only received a final notice postcard; I never received the original summons. What should I do?",
    "I am a doctor, lawyer, nurse, teacher, essential employee and cannot serve jury duty. How can I be excused?",
  ]
    */
};
let log = "Log Start: \n";
//const blob = new Blob([log], { type: "text/plain" }); use to save log
const lota = new FormData //Prepare blob for upload
const SITE ="" //https://webhook.site/044bce7e-8c6e-4877-976f-1128d63a955f" //Point this at the backend code for the logs to be sent to. Make sure the name of form is logs
const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const faqContainer = document.getElementById("faqContainer");
const avatar = document.createElement("img");// Make these global so the text init can reach the given profile
avatar.src=" ";
avatar.alt= " ";
let rnum = -1;
let fm = -1;
let pendingSuggestion = null; // Store suggested question for follow-up
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
  log += "Event: Message sent-Time:do later-Details: sender="+ sender +" msg=" +text +"\n"
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
// Returns the best matching question based on whitelist keywords
function getClosestWhitelistMatch(input) {
  input = input.toLowerCase();
  let bestCandidate = null;
  let lowestDistance = Infinity;
  for (const keyword of wordWhitelist) {
    if (input.includes(keyword)) {
      // Find all questions containing the keyword
      const candidates = Object.keys(questionsAndAnswers).filter(q => q.toLowerCase().includes(keyword));
      for (const candidate of candidates) {
        const distance = levenshteinDistance(input, candidate.toLowerCase());
        if (distance < lowestDistance) {
          lowestDistance = distance;
          bestCandidate = candidate;
        }
      }
      if (bestCandidate) {
        return bestCandidate;
      }
    }
  }
  return null;
}

// Closest match using Levenshtein similarity
function getClosestMatch(input, thresholdFactor) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let lowestDistance = Infinity;

  for (const question in questionsAndAnswers) {
    const distance = levenshteinDistance(input, question);
    const threshold = Math.floor(question.length * thresholdFactor); // ~70% similarity

    if (distance <= threshold && distance < lowestDistance) {
      lowestDistance = distance;
      bestMatch = question;
    }
  }

  return bestMatch;
}
function sendlog() {
  const blob = new Blob([log], { type: "text/plain" }); // Save log after every interaction (User and Bot message)
  lota.set("logs", blob, "log.txt") //create a log with a random number
  fetch(SITE, { //upload to a server of choice. note currently it is set to my testing server because I have no backend.
    method: "POST",
    body: lota,
  })
  .then(response => response.json())
  .then(data => console.log("Upload successful:", data))
  .catch(error => console.error("Upload failed:", error));
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
      appendMessage("I'm sorry, I cannot answer that. Try selecting a question below or talk to a representative at Jury@courts.phila.gov!", "bot");
      log += "Event: User Triggered Blacklist-Time: do later"
      pendingSuggestion = null;
      sendlog();
      return -1
    }
        // Check if user is responding to a suggestion
    if (pendingSuggestion && ["yes","yep","yeah","yup","ye","y"].includes(input.toLowerCase())) {
      appendMessage(questionsAndAnswers[pendingSuggestion], "bot");
      pendingSuggestion = null;
      sendlog();
      return;
    }
    // Check whitelist keywords first
    const whitelistMatch = getClosestWhitelistMatch(input);
    if (whitelistMatch) {
      appendMessage(questionsAndAnswers[whitelistMatch], "bot");
    } else {
      const match = getClosestMatch(input, .3);
      if (match) {
        appendMessage(questionsAndAnswers[match], "bot");
        pendingSuggestion = null;
      } else {
        const suggestion = getClosestMatch(input, .7);
        if(suggestion != null){
          appendMessage('Im sorry, did you mean to ask "' + suggestion + '"?', "bot");
          pendingSuggestion = suggestion;
        } else {
          appendMessage("I'm sorry, I couldn't find an answer to that. Try selecting a question below or talk to a representative at Jury@courts.phila.gov.", "bot");
          pendingSuggestion = null;
        }
      }
    }
    sendlog();
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
          sendlog();
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

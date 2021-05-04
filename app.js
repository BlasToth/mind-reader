const columnRight = document.querySelector(".column-right");
const magicBall = document.querySelector(".magic-ball");
const buttonSpanish = document.querySelector(".button-spanish");
const buttonEnglish = document.querySelector(".button-english");
const buttonHungarian = document.querySelector(".button-hungarian");
const buttonRussian = document.querySelector(".button-russian");
const allLangButtons = document.querySelectorAll(".lang-button");

const title = document.querySelector(".title");
const task = document.querySelectorAll(".title")[1];
let magicBallClicked = false;

function deleteActive() {
  for (let i = 0; i < allLangButtons.length; i++) {
    allLangButtons[i].classList.remove("active");
  }
}
const navLang = navigator.language || navigator.userLanguage;
const locLang = localStorage.getItem("currLang");
locLang
  ? (currentLanguage = `${locLang}`)
  : (currentLanguage = navLang || "en");

if (currentLanguage === "en") {
  toggleLangEn();
  deleteActive();
  buttonEnglish.classList.add("active");
} else if (currentLanguage === "es") {
  toggleLangSp();
  deleteActive();
  buttonSpanish.classList.add("active");
} else if (currentLanguage === "hu") {
  toggleLangHu();
  deleteActive();
  buttonHungarian.classList.add("active");
} else if (currentLanguage === "ru") {
  toggleLangRu();
  deleteActive();
  buttonRussian.classList.add("active");
}

function toggleLangSp() {
  title.innerText = titleStringSpanish;
  task.innerHTML = taskStringSpanish;
  currentLanguage = "es";
  localStorage.setItem("currLang", "es");
  deleteActive();
  buttonSpanish.classList.add("active");
  if (magicBallClicked === true) {
    messageHandler(restartMsgSpa, tryEsp);
  }
}
function toggleLangEn() {
  title.innerText = titleStringEnglish;
  task.innerHTML = taskStringEnglish;
  currentLanguage = "en";
  localStorage.setItem("currLang", "en");
  deleteActive();
  buttonEnglish.classList.add("active");
  if (magicBallClicked === true) {
    messageHandler(restartMsgEng, tryEng);
  }
}
function toggleLangHu() {
  title.innerText = titleStringHungarian;
  task.innerHTML = taskStringHungarian;
  currentLanguage = "hu";
  localStorage.setItem("currLang", "hu");
  deleteActive();
  buttonHungarian.classList.add("active");
  if (magicBallClicked === true) {
    messageHandler(restartMsgHun, tryHun);
  }
}
function toggleLangRu() {
  title.innerText = titleStringRussian;
  task.innerHTML = taskStringRussian;
  currentLanguage = "ru";
  localStorage.setItem("currLang", "ru");
  deleteActive();
  buttonRussian.classList.add("active");
  if (magicBallClicked === true) {
    messageHandler(restartMsgRus, tryRus);
  }
}

buttonSpanish.onclick = toggleLangSp;
buttonEnglish.onclick = toggleLangEn;
buttonHungarian.onclick = toggleLangHu;
buttonRussian.onclick = toggleLangRu;

function messageHandler(msg, btnTxt) {
  columnRight.innerHTML = `<p class="restart-message">${msg}</p>`;
  const restartButton = document.createElement("button");
  restartButton.innerText = btnTxt;
  restartButton.classList.add("restart-button");
  columnRight.append(restartButton);
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  const showRestartButton = document.querySelector(".restart-button");
  showRestartButton.classList.add("restart-button", "faded-out");
  const showRestartMessage = document.querySelector(".restart-message");
  showRestartMessage.classList.add("restart-message", "faded-out");
  requestAnimationFrame(() => {
    showRestartButton.classList.remove("faded-out");
    showRestartMessage.classList.remove("faded-out");
  });
}

function showSymbol() {
  magicBallClicked = true;
  magicBall.innerHTML = `<span class="show-symbol">${symbol}</span>`;
  const show = document.querySelector(".show-symbol");
  show.classList.add("show-symbol", "faded-out");
  requestAnimationFrame(() => {
    show.classList.remove("faded-out");
    setTimeout(function () {
      if (currentLanguage === "en") {
        messageHandler(restartMsgEng, tryEng);
      } else if (currentLanguage === "es") {
        messageHandler(restartMsgSpa, tryEsp);
      } else if (currentLanguage === "hu") {
        messageHandler(restartMsgHun, tryHun);
      } else {
        messageHandler(restartMsgRus, tryRus);
      }
    }, 1223);
  });
}

magicBall.addEventListener("click", showSymbol);

const array = ["🐻", "🐼", "🐿️", "🐹", "🐪", "🐨", "🐙", "🕷️", "🐘", "🦔"];
const symbol = array[Math.floor(Math.random() * array.length)];
const symbolIndex = array.indexOf(symbol);
const arrayRest = array.splice(symbolIndex, 1);

for (let i = 99; i >= 0; i--) {
  let card = document.createElement("div");
  card.classList.add("cards");
  card.innerText = `${i}`;
  if (i % 9 === 0 && i > 8 && i < 82) {
    card.innerText = `${i} ${symbol} `;
  } else {
    card.innerText = `${i} ${array[Math.floor(Math.random() * array.length)]} `;
  }
  columnRight.append(card);
}

console.log('%cWrite to me on LinkedIn', 'background-color:black;padding:15px;border-radius:10px;font-size:50px;text-align:center;color:red;text-shadow: 2px 3px white')

console.log('%chttps://www.linkedin.com/in/balazs-laszlo-toth/', 'font-size:16px;font-weight:bolder;');
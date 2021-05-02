const columnRight = document.querySelector('.column-right');
const magicBall = document.querySelector('.magic-ball');
const buttonSpanish = document.querySelector('.button-spanish');
const buttonEnglish = document.querySelector('.button-english');
const buttonHungarian = document.querySelector('.button-hungarian');
const buttonRussian = document.querySelector('.button-russian');
const titleEnglish = document.querySelectorAll('.english');
const titleSpanish = document.querySelectorAll('.spanish');
const titleHungarian = document.querySelectorAll('.hungarian');
const langs = document.querySelectorAll('div [lang]');
const title = document.querySelector('.title');
const task = document.querySelectorAll('.title')[1];

const titleStringSpanish = "Lector de pensamiento";
const titleStringEnglish = "The NOT flash mind reader";
const titleStringHungarian = "A nagy gondolatolvasó";
const titleStringRussian = "магический шар онлайн";

const taskStringSpanish = `<p>Piensa un número cualquiera de dos cifras y suma ambos digitos.
Después resta el resultado de la suma del número que pensaste.</p>

<p class="stand-out-line">Por ejemplo: 42 (4 + 2 = 6) así 42 - 6 = 36</p>

<p>Cuando tengas el número final búscalo en la tabla de números y
fíjate en el animal que aperece a su lado. Concéntrate en el animal,
y cuando lo veas con claridad en tu mente, haz click en la bola
mágica.</p>`;
const taskStringEnglish = `<p>Choose any two-digit number, add together both digits
and then subtract the total from your original number.</p>

<p class="stand-out-line">For example: 42 (4 + 2 = 6) so 42 - 6 = 36</p>

<p>When you have the final number look it up on the chart
and find the relevant animal. Concentrate on the animal
and when you have it clearly in your mind click on the
crystal ball and it will show you the animal you are
thinking of.</p>`;
const taskStringHungarian = `<p>Gondolj egy tetszőleges kétjegyű számra és add össze a számjegyeit!
Ezt követően vond ki a gondolt számból a számjegyek összegét!</p>

<p class="stand-out-line">Például: 42 (4 + 2 = 6) szóval 42 - 6 = 36</p>

<p>Ha megvan az eredmény, keresd ki a táblázatból a számot és a mellette 
található állatkát! Koncentrálj erősen a képre és ha megvan, kattints 
a varázsgömbre és lássuk!</p>`;
const taskStringRussian = `<p>Загадайте любое двузначное число.
Сложите цифры из которых это число состоит. 
Вычтите результат из числа которое вы загадали</p>

<p class="stand-out-line">Например: 42 (4 + 2 = 6) так 42 - 6 = 36</p>

<p>Найдите это число в таблице. И картинку которая ему соответствует.
Представьте эту картинку в своем воображении. Затем нажмите на волшебный шар. В нем появится этот значок.</p>`;

const restartMsgEng = "Can't believe it? Click the button to try again.";
const restartMsgSpa = "No te lo crees? Haz click para hacerlo nuevo.";
const restartMsgHun = "Nem hiszed el? Kattints a gombra és próbáld meg újra!";
const restartMsgRus = "Не можете в это поверить? Нажмите кнопку, чтобы повторить попытку.";

const tryEng = "Try Again";
const tryEsp = "Otra vez";
const tryHun = "Még egyszer";
const tryRus = "Еще раз";

const locLang = localStorage.getItem('currLang');
locLang ? currentLanguage = `${locLang}` : currentLanguage = "en";
console.log(locLang)
if (locLang === "en") {
    toggleLangEn();
}else if (locLang === "es") {
    toggleLangSp();
}else if (locLang === "hu") {
    toggleLangHu();
}else if (locLang === "ru") {
    toggleLangRu();
}


function toggleLangSp() {
    title.innerText = titleStringSpanish;
    task.innerHTML = taskStringSpanish;
    currentLanguage = "es";
    localStorage.setItem('currLang', 'es'); 
}
function toggleLangEn() {
    title.innerText = titleStringEnglish;
    task.innerHTML = taskStringEnglish;
    currentLanguage = "en";
    localStorage.setItem('currLang', 'en');    
}
function toggleLangHu() {
    title.innerText = titleStringHungarian;
    task.innerHTML = taskStringHungarian;
    currentLanguage = "hu";
    localStorage.setItem('currLang', 'hu');  
}
function toggleLangRu() {
    title.innerText = titleStringRussian;
    task.innerHTML = taskStringRussian;
    currentLanguage = "ru";
    localStorage.setItem('currLang', 'ru');  
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
    columnRight.append(restartButton)
    restartButton.addEventListener("click", () => {window.location.reload()})
    const showRestartButton = document.querySelector(".restart-button");
    showRestartButton.classList.add("restart-button", "faded-out");
    const showRestartMessage = document.querySelector(".restart-message");
    showRestartMessage.classList.add("restart-message", "faded-out");
    requestAnimationFrame(() => {
        showRestartButton.classList.remove("faded-out");
        showRestartMessage.classList.remove("faded-out");
    })
}

function showSymbol() {
   magicBall.innerHTML = `<span class="show-symbol">${symbol}</span>`;
   const show = document.querySelector('.show-symbol');
   show.classList.add("show-symbol","faded-out");
   requestAnimationFrame(() => {
    show.classList.remove("faded-out");
    setTimeout(function(){
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
    // TODO 
    // add shadow to the sphere
    
  })
}

magicBall.addEventListener("click", showSymbol);

const array = ["🐻", "🐼", "🐿️", "🐹", "🦝", "🐪", "🐨", "🐙", "🕷️"];
const symbol = array[Math.floor(Math.random() * array.length)];
const symbolIndex = array.indexOf(symbol);
const arrayRest = array.splice(symbolIndex, 1);


for (let i = 99; i >= 0; i--) {
    let card = document.createElement("div");
    card.classList.add("cards")
    card.innerText = `${i}`;
    if (i % 9 === 0 && i > 8 && i < 82) {
        card.innerText = `${i} ${symbol} `;
    } else {
        card.innerText = `${i} ${array[Math.floor(Math.random() * array.length)]} `;
    }
    if (i < 10) {
        card.style.textAlign = "center"
    }
    columnRight.append(card);
}
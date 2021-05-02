const columnRight = document.querySelector('.column-right');
const magicBall = document.querySelector('.magic-ball');
const buttonSpanish = document.querySelector('.button-spanish');
const buttonEnglish = document.querySelector('.button-english');
const buttonHungarian = document.querySelector('.button-hungarian');
const titleEnglish = document.querySelectorAll('.english');
const titleSpanish = document.querySelectorAll('.spanish');
const titleHungarian = document.querySelectorAll('.hungarian');
const langs = document.querySelectorAll('div [lang]');
const title = document.querySelector('.title');
const task = document.querySelectorAll('.title')[1];

const titleStringSpanish = "Lector de pensamiento";
const titleStringEnglish = "The NOT flash mind reader";
const titleStringHungarian = "A nagy gondolatolvasó";
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
a varázsgömbre!</p>`;



function toggleLangSp() {
    title.innerText = titleStringSpanish;
    task.innerHTML = taskStringSpanish;
      
}
function toggleLangEn() {
    title.innerText = titleStringEnglish;
    task.innerHTML = taskStringEnglish;
      
}
function toggleLangHu() {
    title.innerText = titleStringHungarian;
    task.innerHTML = taskStringHungarian;
      
}

buttonSpanish.onclick = toggleLangSp;
buttonEnglish.onclick = toggleLangEn;
buttonHungarian.onclick = toggleLangHu;



function showSymbol() {
   magicBall.innerHTML = `<span class="show-symbol">${symbol}</span>`;
   const show = document.querySelector('.show-symbol');
   show.classList.add("show-symbol","faded-out");
   requestAnimationFrame(() => {
    show.classList.remove("faded-out");
    setTimeout(function(){
        columnRight.innerHTML = `<p class="restart-message">Can't believe it? Click the button to try again.</p>`;
        const restartButton = document.createElement("button");
        restartButton.innerText = "Try Again";
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
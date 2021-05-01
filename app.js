const columnRight = document.querySelector('.column-right');
const magicBall = document.querySelector('.magic-ball');


function showSymbol() {
   magicBall.innerHTML = `<span class="show-symbol">${symbol}</span>`;
   const show = document.querySelector('.show-symbol');
   show.classList.add("show-symbol","faded-out");
   requestAnimationFrame(() => {
    show.classList.remove("faded-out")
    columnRight.innerHTML = `<p class="restart-message">Can't believe it? Click the button to try again.</p>`;
    const restartButton = document.createElement("button");
    restartButton.innerText = "Try Again";
    restartButton.classList.add("restart-button");
    columnRight.append(restartButton)
    restartButton.addEventListener("click", () => {window.location.reload()})
    // TODO add button to replay
    // add the text as a modal
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
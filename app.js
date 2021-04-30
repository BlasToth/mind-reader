const columnRight = document.querySelector('.column-right');

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
    columnRight.append(card);
}
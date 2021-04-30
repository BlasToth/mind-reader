const columnRight = document.querySelector('.column-right');

const symbol = "🔮";

for (let i = 0; i < 100; i++) {
    let card = document.createElement("div");
    card.classList.add("cards")
    card.innerText = `${i} ${symbol} `;
    columnRight.append(card);
}
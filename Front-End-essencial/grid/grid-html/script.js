const container = document.querySelector(".grid-container")

for (let i = 1; i <= 10; i++) {
    const divCard = document.createElement('div')
    divCard.className = `card`

    const h3Card = document.createElement('h3')
    h3Card.textContent = `Card ${i+8}`

    const pCard = document.createElement('p')
    pCard.textContent = `Conteúdo do card ${i+8}`

    container.appendChild(divCard)
    divCard.appendChild(h3Card)
    divCard.appendChild(pCard)
}


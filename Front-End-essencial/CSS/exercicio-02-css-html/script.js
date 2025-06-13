const main = document.querySelector("#container")
const body = document.querySelector('body')

// cria elementos
const blockquote = document.createElement('blockquote')
const contentCards = document.createElement('div') /*cria um bloco para manipular as divs de cards*/
contentCards.id = 'sectionCards'


// cria texts nodes
const textBlockquote = document.createTextNode(`"A informação é o primerio passo para a transformação."`)

// adiciona os elementos a seus respectivos pais
blockquote.appendChild(textBlockquote)
main.appendChild(blockquote)
main.appendChild(contentCards)

// Cria o array de titulos e notícias
const noticias = [
    { titulo: "Notícia 1", text: "Resuimo preve da notícia com um pouco de texto para contextualizar"},
    { titulo: "Notícia 2", text: "Informações relevantes e atuais sobre a comunidade" },
    { titulo: "Evento 1", text: "Detalhes sibre um evento que ocorrerá nesta semana" },
    { titulo: "Evento 2", text: "Destaque especial com foco em cultura ou educação." }
]
const alt = [
    "caminho-de-terra-em-um-parque-florestal-passando-por-uma-arca-de-pedra-na-serra-do-bucaco-portugal",
    "cordilheira-majestosa-coberta-de-neve-pico-tranquilo-prado-gerado-por-ia",
    "foto-de-tirar-o-folego-da-ponte-vasco-da-gama-ao-nascer-do-sol-em-lisboa-portugal",
    "praia-do-norte-na-nazare-portugal-com-ondas-espumantes"
]

// insere os cards de notícias
// Loop para criar 4 cards de notícias
for (let i = 0; i < 4; i++) {
    const imgCards = document.createElement('div')
    imgCards.className = 'imgCards'


    const card = document.createElement('img')
    card.src = `/img/imagem-${i}.png`
    card.className = 'card'
    card.alt = `${alt[i]}`

    const p = document.createElement('p')
    p.textContent = `${noticias[i].titulo}`

    const label = document.createElement('p')
    p.textContent = `${noticias[i].titulo}`

    const textArea = document.createElement('div')
    textArea.textContent = `${noticias[i].text}`

    contentCards.appendChild(imgCards)
    imgCards.appendChild(card)
    imgCards.appendChild(p)
    imgCards.appendChild(textArea)
}


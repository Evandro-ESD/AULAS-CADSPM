// Realize o consumo da API pública JSONPlaceholder;
// https://jsonplaceholder.typicode.com/photos

async function buscarJSONPlaceholder() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos')

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)

        }

        const consulta = await resposta.json()

        console.log(resposta.status)
        console.log(consulta[0]?.title)

        const divCards = document.querySelector('#resultados')

        consulta.slice(1, 16).forEach((card, index) => {
            const div = document.createElement('div')
            div.className = 'cards'

            const h5 = document.createElement('h5')
            h5.textContent = card.title

            const link = document.createElement('a')
            link.href = `https://jsonplaceholder.typicode.com/photos/${index + 1}`
            
            const img = document.createElement('img')
            img.src = `${card.url}`
            img.href = `https://jsonplaceholder.typicode.com/photos/${index + 1}`

            div.appendChild(h5)
            div.appendChild(link)
            link.appendChild(img)
            // div.appendChild(img)
            divCards.appendChild(div)
        })

    } catch (error) {
        console.log('Erro ao carregar os dados', error)
    }
    finally {
        console.log('Consulta finalizafda!!!')
    }

}

buscarJSONPlaceholder()
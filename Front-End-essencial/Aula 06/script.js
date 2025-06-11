// 1. alterar o titulo usnado getelementbyid
const titulo = document.getElementById('titulo') //.innerText = 'Novo título'
titulo.innerHTML = "Lista de compras"

// 2. criar lista não oredenada usando innerHTML
const container = document.querySelector('#lista-container')
container.innerHTML = '<ul id="minha-lista"> </ul>'

// 3. ADICIONAR ITENS A LISTA
const lista = document.querySelector('#minha-lista')
const itens = ["Cola", "Apontador", "Lápis", "Caneta"]
itens.forEach(item => {
    lista.innerHTML += `<li>${item}</li> <hr style="width: 10%; margin-left: 0">`
    
})

// 4. Mudar a cor dos itens usando querySelectorALL
const corLista = document.querySelectorAll('#minha-lista li')
corLista.forEach((item)=>{item.style.color = 'magenta'})

// 5. adicionar evento ao botão
document.getElementById('botao').addEventListener('click', function(){
    const novoItem = prompt('Adicionar um novo item: ')
    if(novoItem){
        lista.innerHTML += `<li> ${novoItem} </li> <hr>`
    }
})
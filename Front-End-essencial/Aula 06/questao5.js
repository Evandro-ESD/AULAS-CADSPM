
function analisarNumero(){
    

    //verificação
    for(let i = 0; i < 4; i++){
        //pegar o valor digitado
    let num = Number(document.getElementById("numero").value)
    let resultado = "";

        if(num % 2 === 0){
                resultado += "é par <br>"
            }
            else
            {
                resultado += "Não é par <br>"
            }
        if(num % 4 === 0){
                resultado += "é divisivel por 4: <br>"
            }
            else
            {
                resultado += " Não é divisivel por 4: <br>"
            }
        if(num > 30){
                resultado += " é maior que 30: <br>"
            }
            else{
                resultado += " Não é maior que 30: <br>"
            }
            document.getElementById("resultado").innerHTML  = resultado
    }
}

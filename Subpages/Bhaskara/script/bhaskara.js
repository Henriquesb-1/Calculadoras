const delta = document.querySelector('.delta')
const x1 = document.querySelector('.x1')
const x2 = document.querySelector('.x2')
const erro = document.querySelector('.erroMessage')
const inputs = document.querySelector('.inputs')
const calcularButton = document.querySelector(".calcularButton")

const deltaTeste = valorDelta => valorDelta < 0 
const VerificarCamposVazios = (inputA, inputB, inputC) => inputA == "" && inputB == "" & inputC == ""
const VerificarAeC = (A, C) => A == 0 || C == 0 

calcularButton.addEventListener('click', function() {
    let a = Number(document.querySelector('.valor_a').value)
    let b = Number(document.querySelector('.valor_b').value)
    let c = Number(document.querySelector('.valor_c').value)
    let divBack = document.querySelector(".resultados")
    let deltaCalculo =  (b) ** 2 - 4 * a * c

    delta.innerHTML = `Delta = ${b}² - 4 * ${a} * ${c}: <br>
    <strong> ${deltaCalculo} </strong>`

    if(!deltaTeste(deltaCalculo) && !VerificarCamposVazios(a, b, c)) {
        erro.textContent = ""
        divBack.style.background = ""
        let valorX1 = (-b - Math.sqrt(deltaCalculo)) / (2 * a)
        let valorX2 = (-b + Math.sqrt(deltaCalculo)) / (2 * a)

        inputs.innerHTML = `A: ${a} | B: ${b} | C: ${c}`

        x1.innerHTML = `x' = -${b} - √${deltaCalculo} / 2 * ${a}: <br>
        <strong> ${valorX1.toFixed(2)}</strong>`

        x2.innerHTML = `x'' = -${b} +  √${deltaCalculo} / 2 * ${a}: <br>
        <strong> ${valorX2.toFixed(2)} </strong>`

            if(VerificarAeC(a, c)) {
                inputs.innerHTML = `A: ${a}  |  B: ${b}  |  C: ${c}`
                erro.innerHTML = `A variavel "A" ou "C" não possui um valor, portanto x', x'' e delta serão igual a 0.` 
                delta.textContent = ""
                x1.textContent = ""
                x2.textContent = ""
                if(b) {
                    erro.innerHTML = `A variavel "A" ou "C" não possui um valor, portanto x', x'' serão igual a 0`
                    delta.innerHTML = `Delta = ${b}² - 4 * ${a} * ${c}: <br>
                    <strong> ${deltaCalculo} </strong>`
                }
                
            }
        }
    else if(deltaTeste(deltaCalculo)){
        erro.innerHTML = `Delta: ${deltaCalculo} <br>
        Não é possível tirar raiz quadrada de um número negativo. <br>
        Por isso não é possivel calcular o valor de x' e x''.`
        divBack.style.background = ""
        delta.textContent = ""
        x1.textContent = ""
        x2.textContent = ""
        }
    else if(VerificarCamposVazios(a, b , c)) {
        divBack.style.background = "none"
        erro.innerHTML = " * Por favor, informe o valor de uma variavel para continuar *"
        inputs.textContent = ""
        delta.textContent = ""
        x1.textContent = ""
        x2.textContent = ""
    }
})
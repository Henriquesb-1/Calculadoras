const checkCampo = (hipotenusa, cateto) => hipotenusa == "" || cateto == "" ? "* Por favor, preencha todos os dados antes de continuar *" : 0
const valorAoQuadrado = (valorASerSomado) => valorASerSomado ** 2

const userInfo = $('.user')
const resultadoOut = $('.res')
const formula = $('.formula')
const erro = $('.erro')

$(document).ready(() => {
    $(".botaoResultado").click(() => {
        const valor1 = Number($('.hipo_cate').val())
        const cateto = Number($('.catetob').val())

        if (!checkCampo(valor1, cateto)) {
            erro.text("")
            const calculo1 = valorAoQuadrado(valor1)
            const calculo2 = valorAoQuadrado(cateto)
            const valorFinal = Math.sqrt(calculo1 + calculo2)

            userInfo.html(`Hipotenusa ou Cateto B : ${valor1} || Cateto C: ${cateto}`)

            formula.html(`${valor1}² + ${cateto}² = x² <br>
            ${calculo1} + ${calculo2} = x² <br>
            x =  √${calculo1 + calculo2}`)

            resultadoOut.html(`x: ${valorFinal.toFixed(2)}`)
        }
        else {
            erro.html(checkCampo(valor1, cateto))
            userInfo.text("")
            formula.text("")
            resultadoOut.text("")
        }
    })
})

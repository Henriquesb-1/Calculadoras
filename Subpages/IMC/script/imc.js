let checkCampo = (Peso, Altura) => Peso == "" || Altura == "" ? "Por favor, preencha todos os dados antes de continuar" : 0
const IMCSoma = (valorPeso, valorAltura) => valorPeso / (valorAltura * valorAltura)

$(document).ready(() => {
    $("#calcular-imc").click(() => {
        const peso = Number($(".peso").val())
        const altura = Number($("#altura").val())
        const imc = $('.IMC-resultado')
        const imcTipo = $('.IMC-tipo')
        const erro = $('.erro-msg')

        if (!checkCampo(peso, altura) && altura < 2.40) {
            erro.text('')
            const IMC = IMCSoma(peso, altura).toFixed(2)
            imc.html(`Seu IMC é de ${IMC}`)
            const statusIMC = (imcValor) => {
                if (imcValor <= 15) {
                    imcTipo.css({ 'background-color': 'rgb(0, 63, 136)' })
                    return 'Você está muito abaixo do seu peso ideal - Magreza Extrema'
                }
                else if (imcValor > 15 && imcValor < 18.5) {
                    imcTipo.css({ 'background-color': 'rgb(0, 136, 106)' })
                    return 'Você está abaixo do seu peso ideal'
                }
                else if (imcValor > 18.5 && imcValor < 24.9) {
                    imcTipo.css({ 'background-color': '#008000' })
                    return 'Você está no seu peso ideal'
                }
                else if (imcValor > 24.9 && imcValor < 29.9) {
                    imcTipo.css({ 'background-color': 'rgb(136, 134, 0)' })
                    return 'Você está um pouco acima do seu peso ideal'
                }
                else if (imcValor > 29.9 && imcValor < 34.9) {
                    imcTipo.css({ 'background-color': 'rgb(136, 88, 0)' })
                    return 'Você está com Obesidade Grau I - Obesidade Leve'
                }
                else if (imcValor > 34.9 && imcValor < 39.9) {
                    imcTipo.css({ 'background-color': 'rgb(136, 39, 0)' })
                    return 'Você está com Obesidade Grau II - Obesidade Moderada'
                }
                else {
                    imcTipo.css({ 'background-color': 'rgb(136, 0, 0)' })
                    return 'Você está com Obesidade Grau III - Obesidade Mórbida'
                }
            }
            imcTipo.html(statusIMC(IMC))
        }
        else if (altura >= 2.40) {
            erro.html('A NBA está lhe esperando, o que acha de corrijir a altura?')
            imc.text("")
            imcTipo.text("")
            imcTipo.css({ 'background-color': 'none' })
        }
        else {
            erro.html(checkCampo(peso, altura))
            imc.text("")
            imcTipo.text("")
            imcTipo.css({ 'background-color': 'none' })
        }
    })

})
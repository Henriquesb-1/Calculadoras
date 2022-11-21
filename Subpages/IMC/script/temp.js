function resultado() {
    let peso = Number(document.querySelector('.peso').value)
    let altura = Number(document.getElementById('altura').value)
    let imc = document.querySelector('.IMC-resultado')
    let imc_tipo = document.querySelector('.IMC-tipo')
    let erro = document.querySelector('.erro-msg')
    
    let checkCampo = (Peso, Altura) => Peso == "" || Altura == "" ? "Por favor, preencha todos os dados antes de continuar" : false

    function IMCSoma(valorPeso, valorAltura) {
        let IMCResultado = valorPeso / (valorAltura * valorAltura)
        return IMCResultado
    }

        if(!checkCampo(peso, altura) && altura < 2.40) {
            erro.textContent = ""
            let IMC = IMCSoma(peso, altura).toFixed(2)
            imc.innerHTML = `Seu IMC é de ${IMC}`

                if (IMC <= 15) {
                    imc_tipo.innerHTML = `Você está muito abaixo do seu peso ideal - Magreza Extrema`
                    imc_tipo.style.background = 'rgb(0, 63, 136)'
                }
                else if(IMC > 15 && IMC < 18.5) {
                    imc_tipo.innerHTML = `Você está abaixo do seu peso ideal`
                    imc_tipo.style.background = 'rgb(0, 136, 106)'
                }
                else if (IMC > 18.5 && IMC < 24.9) {
                    imc_tipo.innerHTML = `Você está no seu peso ideal.`
                    imc_tipo.style.background = '#008000'
                }
                else if (IMC > 24.9 && IMC < 29.9) {
                    imc_tipo.innerHTML = `Você está um pouco acima do seu peso ideal`
                    imc_tipo.style.background = 'rgb(136, 134, 0)'                  
                }
                else if (IMC > 29.9 && IMC < 34.9) {
                    imc_tipo.innerHTML = `Você está com Obesidade Grau I - Obesidade Leve`
                    imc_tipo.style.background = 'rgb(136, 88, 0)'                    
                }
                else if (IMC > 34.9 && IMC < 39.9) {
                    imc_tipo.innerHTML = `Você está com Obesidade Grau II - Obesidade Moderada`
                    imc_tipo.style.background = 'rgb(136, 39, 0)'                    
                }
                else {
                    imc_tipo.innerHTML = `Você está com Obesidade Grau III - Obesidade Mórbida`
                    imc_tipo.style.background = 'rgb(136, 0, 0)'
                }     
            }
        else if(altura >= 2.40) {
            erro.innerHTML = `A NBA está lhe esperando, o que acha de corrijir a altura?`
            imc.textContent = ""
            imc_tipo.textContent = ""
            imc_tipo.style.background = "none"
        }
        else {
            erro.innerHTML = checkCampo(peso, altura)
            imc.textContent = ""
            imc_tipo.textContent = ""
            imc_tipo.style.background = "none"
        }
}
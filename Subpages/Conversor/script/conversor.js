const moedasIguais = (moedaOne, moedaTwo) => moedaOne == moedaTwo 
const campoVazio = input => input == ""


document.querySelector(".calcbutton").addEventListener('click', calcularResultado = () => {
        const  moeda1Index = document.getElementById('moeda1')
        const moeda1 = moeda1Index.options[moeda1Index.selectedIndex].text
        const moeda2Index = document.getElementById('moeda2')
        const moeda2 =  moeda2Index.options[moeda2Index.selectedIndex].text
        const convertido = document.querySelector(".convertido")
        const erro = document.querySelector(".erro")
        const valor = Number(document.querySelector(".valor").value)
        const conversores = {
            real_dolar : (real_ou_dolar) => {
                if (moeda1 == "$ - Dólar" && moeda2 == "R$ - Real") {
                    return real_ou_dolar * 5.09
                }
                else if(moeda1 == "R$ - Real" && moeda2 == "$ - Dólar") {
                    return real_ou_dolar / 5.09
                }
            }
            ,
            real_euro : (real_ou_euro) => {
                if(moeda1 == "€ - Euro" && moeda2 == "R$ - Real") {
                    return real_ou_euro * 5.34
                }
                else if(moeda1 == "R$ - Real" && moeda2 == "€ - Euro") {
                    return real_ou_euro / 5.34
                }
            }
            ,
            dolar_euro : (dolar_ou_euro) => {
                if(moeda1 == "€ - Euro" && moeda2 == "$ - Dólar") {
                    return dolar_ou_euro * 1.05
                }
                else if(moeda1 == "$ - Dólar" && moeda2 == "€ - Euro") {
                    return dolar_ou_euro / 1.05
                }
            }    
        }

    if(!moedasIguais(moeda1, moeda2) && !campoVazio(valor)) {
        let dolarANDreal = conversores.real_dolar(valor)
        let realANDeuro = conversores.real_euro(valor)
        let dolarANDeuro = conversores.dolar_euro(valor)
    
        switch (moeda1) {                
            case ("$ - Dólar") :
                switch (moeda2) {
                    case ("R$ - Real"):
                            convertido.innerHTML = `$${valor} dólares, equivale a <strong> R$${ dolarANDreal.toFixed(2) }</strong> Reais`
                    break
                
                    case ("€ - Euro"):
                        convertido.innerHTML = `$${valor} dólares, equivale a <strong> €${ dolarANDeuro.toFixed(2) } </strong> Euros`
                    break 
                }
            break        

            case ("R$ - Real") :
                switch (moeda2) {
                    case ("$ - Dólar") : 
                        convertido.innerHTML = `R$${valor} reias, equivale a <strong> $${ dolarANDreal.toFixed(2) } </strong> dólares`
                    break
                    case ("€ - Euro") :
                        convertido.innerHTML = `R$${valor} reias, equivale a <strong> €${ realANDeuro.toFixed(2) } </strong> euros`
                    break
                }
            break    
            
            case ("€ - Euro"):
                switch(moeda2) {
                    case ("$ - Dólar") : 
                        convertido.innerHTML = `€${valor} euros, equivale a $${ dolarANDeuro.toFixed(2) } dólares.`
                    break    
                    case ("R$ - Real") :
                        convertido.innerHTML = `€${valor} euros, equivale a R$${ realANDeuro.toFixed(2) } reais.`
                    break
                }
            break 
            }
    erro.textContent = ""
    }

    else if(moedasIguais(moeda1, moeda2)) {
        erro.innerHTML = "* Por favor, selecione duas moedas diferentes para continuar.*"
        convertido.textContent = ""
    }

    else if(campoVazio(valor)) {
        erro.innerHTML = "* Por favor, insira um valor antes de continuar.*"
        convertido.textContent = ""
    }
})
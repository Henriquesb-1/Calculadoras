function calculoIMC(peso, altura) {
    let imc_calculo = (peso / (altura * altura)).toFixed(2)
    return imc_calculo
}
export {calculoIMC}
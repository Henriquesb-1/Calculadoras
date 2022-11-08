const checkCamp = (valorDoVeiculo, entrada) => {
    if (!valorDoVeiculo) {
        return "Por favor, informe o valor do veículo para continuar"
    }
    else if (valorDoVeiculo == entrada) {
        return "Atenção: O valor da entrada não pode ser igual ao valor do veiculo"
    }
    else if (valorDoVeiculo < entrada) {
        return "Atenção: O valor da entrada não pode ser maior ao valor do veiculo"
    }
}

$(".calcButton").click(() => {
    const valorveiculo = Number($(".valor-veiculo").val())
    const entrada = Number($('.valor-entrada').val())
    const vezes = document.getElementById('vezes').options[document.getElementById('vezes').selectedIndex].value
    const valor_financiado = $('.valor_financiado')
    const valorParcelas = $('.valor_parcelas')
    const total_sem_entrada = $('.total_sem_entrada')
    const total_com_entrada = $('.total_com_entrada')
    const aviso_final = $('.aviso_final')
    const erro = $('.erro')
    const totalJuros = $(".totalJuros")

    if (!checkCamp(valorveiculo, entrada)) {
        const valorFinanciadoCalculo = valorveiculo - entrada
        const totalSemEntrada = (valorFinanciado) => valorFinanciado + (valorFinanciado * 90 / 100)
        const parcela = (vezes) => totalSemEntrada(valorFinanciadoCalculo) / vezes
        const totalComEntrada = (entrada2) => totalSemEntrada(valorFinanciadoCalculo) + entrada2

        const valorDasParcelas = parcela(vezes)
        const totalComEntrada2 = totalComEntrada(entrada)
        erro.text("")

        valor_financiado.html(`Valor Financiado: <br> 
        <strong> R$${valorFinanciadoCalculo} </strong>`
        )

        valorParcelas.html(`Valor das parcelas em ${vezes} vezes: <br> 
        <strong> R$${valorDasParcelas.toFixed(2)} </strong>`
        )

        if (entrada != 0) {
            total_sem_entrada.html(`Valor total pago sem a entrada de R$${entrada}: <br>
                <strong> R$ ${totalSemEntrada(valorFinanciadoCalculo).toFixed(2)} </strong>`
                )

            total_com_entrada.html(`Valor total pago em ${vezes} vezes de R$${valorDasParcelas.toFixed(2)} e com a entrada de R$${entrada}: <br>
                <strong> R$ ${totalComEntrada2.toFixed(2)} </strong>`
                )
        }
        else {
            total_com_entrada.text("")
            total_sem_entrada.html(`Valor total pago ao fim do financiamento: <br>
                <strong>R$${totalSemEntrada(valorFinanciadoCalculo).toFixed(2)}</strong>`
                )
        }
        totalJuros.html(`Total de juros pago ao fim do financiamento: <br>
            <strong> R$${totalComEntrada2 - valorveiculo} </strong>`
            )

        aviso_final.html("*Isso é apenas uma simulação. Os valores podem ser diferentes dependendo das condições do seu banco*")
    }
    else {
        erro.html(checkCamp(valorveiculo, entrada))
        valor_financiado.text("")
        valorParcelas.text("")
        total_sem_entrada.text("")
        total_com_entrada.text("")
        aviso_final.text("")
        totalJuros.text("")
    }
})
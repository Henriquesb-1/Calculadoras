function getDivisor (numero) {
    let divisor = 0
    for (let i = 2; i <= 7; i++) {
        if (numero % i === 0) {
            divisor = i
            break
        }
        else {
            divisor = "Não é possivel mais dividir"
        }
    }
    return divisor
}

document.querySelector(".calcButton").addEventListener('click', () => {
    let numeroAFatorar = Number($(".valorRecibido").val())
    const table = $(".tableBody")
    table.html("")

    if (numeroAFatorar != "") {
        while (numeroAFatorar > 1) {
            const numeroDivisor = getDivisor(numeroAFatorar)
            
            const tdDivido = $("<td>")
            tdDivido.html(numeroAFatorar)

            const tdDivisor = $("<td>")
            tdDivisor.html(numeroDivisor)

            const tr = $("<tr>")
            tr.append(tdDivido)
            tr.append(tdDivisor)
            table.append(tr)

            numeroAFatorar /= numeroDivisor
        }
    }
    else {
        alert("Por favor, informe um número para continuar")
    }
})

$(".calcButton").click(function () {
    const select = document.getElementById('select-temp')
    const select_number = select.options[select.selectedIndex].text;

    const first_temp = Number($(".to-convert").val())
    const temp_title1 = $(".temp-title1")
    const formula1 = $(".formula1")
    const temp1 = $(".temp1")
    const temp_title2 = $(".temp-title2")
    const formula2 = $(".formula2")
    const temp2 = $(".temp2")

    //Leia do if para o nome da funcao (ex: select_number == "Fahrenheit" converte para Celsius)
    const Celsius = (valorTemperatura) => {
        if (select_number == "Fahrenheit") {
            return (valorTemperatura - 32) / 1.8
        }
        else if (select_number == "Kelvins") {
            return valorTemperatura - 273
        }
    }

    const Fahrenheit = (valorTemperatura2) => {
        if (select_number == "Celsius") {
            return (valorTemperatura2 * 1.8) + 32
        }
        else if (select_number == "Kelvins") {
            return (valorTemperatura2 - 273) * 1.8 + 32
        }
    }

    const Kelvins = (valorTemperatura3) => {
        if (select_number == "Fahrenheit") {
            return (valorTemperatura3 - 32) * 5 / 9 + 273
        }
        else if (select_number == "Celsius") {
            return valorTemperatura3 + 273
        }
    }

    switch (select_number) {
        case ("Fahrenheit"):
            let fahrenheitparaCelsius = Celsius(first_temp).toFixed(0)
            let fahrenheitparaKelvins = Kelvins(first_temp).toFixed(0)

            temp_title1.html("Para Celsius:")
            formula1.html(`F° = (${first_temp}°C - 32) / 1.8`)
            temp1.html(`${first_temp}° Fahrenheit corresponde a ${fahrenheitparaCelsius}° Celsius`)

            temp_title2.html("Para Kelvins:")
            formula2.html(`K° = (${first_temp.toFixed(0)}°F - 32) * 5/9 + 273`)
            temp2.html(`${first_temp.toFixed(0)}° Fahrenheit corresponde a ${fahrenheitparaKelvins}° Kelvins`)
            break

        case ("Celsius"):
            let celsiusparaFahrenheit = Fahrenheit(first_temp).toFixed(0)
            let celsiusparaKelvins = Kelvins(first_temp).toFixed(0)

            temp_title1.html("Para Fahrenheit:")
            formula1.html(`C° = ${first_temp} - 32 / 1.8 `)
            temp1.html(`${first_temp}° Celsius corresponde a ${celsiusparaFahrenheit}° Fahrenheit`)

            temp_title2.html("Para Kelvins:")
            formula2.html(`C° = ${first_temp} + 273`)
            temp2.html(`${first_temp}° Celsius corresponde a ${celsiusparaKelvins}° Kelvins`)
            break

        case ("Kelvins"):
            let KelvinsparaCelsius = Celsius(first_temp).toFixed(0)
            let Kelvinsparafahrenheit = Fahrenheit(first_temp).toFixed(0)

            temp_title1.html("Para Fahrenheit:")
            formula1.html(`F° = (${first_temp} - 273) * 1.8 + 32`)
            temp1.html(`${first_temp}° Kelvins corresponde a ${Kelvinsparafahrenheit}° Fahrenheit`)

            temp_title2.html("Para Celsius:")
            formula2.html(`C° = ${first_temp} - 273`)
            temp2.html(`${first_temp}° Kelvin corresponde a ${KelvinsparaCelsius}° Celsius`)
            break
    }

    function mudarBackground() {
        //Transforma a temperatura em celsius para facilitar a mudança do background
        const referenciaTemp = (tempInput) => {
            if (select_number == "Fahrenheit") {
                return (tempInput - 32) / 1.8
            }
            else if (select_number == "Kelvins") {
                return tempInput - 273
            }
            else {
                return tempInput
            }
        }
        if (referenciaTemp(first_temp) < 10) {
            $('.resultados').css({ 'background-color': 'rgba(20, 150, 255, 0.3)' })
            $(".control").css({ 'background-image': 'url("file:///C:/Users/joseh/OneDrive/Documentos/Programming/Own/Calculadoras/Main-page/Subpages/Temperatura/imgs/cold.jpg")' })
        }
        else if (referenciaTemp(first_temp) >= 10 && referenciaTemp(first_temp) <= 25) {
            $(".resultados").css({ 'background-color': 'rgba(230, 190, 86, 0.5)' })
            $(".control").css({ 'background-image': 'url("file:///C:/Users/joseh/OneDrive/Documentos/Programming/Own/Calculadoras/Main-page/Subpages/Temperatura/imgs/amena.jpg")' })
        }
        else if (referenciaTemp(first_temp) >= 26 && referenciaTemp(first_temp) <= 45) {
            $(".resultados").css({ 'background-color': 'rgba(238, 100, 50, 0.7)' })
            $(".control").css({ 'background-image': 'url("file:///C:/Users/joseh/OneDrive/Documentos/Programming/Own/Calculadoras/Main-page/Subpages/Temperatura/imgs/calor.jpg")' })
        }
        else {
            $(".resultados").css({ 'background-color': 'rgba(255, 50, 20, 0.9)' })
            $(".control").css({ 'background-image': 'url("file:///C:/Users/joseh/OneDrive/Documentos/Programming/Own/Calculadoras/Main-page/Subpages/Temperatura/imgs/muito-quente.jpg")' })
        }
    }
    mudarBackground()
})
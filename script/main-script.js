function getHorario()  {
    let title = document.querySelector(".title-dina")

    let hours = new Date()
    let local_time = hours.getHours()

    if (local_time >= 0 && local_time < 6) {
        title.innerHTML = "Bom ínicio de dia"
    }
    else if (local_time < 12) {
        title.innerHTML = "Bom Dia"        
    }
    else if (local_time < 18) {
        title.innerHTML = "Boa Tarde"       
    }
    else {
        title.innerHTML = "Boa Noite"
    }
}
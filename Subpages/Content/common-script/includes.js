function loadInclude() {
    const destine = $("[include]")
    destine.each(function(i, e) {
        const url = $(e).attr("include")
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr("include")
            }
        })
    })
}
loadInclude()
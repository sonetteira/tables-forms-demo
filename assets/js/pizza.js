window.onload = function() {
    let formFields = new URLSearchParams(window.location.search)
    let p = document.querySelector("#order")
    let order = ""
    formFields.forEach(function(v, k) {
        order += k + ": " + v + "<br>"
    })
    p.innerHTML = order
}
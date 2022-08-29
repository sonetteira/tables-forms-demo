function validate() {
    let passwordfield = document.querySelector("input[type=password]")
    let pass = passwordfield.value
    if(pass != "") {
        passwordfield.value = encrypt(pass)
    }
}

function encrypt(pass) {
    let hash = md5(pass);
    return hash;
}
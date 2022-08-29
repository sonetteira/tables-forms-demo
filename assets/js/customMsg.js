let formFields = new URLSearchParams(window.location.search)
document.querySelector("#yourName").innerHTML = formFields.get("name")
var msg = ""
if(formFields.get("happy")==="yes") {
	msg = "Great, I hope you enjoy the rest of the day!"
}
else if(formFields.get("happy")==="no"){
	msg = "I'm sorry. I hope your day gets better."
}
document.querySelector("#msg").innerHTML = msg
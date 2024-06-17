let Url = new URLSearchParams(window.location.search);
let email = Url.get("email");
document.getElementById("emailAddress").innerText = email;
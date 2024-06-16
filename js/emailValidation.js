const emailInput = document.getElementById("email");
const emailError = document.getElementById("error");
const submitButton = document.getElementById("submit");
let borderError = `1px solid #FF6155`;
let border = `1px solid #9294a0`;
submitButton.disabled = true;
function emailValidation()
{
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.style.visibility = "visible";
        emailInput.style.backgroundColor = "#FF615526";
        emailInput.style.border = borderError;
        submitButton.disabled = true;
    }
    else
    {
        emailError.style.visibility = "hidden";
        emailInput.style.backgroundColor = "#fff";
        emailInput.style.border = border;
        submitButton.disabled = false;
    }
}
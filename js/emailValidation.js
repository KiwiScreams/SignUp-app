const emailInput = document.getElementById("email");//Input for email
const emailError = document.getElementById("error");//Error text "Valid email required"
const submitButton = document.getElementById("submit");//Submit button
//STYLES
let borderError = `1px solid #FF6155`;
let border = `1px solid #9294a0`;
//
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
submitButton.addEventListener("click", function()
{
    let email = emailInput.value;
    const successPage = `panel.html?email=${email}`;
    location.href = successPage;
});
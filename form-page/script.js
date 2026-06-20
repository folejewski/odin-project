const password = document.querySelector("#password")
const confirmed_password = document.querySelector("#confirmed_password")

password.addEventListener('input', checkIfPasswordsMatch);
confirmed_password.addEventListener('input', checkIfPasswordsMatch);

function checkIfPasswordsMatch(){
    if (confirmed_password.value !== "") {
        if (password.value !== confirmed_password.value) {
            confirmed_password.style.borderColor = "red";
            confirmed_password.setCustomValidity("Passwords do not match");
        } else {
            confirmed_password.style.borderColor = "#E5E7EB";
            confirmed_password.setCustomValidity("");
        }
    }
}

let password = document.querySelector("#pwd");
let confPassword = document.querySelector("#con_pwd");
let pwdNotMatch = document.querySelector(".not-match");
const subBtn = document.querySelector("#create-acc");

confPassword.addEventListener("keyup", () => {
  if (password.value == "" || confPassword.value == "") pwdNotMatch.style.display = "none";
  else if (password.value !== confPassword.value) {
    pwdNotMatch.style.display = "block";
    password.style.borderColor = "red";
    confPassword.style.borderColor = "red";
    subBtn.disabled = true;
  } else {
    pwdNotMatch.style.display = "none";
    password.style.borderColor = "green";
    confPassword.style.borderColor = "green";
    subBtn.disabled = false;
  }
});

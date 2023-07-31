let user = new User();
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (el) => {
  el.preventDefault();

  const email = loginForm.querySelector("#email").value;
  const password = loginForm.querySelector("#password").value;
  const inputs = loginForm.querySelectorAll(".is-null");
  const feedback = loginForm.querySelector(".invalid-feedback");
  inputs.forEach((input) => {
    input.classList.remove("is-invalid", "is-valid");
  });
  feedback.innerText = "";

  user.email = email;
  user.password = password;
  user.login().then((data) => {
    if (data.error === false) {
      console.log(data);
      inputs.forEach((input) => {
        input.classList.add("is-valid");
      });
      // window.location.href = '';
    } else {
      let errors = data.errors;
      Object.keys(errors).forEach((key) => {
        loginForm.querySelector(`#${key}`).classList.add("is-invalid");
        errors[key].forEach((error) => {
          loginForm.querySelector(`.${key}-feedback`).innerText += `${error}\n`;
        });
      });
      inputs.forEach((input) => {
        if (!input.classList.contains("is-invalid")) {
          input.classList.add("is-valid");
        }
      });
    }
  });
});

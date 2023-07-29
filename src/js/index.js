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
      inputs.forEach((input) => {
        input.classList.add("is-valid");
      });
      // window.location.href = '';
    } else {
      let errors = data.errors;
      console.log(errors);
    }
  });
});

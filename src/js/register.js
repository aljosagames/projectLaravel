let user = new User();
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (el) => {
  el.preventDefault();
  const name = registerForm.querySelector("#name").value;
  const email = registerForm.querySelector("#email").value;
  const password = registerForm.querySelector("#password").value;
  const password_confirmation = registerForm.querySelector(
    "#password_confirmation"
  ).value;
  const inputs = registerForm.querySelectorAll(".is-null");
  const feedbacks = registerForm.querySelectorAll(".invalid-feedback");
  inputs.forEach((input) => {
    input.classList.remove("is-invalid", "is-valid");
  });
  feedbacks.forEach((feedback) => {
    feedback.innerText = "";
  });

  user.name = name;
  user.email = email;
  user.password = password;
  user.password_confirmation = password_confirmation;
  user.register().then((data) => {
    if (data.error === false) {
      inputs.forEach((input) => {
        input.classList.add("is-valid");
      });
      window.location.href = "/";
    } else {
      let errors = data.errors;
      Object.keys(errors).forEach((key) => {
        registerForm.querySelector(`#${key}`).classList.add("is-invalid");
        errors[key].forEach((error) => {
          registerForm.querySelector(
            `.${key}-feedback`
          ).innerText += `${error}\n`;
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

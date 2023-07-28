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

  user.name = name;
  user.email = email;
  user.password = password;
  user.password_confirmation = password_confirmation;
  user.register().then();
});

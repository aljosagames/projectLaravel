class User {
  name = "";
  email = "";
  password = "";
  password_confirmation = "";
  apiUrl = "http://laravel-api.test/api/";

  register() {
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
    };

    data = JSON.stringify(data);

    fetch(this.apiUrl + "user/register", {
      method: "POST",
      headers: {
        "Contenty-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  }
}

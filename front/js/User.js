class User {
  name = "";
  email = "";
  password = "";
  password_confirmation = "";
  apiUrl = "http://laravel-api.test/api/";

  async register() {
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
    };

    data = JSON.stringify(data);

    try {
      const response = await fetch(this.apiUrl + "user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      const responseData = await response.json();
      return responseData; // Return the data received from the API
    } catch (error) {
      console.error("Error occurred during registration:", error);
      return null; // Or you can return some default value if the registration fails
    }
  }
}

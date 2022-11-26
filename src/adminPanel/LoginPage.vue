<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <input id="username" placeholder="Username" />
    <input id="password" placeholder="password" />
    <button @click="loginSubmit">Login</button>
  </div>
</template>

<script>
import router from "@/router";
let usernameController = document.getElementById("username");
let passwordController = document.getElementById("password");

export default {
  name: "LoginPage",
  methods: {
    loginSubmit() {
      if (
        usernameController.value == "svetlana" &&
        passwordController.value == "password"
      ) {
        alert("Login Successful");
        router.push("/admin");
      } else {
        alert("wrong pww");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

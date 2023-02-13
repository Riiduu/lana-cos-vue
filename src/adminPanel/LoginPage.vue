<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <input id="username" placeholder="Username" />
    <input id="password" type="password" placeholder="password" />
    <button @click="loginSubmit">Login</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "LoginPage",
  methods: {
    loginSubmit() {
      if (
        document.getElementById("username").value == "svetlana" &&
        document.getElementById("password").value == "password"
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

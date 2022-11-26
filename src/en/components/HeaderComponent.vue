<template>
  <div class="navbar">
    <div class="Header">
      <img
        alt=""
        @click="btnClick"
        class="menu-icon"
        src="../../assets/icons/menu-icon.png"
      />
      <h3 class="logo-label" @click="transferHome">LC Studio</h3>
      <div class="nav-options">
        <h3 id="main-label" @click="transferHome">LC Studio</h3>
        <label id="options" @click="transferPricing">Pricing & Info</label>
        <label id="options" @click="transferAbout">About us</label>
        <label id="options" @click="transferNews">News</label>
      </div>

      <div id="lang-select-div">
        <div id="lang-select">
          <label @click="transferFi">fi</label>
        </div>
      </div>
    </div>
  </div>
  <br />

  <router-view />
</template>

<script>
import router from "@/router";

export default {
  name: "HeaderComponent",
  props: {
    btnClick: Function,
    buttonId: null,
  },
  methods: {
    transferHome() {
      router.push("/home");
    },
    transferPricing() {
      router.push("/en/pricing");
    },
    transferAbout() {
      router.push("/en/about");
    },
    transferNews() {
      router.push("/en/news");
    },
    transferFi() {
      router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-icon {
  display: none;
}

.logo-label {
  display: none;
}

.navbar {
  position: relative;
  top: 0;
}

.Header {
  justify-content: space-between;
  height: 32px;
  display: flex;
  flex-direction: row;
  background-color: #232323;
  opacity: 85%;
  color: white;
  padding: 15px 0 30px 0;
  width: 100%;
  position: fixed;
  text-align: center;
}

.nav-options {
  margin-left: 50px;
  justify-content: left;
  vertical-align: center;
  display: flex;
  flex-direction: row;
  width: fit-content;
}

#main-label {
  font-family: "Playfair Display", serif;
  vertical-align: center;
  margin-top: -5px;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  padding-left: 40px;

  &:hover {
    transform: scale(1.1, 1.1);
  }
}
#options {
  padding: 10px 15px;
  font-family: "Combo", cursive;
  font-size: larger;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
}

#lang-select-div {
  height: fit-content;
  padding-right: 20px;
}

#lang-select {
  align-self: flex-end;
  height: 30px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: medium;
  margin-right: 30px;
  margin-top: 10px;

  label {
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .nav-options {
    margin-left: 0px;
    right: 0px;
    display: none;
  }

  .menu-icon {
    display: flex;
    margin-bottom: -3px;
    height: 50px;
    width: 50px;
  }

  #lang-select-div {
    padding-right: 0;
  }

  .logo-label {
    display: flex;
    font-family: "Playfair Display", serif;
    vertical-align: center;
    margin-top: -1px;
    margin-bottom: auto;
    font-size: xx-large;
    cursor: pointer;
    transition: all 0.25s ease;
  }
}
</style>

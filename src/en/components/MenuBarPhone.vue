<template>
  <div class="menu-bar">
    <label @click="closeMenu" class="closeBtn">X</label>

    <option @click="transferHome" id="menu-option">Home</option>
    <option @click="transferGallery" id="menu-option">Gallery</option>
    <option @click="transferPricing" id="menu-option">Pricing</option>
    <option @click="transferAbout" id="menu-option">About us</option>
    <option @click="transferNews" id="menu-option">News</option>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "MenuBarPhone",
  props: {
    closeMenu: Function,
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
    transferGallery() {
      router.push("/en/gallery");
    },
  },
};
</script>

<style scoped>
.menu-bar {
  height: 90vh;
  width: 100%;
  background-color: lightgray;
  color: #454545;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 0;
  text-align: center;
  opacity: 80%;
}

#menu-option {
  font-size: 2em;
  font-weight: bold;
}

.closeBtn {
  text-align: right;
  margin-top: -130px;
  margin-right: 40px;
  font-size: 1.5em;
}
</style>

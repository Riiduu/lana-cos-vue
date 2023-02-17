<template>
  <div class="menu-bar">
    <!-- add language navigation -->
    <label @click="closeMenu" class="closeBtn">X</label>

    <option @click="transferHome" id="menu-option">Etusivu</option>
    <option @click="transferGallery" id="menu-option">Galleria</option>

    <option @click="transferPricing" id="menu-option">
      Hinnoittelu & Tiedot
    </option>
    <option @click="transferAbout" id="menu-option">Meistä</option>
    <option @click="transferNews" id="menu-option">Ajankohtaista</option>
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
      router.push("/");
    },
    transferPricing() {
      router.push("/pricing");
    },
    transferAbout() {
      router.push("/about");
    },
    transferNews() {
      router.push("/news");
    },
    transferGallery() {
      router.push("/gallery");
    },
  },
};
</script>

<style scoped>
.menu-bar {
  height: 100vh;
  max-width: 100%;
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

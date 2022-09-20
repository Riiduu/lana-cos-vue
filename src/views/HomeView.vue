<template>
  <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
  <div id="hidable">
    <HeaderComponent :btn-click="ShowMenu"/>
    <!-- <TitleComponent /> -->
    <h1>Home</h1>
  </div>

</template>

<script>

import HeaderComponent from '@/en/components/HeaderComponent';
// import TitleComponent from "@/en/components/HomeComponents/TitleComponent";
import MenuBarPhone from "@/en/components/MenuBarPhone";

export default {
  name: 'HomeView',
  components: {
    MenuBarPhone,
    // TitleComponent,
    HeaderComponent
  },
  methods: {
    ShowMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "flex";
    },
    CloseMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "none";
    }
  }
}
</script>

<style>
body {
  margin: 0 !important;
  background-image: url("../assets/images/home-bg.jpg");
  max-width: 100%;
}

#menu-fs {
  display: none;
}
</style>

<template>
  <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
  <div id="hidable">
    <HeaderComp :btn-click="ShowMenu"/>
    <TitleComponent />
  </div>

</template>

<script>

import HeaderComp from './components/HeaderComp';
import TitleComponent from "@/en/components/HomeComponents/TitleComponent";
import MenuBarPhone from "@/en/components/MenuBarPhone";

export default {
  name: 'App',
  components: {
    MenuBarPhone,
    TitleComponent,
    HeaderComp
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

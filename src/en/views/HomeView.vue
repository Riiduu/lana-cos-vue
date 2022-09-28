<template>
  <div class="home">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
        <TitleComponent />
        <Gallery />
      </div>
  </div>
</template>

<script>

import HeaderComponent from '@/en/components/HeaderComponent';
import MenuBarPhone from "@/en/components/MenuBarPhone";
import TitleComponent from '../components/HomeComponents/TitleComponent.vue';
import Gallery from '@/fi/components/HomeComponents/Gallery.vue';

export default {
  name: 'HomeView',
  components: {
    MenuBarPhone,
    // TitleComponent,
    HeaderComponent,
    TitleComponent,
    Gallery
},
  methods: {
    ShowMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "flex";
      let hidable = document.getElementById('hidable');
      hidable.style.display = "none";
    },
    CloseMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "none";
      let hidable = document.getElementById('hidable');
      hidable.style.display = "block";
    }
  }
}
</script>

<style scoped>
.home {
  background-image: url("@/assets/images/home-bg.jpg");
  max-width: 100%;
  height: 100vh;
}

#navbar {
  margin-top: -110px;
}

#menu-fs {
  display: none;
}
</style>

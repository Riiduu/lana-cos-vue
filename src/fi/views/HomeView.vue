<template>
  <div class="backg">
  <div class="home">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
        <div class="content">
          <TitleComponent />
          <div class="additional-text">
            <h1>PALJASTAMME KAUNEUTESI KAIKKI PUOLET</h1>
            <label>Kauneussalonkimme on juuri se paikka, johon olet aina tervetullut ja jossa voit viettää aikasi viihtyen, sekä rentoutua ja piristäytyä. 
Työskentelemme vain parhailla raaka-aineilla, ottaen huomioon jokaisen asiakkaan yksilölliset toiveet.</label>
          </div>
        </div>
        
      </div>
  </div>
  </div>
</template>

<script>

import HeaderComponent from '@/fi/components/HeaderComponent';
import MenuBarPhone from "@/fi/components/MenuBarPhone";
import TitleComponent from '@/fi/components/HomeComponents/TitleComponent.vue';

export default {
  name: 'HomeView',
  components: {
    MenuBarPhone,
    // TitleComponent,
    HeaderComponent,
    TitleComponent
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

<style lang="scss" scoped>
.home {
  background: url("@/assets/images/home-bg.jpg");
  background-size: cover;
  max-width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: row;
}

.additional-text {
  margin: 110px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 60%;
  font-size: larger;

  label {
    padding-top: 30px;
  }
}

#navbar {
  margin-top: -110px;
}

#menu-fs {
  display: none;
}

@media (max-width: 700px) {
  .content {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 0;
  }

  .additional-text {
    margin: 10px;
    text-align: center;
    width: 100%;
    padding: 40px 0;
  }
}

</style>

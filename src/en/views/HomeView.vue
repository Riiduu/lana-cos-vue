<template>
  <div class="home">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
    <div id="hidable">
      <HeaderComponent id="navbar" :btn-click="ShowMenu" />
      <div class="content">
          <TitleComponent />
          <div class="additional-text">
            <h1>WE REVEAL ALL SIDES OF YOUR BEAUTY</h1>
            <label>
Our beauty salon is exactly the place where you are always welcome and where you can spend your time enjoying yourself, as well as relax and cheer up.
We work only with the best raw materials, taking into account the individual wishes of each customer.</label>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/en/components/HeaderComponent";
import MenuBarPhone from "@/en/components/MenuBarPhone";
import TitleComponent from "@/en/components/HomeComponents/TitleComponent.vue";

export default {
  name: "HomeView",
  components: {
    MenuBarPhone,
    // TitleComponent,
    HeaderComponent,
    TitleComponent,
  },
  methods: {
    ShowMenu() {
      let dropMenu = document.getElementById("menu-fs");
      dropMenu.style.display = "flex";
      let hidable = document.getElementById("hidable");
      hidable.style.display = "none";
    },
    CloseMenu() {
      let dropMenu = document.getElementById("menu-fs");
      dropMenu.style.display = "none";
      let hidable = document.getElementById("hidable");
      hidable.style.display = "block";
    },
  },
};
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

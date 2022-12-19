<template>
  <div class="about-us">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
    <div id="hidable">
      <HeaderComponent id="navbar" :btn-click="ShowMenu" />
      <div class="content">
        <Socials />

        <div class="worker-cards">
          <PersonInfo
            :personImg="'svetlana.jpg'"
            :personName="'Svetlana Klementyeva'"
            :personPhone="'+358 0445107254'"
            :personEmail="`lanacosexpress@gmail.com`"
            :personSocial="'IG: @lana.cos.hair'"
            :education1="'Turku barber collage'"
            :education2="'Helsinki barber collage'"
            :education3="'K-Market pelmen maker collage'"
          />

          <PersonInfo
            :personImg="'woman-1.jpg'"
            :personName="'Jane Doe'"
            :personPhone="'+358 0475893749'"
            :personEmail="`janedoe@gmail.com`"
            :personSocial="'IG: @janedoe'"
            :education1="'Turku barber collage'"
            :education2="'Helsinki barber collage'"
            :education3="'K-Market pelmen maker collage'"
          />
        </div>

        <SendEmail />
        <GoogleMaps />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/fi/components/HeaderComponent.vue";
import MenuBarPhone from "@/fi/components/MenuBarPhone.vue";
import PersonInfo from "@/fi/components/AboutusComponents/PersonInfo.vue";
import SendEmail from "@/fi/components/AboutusComponents/SendEmail.vue";
import GoogleMaps from "@/fi/components/AboutusComponents/GoogleMaps.vue";
import Socials from "@/fi/components/AboutusComponents/Socials.vue";

export default {
  name: "AboutUs",
  components: {
    HeaderComponent,
    MenuBarPhone,
    PersonInfo,
    SendEmail,
    GoogleMaps,
    Socials,
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
#navbar {
  position: fixed;
}

#menu-fs {
  display: none;
}

.worker-cards {
  display: flex;
  flex-direction: row;
}

.about-us {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(180deg, rgb(239, 214, 199), rgb(229, 128, 145));
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 0 auto;
  text-align: center;
}

.maps-location {
  width: 600px;
  height: 450px;
}

@media (max-width: 768px) {
  .worker-cards {
    display: flex;
    flex-direction: column;
  }

  .about-us {
    max-width: 100%;
  }
}
</style>

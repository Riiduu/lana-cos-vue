<template>
  <div class="news">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
    <div id="hidable">
      <HeaderComponent id="navbar" :btn-click="ShowMenu" />
      <div class="content">
        <!-- Mock components -->

        <div :key="index" v-for="index in jsonFile" class="new">
          <div class="top-row">
            <h3>{{ index.title }}</h3>
            <label>{{ index.date }}</label>
          </div>
          <label>{{ index.text }}</label>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "@/en/components/MenuBarPhone.vue";
import FooterComponent from "@/en/components/NewsComponents/Footer.vue";
import jsonNews from "@/backend/enNews.json";

export default {
  name: "NewsView",
  components: {
    HeaderComponent,
    MenuBarPhone,
    FooterComponent,
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
  data() {
    return {
      jsonFile: jsonNews,
    };
  },
};
</script>

<style lang="scss" scoped>
#menu-fs {
  display: none;
}

.news {
  background: linear-gradient(180deg, rgb(239, 214, 199), rgb(229, 128, 145));
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto auto auto;
}

.new {
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid gray;
  padding: 5px 30px 30px 30px;
  width: 80%;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: lightgray 2px 3px;
}

.top-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  label {
    color: gray;
    margin-top: 13px;
  }
}
</style>

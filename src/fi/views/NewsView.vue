<template>
  <div class="news">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
    <div id="hidable">
      <HeaderComponent id="navbar" :btn-click="ShowMenu" />
      <div class="content">
        <!-- New components go here -->
        <div :key="index" v-for="index in news" class="new">
          <div class="top-row">
            <h3>{{ index.title }}</h3>
            <label>{{ index.date }}</label>
          </div>
          <label>{{ index.newsText }}</label>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/fi/components/HeaderComponent.vue";
import MenuBarPhone from "@/fi/components/MenuBarPhone.vue";
import FooterComponent from "@/fi/components/NewsComponents/Footer.vue";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase/index.js";

export default {
  name: "NewsView",
  components: {
    HeaderComponent,
    MenuBarPhone,
    FooterComponent,
  },
  data() {
    return {
      news: [],
    };
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
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "fiNews"));
    let dbNews = [];

    querySnapshot.forEach((dbitem) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(dbitem.id, " => ", dbitem.data());
      const newContent = {
        id: dbitem.id,
        newsText: dbitem.data().newsText,
        date: dbitem.data().date,
        title: dbitem.data().title,
      };
      dbNews.push(newContent);

      this.news = dbNews;
    });
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

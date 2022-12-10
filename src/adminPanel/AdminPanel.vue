//TODO: FUNCTION TO ADD TO DATABASE

<template>
  <div class="AdminPanel">
    <div class="Admin">
      <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu" />
        <div class="content">
          <div class="forms">
            <form class="add-news">
              <label>Uutiset suomeksi</label>
              <input id="title-fi" placeholder="Otsikko" />
              <input id="text-fi" placeholder="Teksti" />
              <input id="date-fi" placeholder="Päivämäärä" />
              <button type="submit" @click="addFiNews">Valmis</button>
            </form>
            <form class="add-news">
              <label>News English</label>
              <input id="title-en" placeholder="Title" />
              <input id="text-en" placeholder="Text" />
              <input id="date-en" placeholder="Date" />
              <button type="submit" @click="addEnNews()">Post</button>
            </form>
          </div>
          <div class="removeNewsSection">
            <div class="en-news">
              <h3>Remove News</h3>
              <div class="news" :key="index" v-for="index in enNews">
                <label>{{ index.title }}</label>
                <span class="delete-new">X</span>
              </div>
            </div>
            <div class="fi-news"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "@/en/components/MenuBarPhone.vue";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase/index.js";

export default {
  name: "AdminPanel",
  components: {
    MenuBarPhone,
    HeaderComponent,
  },
  data() {
    return {
      enNews: [],
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "enNews"));
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

      this.enNews = dbNews;
    });
  },
};
</script>

<style lang="scss" scoped>
#menu-fs {
  display: none;
}

.content {
  justify-content: center;
  margin: 100px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.forms {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.add-news {
  display: flex;
  flex-direction: column;
  background: darkgray;
  width: 400px;
  margin: 50px;

  input {
    height: 50px;
  }
}

.removeNewsSection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.news {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  height: 50px;
  width: 200px;
  background-color: rgb(175, 175, 175);
  padding: auto 10px;
}

.delete-new {
  cursor: pointer;
  color: red;
}

@media (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
  }

  .add-news {
    margin: 50px auto;
  }
}
</style>

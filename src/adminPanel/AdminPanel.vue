//TODO: FUNCTION TO ADD TO DATABASE

<template>
  <div class="AdminPanel">
    <div class="Admin">
      <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu" />
        <div class="content">
          <div class="forms" @submit.prevent>
            <form class="add-news">
              <label>Uutiset suomeksi</label>
              <input id="title-fi" v-model="fiTitle" placeholder="Otsikko" />
              <input id="text-fi" v-model="fiText" placeholder="Teksti" />
              <input id="date-fi" v-model="fiDate" placeholder="Päivämäärä" />
              <button type="submit" @click="addFiNews">Valmis</button>
            </form>
            <form class="add-news">
              <label>News English</label>
              <input id="title-en" v-model="enTitle" placeholder="Title" />
              <input id="text-en" v-model="enText" placeholder="Text" />
              <input id="date-en" v-model="enDate" placeholder="Date" />
              <button type="submit" @click="addEnNews">Post</button>
            </form>
          </div>
          <div class="removeNewsSection">
            <div class="en-news">
              <h3>Remove News English</h3>
              <div class="news" :key="index" v-for="index in enNews">
                <label>{{ index.title }}</label>
                <span class="delete-new">X</span>
              </div>
            </div>
            <div class="fi-news">
              <h3>Remove News Finnish</h3>
              <div class="news" :key="index" v-for="index in fiNews">
                <label>{{ index.title }}</label>
                <span class="delete-new">X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "@/en/components/MenuBarPhone.vue";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

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
      fiNews: [],
      //English
      enTitle: ref(""),
      enText: ref(""),
      enDate: ref(""),

      //Finnish
      fiTitle: ref(""),
      fiText: ref(""),
      fiDate: ref(""),
    };
  },
  methods: {
    addEnNews() {
      addDoc(collection(db, "enNews"), {
        title: this.enTitle,
        newsText: this.enText,
        date: this.enDate,
      });
    },
    addFiNews() {
      addDoc(collection(db, "fiNews"), {
        title: this.fiTitle,
        newsText: this.fiText,
        date: this.fiDate,
      });
    },
  },
  async mounted() {
    //English

    onSnapshot(collection(db, "fiNews"), (querySnapshot) => {
      let fiDbNews = [];

      querySnapshot.forEach((dbitem) => {
        const newContent = {
          id: dbitem.id,
          newsText: dbitem.data().newsText,
          date: dbitem.data().date,
          title: dbitem.data().title,
        };
        fiDbNews.push(newContent);

        this.fiNews = fiDbNews;
      });
    });

    onSnapshot(collection(db, "enNews"), (querySnapshot) => {
      let enDbNews = [];

      querySnapshot.forEach((dbitem) => {
        const newContent = {
          id: dbitem.id,
          newsText: dbitem.data().newsText,
          date: dbitem.data().date,
          title: dbitem.data().title,
        };
        enDbNews.push(newContent);

        this.enNews = enDbNews;
      });
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
  flex-direction: row;
  align-items: center;
}

.news {
  margin: 0 10px;
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

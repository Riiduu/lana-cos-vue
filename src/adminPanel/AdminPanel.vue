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
              <button type="submit" @click="addEnNews">Post</button>
            </form>
          </div>
          <div class="removeNewsSection">
            <h3>Remove News</h3>
            <div class="news" :key="index" v-for="index in enNews">
              <label>{{ index.title }}</label>
              <span class="delete-new">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "@/en/components/MenuBarPhone.vue";
import enJsonFile from "@/backend/enNews.json";
// import fiJsonFile from "@/fi/components/NewsComponents/news.json";

export default {
  name: "AdminPanel",
  data() {
    return {
      enNews: enJsonFile,
      User: {},
    };
  },
  components: {
    MenuBarPhone,
    HeaderComponent,
  },
  methods: {
    addEnNews() {
      let title = document.getElementById("title-en").value;
      let text = document.getElementById("text-en").value;
      let date = document.getElementById("date-en").value;

      let enNew = {
        title: title,
        text: text,
        date: date,
      };

      this.enNews.push(enNew);
    },
    addFiNews() {},
    deleteNews() {},
  },
  mounted() {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch((error) => {
        console.log(error);
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

<template>
  <div class="AdminPanel">
    <div class="Admin">
      <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu" />
        <div class="content">
          <form class="add-news">
            <label>Uutiset suomeksi</label>
            <input id="title-fi" placeholder="Otsikko" />
            <input id="text-fi" placeholder="Teksti" />
            <input id="date-fi" placeholder="Päivämäärä" />
            <button type="submit">Valmis</button>
          </form>
          <form class="add-news">
            <label>News English</label>
            <input id="title-en" placeholder="Title" />
            <input id="text-en" placeholder="Text" />
            <input id="date-en" placeholder="Date" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "@/en/components/MenuBarPhone.vue";

export default {
  name: "AdminPanel",
  components: {
    MenuBarPhone,
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped>
#menu-fs {
  display: none;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px auto auto auto;
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    margin: 100px auto;
  }

  .add-news {
    margin: 50px auto;
  }
}
</style>

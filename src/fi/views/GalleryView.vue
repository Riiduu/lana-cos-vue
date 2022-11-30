<template>
  <div class="gallery">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
    <div id="hidable">
      <HeaderComponent id="navbar" :btn-click="ShowMenu" />
      <div class="content">
        <!-- 1 pic -->
        <div class="row">
          <img id="main-img" src="@/assets/images/gallery-pics/pic-1.png" />
        </div>
        <!-- 2 pics-->
        <div class="row">
          <img src="@/assets/images/gallery-pics/pic-2.jpg" />
          <img src="@/assets/images/gallery-pics/pic-3.png" />
        </div>
        <div class="row">
          <img src="@/assets/images/gallery-pics/pic-4.png" />
          <img src="@/assets/images/gallery-pics/pic-5.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/fi/components/HeaderComponent.vue";
import MenuBarPhone from "@/fi/components/MenuBarPhone.vue";

export default {
  name: "GalleryView",
  components: {
    HeaderComponent,
    MenuBarPhone,
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
#menu-fs {
  display: none;
}

.gallery {
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
  padding-top: 100px;
  background: linear-gradient(180deg, rgb(239, 214, 199), rgb(229, 128, 145));
}

#main-img {
  width: 60vw;
  height: 500px;
}

.row {
  margin: 0 auto;
  align-self: center;
  display: flex;
  flex-direction: row;

  img {
    width: 45vw;
    margin: 10px 10px;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;

    img {
      width: 90vw;
      height: auto;
    }
  }

  #main-img {
    width: 90vw;
    height: auto;
  }
}
</style>

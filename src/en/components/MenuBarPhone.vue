<template>
  <div id="drop-menu" class="menu-bar">
    <label @click="CloseButtonClick" id="close" class="closeBtn">X</label>

    <option id="menu-option">Home</option>
    <option id="menu-option">About us</option>
    <option id="menu-option">Pricing</option>
    <option id="menu-option">News</option>
  </div>
</template>

<script>
export default {
  name: "MenuBarPhone",
  methods: {
    CloseButtonClick() {
      let dropMenu = document.getElementById('drop-menu');
      console.log('yeye')
      dropMenu.style.background = 'blue';
    }
  }
}
</script>

<style scoped>
.menu-bar {
  height: 86vh;
  width: 100%;
  background-color: lightgray;
  color: #454545;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 0;
  text-align: center;
  opacity: 80%;
}

#menu-option {
  font-size: 2em;
  font-weight: bold;
}

.closeBtn {
  text-align: right;
  margin-top: -130px;
  margin-right: 40px;
  font-size: 1.5em;
}
</style>
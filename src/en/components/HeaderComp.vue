<template>
  <div class="Header">
    <img alt="" @click="btnClick" class="menu-icon" src="../../assets/icons/menu-icon.png"/>
    <h3 class="logo-label">LC Studio</h3>
    <div class="nav-options">
      <h3 id="main-label">LC Studio</h3>
      <label id="options">Pricing</label>
      <label id="options">About us</label>
      <label id="options">News</label>
    </div>

    <div id="lang-select-div">
      <select id="lang-select">
        <option>en</option>
        <option>fi</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    btnClick: Function,
    buttonId: null,
  }
}
</script>

<style lang="scss" scoped>
  .menu-icon {
    display: none;
  }

  .logo-label {
    display: none;
  }

  .Header {
    justify-content: space-between;
    height: 32px;
    display: flex;
    flex-direction: row;
    background-color: #232323;
    opacity: 85%;
    color: white;
    padding: 15px 0 30px 0;
    width: 100%;
    position: fixed;
    margin-top: -110px;
  }

  .nav-options {
    margin-left: 50px;
    justify-content: left;
    vertical-align: center;
    display: flex;
    flex-direction: row;
    width: 40%;
  }

  #main-label {
    font-family: 'Dancing Script', cursive;
    vertical-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.25s ease;
    padding-left: 40px;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  #options {
    padding: 10px 15px;
    font-family: 'Combo', cursive;
    font-size: larger;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  #lang-select-div {
    height: fit-content;
    padding-right: 20px;
  }

  #lang-select {
    align-self: flex-end;
    height: 30px;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: medium;
    margin-right: 30px;
    margin-top: 10px;

    option {
      color: black;
    }
  }

  @media (max-width: 768px) {
    .nav-options {
      margin-left: 0px;
      right: 0px;
      display: none;
    }

    .menu-icon {
      display: flex;
      margin-bottom: -3px;
      height: 50px;
      width: 50px;
    }

    #lang-select-div {
      padding-right: 0;
    }

    .logo-label {
      display: flex;
      font-family: 'Dancing Script', cursive;
      vertical-align: center;
      margin-top: 5px;
      margin-bottom: auto;
      font-size: xx-large;;
      cursor: pointer;
      transition: all 0.25s ease;
    }

  }


</style>
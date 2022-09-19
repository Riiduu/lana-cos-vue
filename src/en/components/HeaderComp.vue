<template>
  <div class="Header">
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
  name: "HeaderComp"
}
</script>

<style lang="scss" scoped>
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


</style>
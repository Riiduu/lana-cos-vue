<template>
  <div class="title-component">
    <label class="title">Lana Cos Studio</label><br/><br/><br/>
    <label class="description">
      Browse through our pages to find out more
    </label>
    <div class="button-holder">
      <!-- {/* Sends to news page */} -->
      <button id="read-more-button" @click="transferNews">ussi?</button>
    </div>
  </div>
</template>

<script>
  import router from '@/router'


export default {
  name: "TitleComponent",
  methods: {
    transferNews() {
      router.push('/news')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-component {
  margin: 110px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  height: 73vh;
}

.title {
  font-family: 'Playfair Display', serif;
  color: #414141;
  font-size: 5em;
  text-align: right;
}

.description {
  font-family: 'Roboto Slab', serif;
  text-align: right;
  color: black;
  font-size: larger;
  margin-top: -30px;
}

.button-holder {
  justify-content: center;
  text-align: center;
  vertical-align: bottom;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  padding-bottom: 30px;
  height: 40vh;
}

.button-holder #read-more-button {
  position: absolute;
  bottom: 0;
}

#read-more-button {
  width: 150px;
  height: 60px;
  border-radius: 15px;
  border: none;
  background-color: #676767;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
    color: black;
  }
}

@media (max-width: 768px) {
  .title-content {
    height: 70vh;
  }

  .title {
    font-size: 5rem;
  }
}

@media (max-width: 430px) {
  .title-content {
    margin: 100px 10%;
  }
}
</style>
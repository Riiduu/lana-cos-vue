<template>
  <div class="person-info">
    <div class="desktop-info">
      <div class="person-img">
        <img :src="require(`@/assets/images/${personImg}`)" />
      </div>
      <div class="person-personal-info">
        <label>{{ personName }}</label>
        <label>{{ personPhone }}</label>
        <label>{{ personEmail }}</label>
        <label>{{ personSocial }}</label>
      </div>
    </div>
    <div class="mobile-info">
      <div class="mobile-img">
        <img :src="require(`@/assets/images/${personImg}`)" />
      </div>
      <div class="mobile-personal-info">
        <label>{{ personName }}</label>
        <label>{{ personPhone }}</label>
        <label>{{ personEmail }}</label>
        <label>{{ personSocial }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  props: {
    personImg: String,

    personName: String,
    personPhone: String,
    personEmail: String,
    personSocial: String,
  },
};
</script>

<style lang="scss" scoped>
.mobile-info {
  display: none;
}

.desktop-info {
  display: flex;
  flex-direction: row;
}

.person-info {
  min-height: 180px;
  width: auto;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto;
  background-color: white;
  text-align: center;
  font-size: x-large;
  border-bottom-right-radius: 15px;
  box-shadow: 1px 1px rgb(149, 146, 146);
}

.person-img {
  margin: auto auto auto auto;
  width: 150px;
  vertical-align: middle;

  img {
    width: 100%;
  }
}

.person-personal-info {
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  width: 30vw;

  label {
    padding: 3px 0;
  }
}

.person-education {
  margin: 20px;
  display: flex;
  flex-direction: column;

  label {
    padding: 3px 0;
  }
}

@media (max-width: 768px) {
  .desktop-info {
    display: none;
  }

  .mobile-info {
    display: flex;
    flex-direction: column;
    background: white;
  }

  .person-info {
    height: fit-content;
    flex-direction: column;
    width: 80vw;
  }

  .mobile-img {
    width: 150px;
    justify-content: center;
    display: flex;
    img {
      display: flex;
      margin: 0 auto;
      width: 100%;
    }
  }

  .mobile-personal-info {
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: right;
    padding: 20px 0;
  }

  .mobile-education {
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: right;
    padding: 20px 0;
  }
}
</style>

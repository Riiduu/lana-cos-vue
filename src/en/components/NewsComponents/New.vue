<template>
  <div class="new">
    <div class="top-row">
      <h3>{{ newTitle }}</h3>
      <label>{{ newDate }}</label>
    </div>
    <label>{{ newDesc }}</label>
  </div>
</template>

<script>
export default {
  name: "NewComponent",
  props: {
    newTitle: Object,
    newDate: Object,
    newDesc: Object,
  },
};
</script>

<style lang="scss" scoped>
.new {
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid gray;
  padding: 5px 30px 30px 30px;
  width: 80%;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: lightgray 2px 3px;
}

.top-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  label {
    color: gray;
    margin-top: 13px;
  }
}
</style>

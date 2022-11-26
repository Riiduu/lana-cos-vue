<template>
  <div class="News-footer">
    <a @click="OpenAdminPanel">Edit</a>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "FooterComponent",
  methods: {
    OpenAdminPanel() {
      router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.News-footer {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100vw;

  a {
    margin-right: 40px;
    cursor: pointer;
    color: black;
  }
}
</style>

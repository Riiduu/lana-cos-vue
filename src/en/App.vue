<template>
  <div class="app">
    <HeaderComponent />
    <div class="content">
        <router-view/>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "App",

}
</script>

<style>
  body {
    margin: 0 !important;
  }
</style>

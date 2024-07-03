<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import Layout from "./components/Layout.vue";
</script>

<template>
  <div class="font-Poppins min-h-screen">
    <navbar></navbar>
    <RouterView />
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>

<style scoped>
</style>
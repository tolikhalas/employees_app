<script setup>
import { onMounted, ref } from "vue";
import HomeView from "./views/HomeView.vue";
import NavBar from "./components/widgets/NavBar.vue";

const theme = ref("cupcake");
const html = document.querySelector("html");

onMounted(() => {
  html.dataset.theme = theme.value;
});

const toggleTheme = () => {
  theme.value = theme.value === "cupcake" ? "cyberpunk" : "cupcake";
  html.dataset.theme = theme.value;
};
</script>

<template>
  <NavBar />
  <main class="px-4">
    <HomeView />
  </main>
</template>

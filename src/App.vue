<script setup>
import { onMounted, ref } from "vue";
import HomeView from "./views/HomeView.vue";
import NavBar from "./components/widgets/NavBar.vue";
import Footer from "./components/widgets/Footer.vue";

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
  <div class="flex min-h-screen flex-col">
    <NavBar />
    <main class="flex-1 px-4">
      <HomeView />
    </main>
    <Footer />
  </div>
</template>

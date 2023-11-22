<script setup>
import WavesDelimeter from "../components/Global/WavesDelimeter.vue";
</script>

<template>
  <section>
    <main class="grid h-screen items-center">
      <div class="flex flex-col-reverse justify-center px-8 md:flex-row">
        <div class="flex flex-col justify-center space-y-2 font-semibold">
          <h1 class="text-4xl lg:text-6xl">
            <span class="mb-2 text-primary">Empoyee App</span> <br />
            <span>Your company greatest tool</span>
          </h1>
          <p class="text-lg text-gray-500 lg:text-xl">
            Optimize & Enhance your productivity
          </p>
          <div
            class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
          >
            <button class="btn btn-primary">Get Started</button>
            <button
              class="btn btn-secondary w-auto overflow-hidden md:btn-ghost md:btn-outline"
            >
              <v-icon class="hidden" name="ri-play-circle-line" />Free Video
              Course
            </button>
          </div>
        </div>
        <div>
          <img
            src="../assets/img/blob.svg"
            class="bubble w-full fill-primary"
          />
        </div>
      </div>
      <WavesDelimeter />
    </main>
  </section>
</template>

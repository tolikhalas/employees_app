<script setup>
import WavesDelimeter from "@/components/Global/WavesDelimeter.vue";
import BlobFigure from "@/components/Global/BlobFigure.vue";
</script>

<template>
  <header class="hero relative grid h-screen items-center">
    <div class="flex flex-col-reverse justify-center px-12 md:flex-row">
      <div
        class="hero-content flex flex-col items-start justify-center font-semibold md:space-y-2"
      >
        <h1 class="text-2xl lg:text-6xl">
          <span class="mb-2 text-primary">Empoyee App</span> <br />
          <span>Your company greatest tool</span>
        </h1>
        <p class="text-md text-base-content lg:text-xl">
          Optimize & Enhance your productivity
        </p>
        <div
          class="flex w-full flex-col space-y-2 md:w-auto md:flex-row md:space-x-2 md:space-y-0"
        >
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary md:btn-outline">
            <v-icon name="ri-play-circle-line" />Free Video Course
          </button>
        </div>
      </div>
      <div>
        <BlobFigure />
      </div>
    </div>
    <WavesDelimeter waves="waves.svg" />
  </header>
</template>

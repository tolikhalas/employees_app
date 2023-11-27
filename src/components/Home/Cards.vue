<script setup>
import { ref } from "vue";
import WavesDelimeter from "@/components/Global/WavesDelimeter.vue";
import * as emoji from "node-emoji";
import { onMounted } from "vue";

const cards = [
  {
    title: "Efficient",
    emoji: "rocket",
    text: "An efficient app streamlines processes, reduces time wastage",
  },
  {
    title: "Intuitive",
    emoji: "eyes",
    text: "An intuitive app is easy to use, with a user-friendly interface",
  },
  {
    title: "Collaborative",
    emoji: "handshake",
    text: "A collaborative app encourages teamwork and communication",
  },
  {
    title: "Adaptable",
    emoji: "electric_plug",
    text: "An adaptable app can evolve with the changing needs of the company",
  },
  {
    title: "Innovative",
    emoji: "bulb",
    text: "An innovative app goes beyond basic functionalities",
  },
  {
    title: "Analytical",
    emoji: "chart_with_upwards_trend",
    text: "An analytical app includes robust reporting and analytics tools",
  },
];
</script>

<template>
  <section class="relative flex min-h-screen justify-center px-8">
    <WavesDelimeter class="top-0 rotate-180" waves="waves" />
    <div
      class="grid grid-cols-1 content-center gap-8 py-32 md:grid-cols-3 md:py-0"
    >
      <div
        class="card glass max-w-md shadow-xl"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="card-body">
          <h2 class="card-title">
            {{ emoji.emojify(`:${card.emoji}:`) }} {{ card.title }}
          </h2>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
    <WavesDelimeter
      waves="wavesOpacity"
      monochrome="fill-secondary"
      class="bottom-0 rotate-180"
    />
  </section>
</template>

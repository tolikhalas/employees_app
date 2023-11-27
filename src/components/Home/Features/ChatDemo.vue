<script setup>
import { reactive } from "vue";

// Mock messages
const messages = reactive([
  {
    from: {
      username: "Obi-Wan Kenobi",
      image: "src/assets/img/obi_wan.jpg",
    },
    text: "You were the Chosen One!",
    time: "12:45",
    status: "Delivered",
  },
  {
    from: {
      username: "Anakin",
      image: "src/assets/img/anakin.png",
    },
    text: "I hate you!",
    time: "12:46",
    status: "Seen at 12:46",
  },
]);
</script>

<template>
  <section>
    <h1 class="text-xl font-semibold">Chat</h1>
    <div
      class="chat"
      v-for="(message, index) in messages"
      :class="
        message.from.username === 'Obi-Wan Kenobi' ? 'chat-start' : 'chat-end'
      "
      :key="index"
    >
      <div class="avatar chat-image">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            :src="message.from.image"
          />
        </div>
      </div>
      <div class="chat-header">
        {{ message.from.username }}
        <time class="text-xs opacity-50">{{ message.time }}</time>
      </div>
      <div class="chat-bubble">{{ message.text }}</div>
      <div class="chat-footer opacity-50">{{ message.status }}</div>
    </div>
  </section>
</template>

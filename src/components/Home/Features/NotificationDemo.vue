<script setup>
import { ref } from "vue";

const displayNotifications = ref(null);

// Mock notifications
const notifications = [
  {
    message: "You have been added to project.",
    type: "info",
  },
  {
    message: "has sent you a message",
    type: "info",
    sender: {
      username: "Anakin",
      image: "src/assets/img/anakin.png",
    },
  },
];

// Mock demo notifications
const demoNotifications = [
  {
    message: "You have successfully registered",
    type: "success",
  },
  {
    message: "has sent you a message",
    type: "info",
    sender: {
      username: "Obi Wan",
      image: "src/assets/img/obi_wan.jpg",
    },
  },
];

const employee = {
  name: "Hart Hagerty",
  image: "src/assets/img/user1.png",
};

const showNotifications = () => {
  let classList = displayNotifications.value.classList;
  classList.remove("hidden");
  setTimeout(() => {
    classList.add("hidden");
  }, 4000);
};
</script>

<template>
  <section class="flex flex-col justify-between gap-4 md:flex-row">
    <div class="flex flex-col justify-between gap-4">
      <div class="grid gap-2">
        <h1 class="text-xl font-semibold">Notifications</h1>
        <p>You have {{ notifications.length }} notifications.</p>
      </div>
      <button class="btn btn-primary max-w-xs" @click="showNotifications">
        Show notifications
      </button>
    </div>
    <div class="flex flex-col justify-between gap-4">
      <div
        v-for="(notification, index) in demoNotifications"
        :key="index"
        class="alert"
        :class="'alert-' + notification.type"
      >
        <span v-if="notification.sender">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img :src="notification.sender.image" alt="Sender's avatar" />
              </div>
            </div>
            <div class="text-left">
              <div class="font-bold">{{ notification.sender.username }}</div>
              <div class="text-sm opacity-50">{{ notification.message }}</div>
            </div>
          </div>
        </span>
        <span v-else>
          {{ notification.message }}
        </span>
      </div>
    </div>
    <div class="toast toast-end hidden" ref="displayNotifications">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="alert"
        :class="'alert-' + notification.type"
      >
        <span v-if="notification.sender">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img :src="notification.sender.image" alt="Sender's avatar" />
              </div>
            </div>
            <div class="text-left">
              <div class="font-bold">{{ notification.sender.username }}</div>
              <div class="text-sm opacity-50">{{ notification.message }}</div>
            </div>
          </div>
        </span>
        <span v-else>
          {{ notification.message }}
        </span>
      </div>
    </div>
  </section>
</template>

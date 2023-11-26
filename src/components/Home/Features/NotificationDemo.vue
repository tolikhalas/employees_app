<script setup>
import { ref } from "vue";

const notifications = ref(null);

const employee = {
  name: "Hart Hagerty",
  employment: "Developer",
  image: "src/assets/img/user1.png",
  job: {
    vacancy: "Tech Lead Developer",
  },
};

const showNotifications = () => {
  let classList = notifications.value.classList;
  classList.remove("hidden");
  setTimeout(() => {
    classList.add("hidden");
  }, 4000);
};
</script>

<template>
  <section class="flex flex-col justify-between gap-4 md:flex-row">
    <div class="flex flex-col gap-4">
      <h1 class="text-xl font-semibold">Notifications</h1>
      <p>You have 2 notifications.</p>
      <button class="btn btn-primary max-w-xs" @click="showNotifications">
        Show notifications
      </button>
    </div>
    <div class="flex flex-col justify-between gap-4">
      <div class="alert alert-success text-sm">
        <span>You have successfully registered</span>
      </div>
      <div class="alert alert-info">
        <span class="flex justify-start">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img :src="employee.image" alt="Sender's avatar" />
              </div>
            </div>
            <div class="text-left">
              <div class="font-bold">{{ employee.name }}</div>
              <div class="text-sm opacity-50">has sent you message</div>
            </div>
          </div>
        </span>
      </div>
    </div>
    <div class="toast toast-end hidden" ref="notifications">
      <div class="alert alert-info text-sm">
        <span>You have been added to project</span>
      </div>
      <div class="alert alert-info">
        <span class="flex justify-start">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img :src="employee.image" alt="Sender's avatar" />
              </div>
            </div>
            <div class="text-left">
              <div class="font-bold">{{ employee.name }}</div>
              <div class="text-sm opacity-50">has sent you message</div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>

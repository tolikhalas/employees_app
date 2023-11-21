<script setup>
import { ref, watch } from "vue";

const isBurgerOpen = ref(false);
const isNotificationsOpen = ref(false);
const isAccountDetailsOpen = ref(false);

const switchBurger = () => {
  isBurgerOpen.value = !isBurgerOpen.value;
  // Others
  isNotificationsOpen.value = false;
  isAccountDetailsOpen.value = false;
};

const switchNotification = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value;
  // Others
  isBurgerOpen.value = false;
  isAccountDetailsOpen.value = false;
};

const switchAccountDetails = () => {
  isAccountDetailsOpen.value = !isAccountDetailsOpen.value;
  // Others
  isBurgerOpen.value = false;
  isNotificationsOpen.value = false;
};
</script>

<template>
  <section class="p-4">
    <nav class="navbar rounded-full bg-base-100 shadow-lg">
      <div class="navbar-start">
        <div class="w-full">
          <label
            :tabindex="0"
            class="btn btn-circle btn-ghost swap swap-rotate"
          >
            <input
              type="checkbox"
              hidden
              v-model="isBurgerOpen"
              @click="switchBurger"
            />
            <v-icon name="hi-menu-alt-2" class="swap-off" />
            <v-icon name="io-close-sharp" class="swap-on" />
          </label>
          <div class="flex flex-col">
            <ul
              :tabindex="0"
              class="menu menu-md absolute left-4 right-4 z-[1] mt-3 block rounded-box bg-base-100 p-2 shadow transition duration-200 md:menu-sm md:h-auto md:w-60"
              :class="isBurgerOpen ? '' : 'hidden'"
            >
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Employees</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-center">
        <button class="btn btn-ghost text-xl">Emp App</button>
      </div>
      <div class="navbar-end">
        <div class="dropdown-end md:dropdown md:dropdown-bottom">
          <button class="btn btn-circle btn-ghost" @click="switchNotification">
            <div class="indicator">
              <v-icon name="co-bell" />
              <span class="badge indicator-item badge-primary badge-xs"></span>
            </div>
          </button>
          <ul
            class="menu menu-sm absolute left-4 right-4 z-[1] mt-3 block rounded-box bg-base-100 p-2 shadow transition duration-200 md:dropdown-content md:left-auto md:w-64"
            :class="isNotificationsOpen ? '' : 'hidden opacity-0'"
          >
            <li>
              <a href="#" class="justify-between">
                Hello World!
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" class="justify-between">
                You have new message
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" class="justify-between">
                New Friend Suggestion
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="md:dropdown md:dropdown-end">
          <label
            :tabindex="0"
            class="avatar btn btn-circle btn-ghost"
            @click="switchAccountDetails"
          >
            <div class="w-10 rounded-full">
              <img
                src="../../assets/sample/img/person.webp"
                alt="user's photo"
              /></div
          ></label>
          <ul
            :tabindex="0"
            class="menu dropdown-content menu-sm absolute left-4 right-4 z-[1] mt-3 block rounded-box bg-base-100 p-2 shadow md:left-auto md:right-auto md:w-52"
            :class="isAccountDetailsOpen ? '' : 'hidden'"
          >
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

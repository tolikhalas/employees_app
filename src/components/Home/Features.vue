<script setup>
import EmployeesList from "@/components/Home/Features/EmployeesList.vue";
import ChatDemo from "@/components/Home/Features/ChatDemo.vue";
import ManagementDemo from "@/components/Home/Features/ManagementDemo.vue";
import NotificationDemo from "./Features/NotificationDemo.vue";

const features = [
  {
    name: "Employee List",
    component: EmployeesList,
  },
  {
    name: "Chat",
    component: ChatDemo,
  },
  {
    name: "Management",
    component: ManagementDemo,
  },
  {
    name: "Notifications",
    component: NotificationDemo,
  },
];
</script>

<template>
  <section
    class="grid min-h-screen content-center justify-center bg-secondary py-20 md:px-12 md:py-8"
  >
    <div class="m-2 grid max-w-6xl gap-12">
      <div class="m-8 grid gap-4 text-secondary-content md:m-4">
        <h1 class="text-center text-4xl">Features</h1>
        <p class="w-8/12 justify-self-center text-center text-xl">
          Empoyee App is primarily an optimazing tool that you can use in many
          different ways
        </p>
      </div>
      <div>
        <div role="tablist" class="lg:tabs-boxed lg:tabs">
          <template v-for="(feat, index) in features" :key="index">
            <input
              type="radio"
              name="feat_tabs"
              role="tab"
              class="tab hidden lg:inline-flex"
              :aria-label="feat.name"
              :checked="index === 0"
            />
            <div
              role="tabpanel"
              class="my-4 rounded-box border-base-300 bg-base-100 p-10 lg:tab-content"
            >
              <component :is="feat.component" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EmployeesList from "@/components/Home/Features/EmployeesList.vue";
import ChatDemo from "@/components/Home/Features/ChatDemo.vue";
import ManagementDemo from "@/components/Home/Features/ManagementDemo.vue";
import NotificationDemo from "./Features/NotificationDemo.vue";
</script>

<template>
  <section
    class="grid min-h-screen content-center justify-center bg-secondary py-20 md:px-12 md:py-0"
  >
    <div class="max-w-6xl">
      <div class="m-8 grid gap-4 md:m-4">
        <h1 class="text-center text-4xl">Features</h1>
        <p class="w-8/12 justify-self-center text-center text-xl">
          Empoyee App is primarily an optimazing tool that you can use in many
          different ways
        </p>
      </div>
      <div>
        <div role="tablist" class="lg:tabs-boxed lg:tabs">
          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden lg:inline-flex"
            aria-label="Employees List"
          />
          <div
            role="tabpanel"
            class="my-4 rounded-box border-base-300 bg-base-100 p-10 lg:tab-content"
          >
            <EmployeesList />
          </div>

          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden lg:inline-flex"
            aria-label="Chat"
            checked
          />

          <div
            role="tabpanel"
            class="my-4 rounded-box border-base-300 bg-base-100 p-10 lg:tab-content"
          >
            <ChatDemo />
          </div>

          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden lg:inline-flex"
            aria-label="Management"
          />
          <div
            role="tabpanel"
            class="my-4 rounded-box border-base-300 bg-base-100 p-10 lg:tab-content"
          >
            <ManagementDemo />
          </div>
          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden lg:inline-flex"
            aria-label="Notifications"
          />
          <div
            role="tabpanel"
            class="my-4 rounded-box border-base-300 bg-base-100 p-10 lg:tab-content"
          >
            <NotificationDemo />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
      <div class="px-8">
        <div role="tablist" class="md:tabs-boxed md:tabs">
          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden md:inline-flex"
            aria-label="Employees List"
          />
          <div
            role="tabpanel"
            class="rounded-box border-base-300 bg-base-100 p-10 md:tab-content"
          >
            Employees list
          </div>

          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden md:inline-flex"
            aria-label="Chat"
            checked
          />

          <div
            role="tabpanel"
            class="rounded-box border-base-300 bg-base-100 p-10 md:tab-content"
          >
            Employees Chat
          </div>

          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden md:inline-flex"
            aria-label="Management"
          />
          <div
            role="tabpanel"
            class="rounded-box border-base-300 bg-base-100 p-10 md:tab-content"
          >
            Employees Management
          </div>
          <input
            type="radio"
            name="feat_tabs"
            role="tab"
            class="tab hidden md:inline-flex"
            aria-label="Notifications"
          />
          <div
            role="tabpanel"
            class="rounded-box border-base-300 bg-base-100 p-10 md:tab-content"
          >
            Notifications
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

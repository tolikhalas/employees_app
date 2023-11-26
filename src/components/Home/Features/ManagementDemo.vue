<script setup>
import { reactive, ref } from "vue";

// TODO: Replace mock data with fetch from MongoDB messages collection
const employees = reactive([
  {
    name: "Hart Hagerty",
    employment: "Developer",
    image: "src/assets/img/user1.png",
    job: {
      vacancy: "Tech Lead Developer",
    },
  },
  {
    name: "Brice Swyre",
    employment: "Developer",
    image: "src/assets/img/user2.png",
    job: {
      vacancy: "Middle Developer",
    },
  },
  {
    name: "Marjy Ferencz",
    employment: "Designer",
    image: "src/assets/img/user3.png",
    job: {
      vacancy: "Middle Designer",
    },
  },
  {
    name: "Yancy Tear",
    employment: "Data Scientist",
    image: "src/assets/img/user4.png",
    job: {
      vacancy: "Junior Data Science",
    },
  },
]);
</script>

<template>
  <section>
    <h1 class="mb-4 mt-2 text-xl font-semibold">Management</h1>
    <table class="table min-w-full">
      <thead>
        <tr>
          <th>Company</th>
          <th class="hidden md:table-cell">Position</th>
          <th class="hidden md:table-cell">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(employee, index) in employees"
          :key="index"
          :class="employee.checked ? 'bg-accent' : ''"
        >
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    :src="employee.image"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ employee.name }}</div>
                <div class="text-sm opacity-50">{{ employee.employment }}</div>
              </div>
            </div>
          </td>
          <td class="hidden md:table-cell">
            <span
              class="badge badge-ghost badge-sm"
              :class="employee.checked ? 'bg-primary' : ''"
              >{{ employee.job.vacancy }}</span
            >
          </td>
          <th class="flex justify-between gap-2">
            <button class="btn btn-primary btn-xs hidden md:inline-block">
              promote
            </button>
            <button class="btn btn-secondary btn-xs">message</button>
            <button class="btn btn-accent btn-xs">manage</button>
          </th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const selectAll = ref(false);

// TODO: Replace mock data with fetch from MongoDB messages collection
const employees = reactive([
  {
    name: "Hart Hagerty",
    location: "United States",
    image: "src/assets/img/user1.png",
    job: {
      company: "Zemlak, Daniel and Leannon",
      vacancy: "Desktop Support Technician",
    },
    preferences: {
      color: "Purple",
    },
    checked: ref(false),
  },
  {
    name: "Brice Swyre",
    location: "China",
    image: "src/assets/img/user2.png",
    job: {
      company: " Carroll Group ",
      vacancy: "Tax Accountant",
    },
    preferences: {
      color: "Red",
    },
    checked: ref(false),
  },
  {
    name: "Marjy Ferencz",
    location: "Latvia",
    image: "src/assets/img/user3.png",
    job: {
      company: "Rowe-Schoen",
      vacancy: "Office Assistant I",
    },
    preferences: {
      color: "Crimson",
    },
    checked: ref(false),
  },
  {
    name: "Yancy Tear",
    location: "Brazil",
    image: "src/assets/img/user4.png",
    job: {
      company: "Wyman-Ledner",
      vacancy: "Community Outreach Specialist",
    },
    preferences: {
      color: "Indigo",
    },
    checked: ref(false),
  },
]);

const selectAllAction = () => {
  selectAll.value = !selectAll.value;
  employees.forEach((employee) => {
    employee.checked = selectAll.value;
  });
};

watch(
  employees,
  () => {
    if (employees.filter((employee) => !employee.checked).length > 0) {
      selectAll.value = false;
    } else {
      selectAll.value = true;
    }
  },
  { deep: true },
);
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="mb-4 mt-2 text-xl font-semibold lg:hidden">Employees list</h1>
    <table class="table">
      <thead>
        <tr :class="selectAll ? 'bg-primary text-primary-content' : ''">
          <th>
            <label>
              <input
                type="checkbox"
                class="checkbox"
                v-model="selectAll"
                @click="selectAllAction"
              />
            </label>
          </th>
          <th>Name</th>
          <th class="hidden md:table-cell">Job</th>
          <th class="hidden md:table-cell">Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(employee, index) in employees"
          :key="index"
          :class="employee.checked ? 'bg-accent text-accent-content' : ''"
        >
          <th>
            <label>
              <input
                type="checkbox"
                class="checkbox"
                v-model="employee.checked"
              />
            </label>
          </th>
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
                <div class="text-sm opacity-50">{{ employee.location }}</div>
              </div>
            </div>
          </td>
          <td class="hidden md:table-cell">
            {{ employee.job.company }}
            <br />
            <span
              class="badge badge-ghost badge-sm"
              :class="employee.checked ? 'bg-primary text-primary-content' : ''"
              >{{ employee.job.vacancy }}</span
            >
          </td>
          <td class="hidden md:table-cell">
            {{ employee.preferences.color }}
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

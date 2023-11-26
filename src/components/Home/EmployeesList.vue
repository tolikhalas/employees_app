<script setup>
import { reactive, ref } from "vue";

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
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="my-2 px-4 text-xl font-semibold lg:hidden">Employees list</h1>
    <table class="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" v-model="selectAll" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" v-model="selectAll" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="@/assets/img/user1.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span class="badge badge-ghost badge-sm"
              >Desktop Support Technician</span
            >
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" v-model="selectAll" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="@/assets/img/user2.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Brice Swyre</div>
                <div class="text-sm opacity-50">China</div>
              </div>
            </div>
          </td>
          <td>
            Carroll Group
            <br />
            <span class="badge badge-ghost badge-sm">Tax Accountant</span>
          </td>
          <td>Red</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" v-model="selectAll" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="@/assets/img/user3.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Marjy Ferencz</div>
                <div class="text-sm opacity-50">Latvia</div>
              </div>
            </div>
          </td>
          <td>
            Rowe-Schoen
            <br />
            <span class="badge badge-ghost badge-sm">Office Assistant I</span>
          </td>
          <td>Crimson</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" v-model="selectAll" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="@/assets/img/user4.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Yancy Tear</div>
                <div class="text-sm opacity-50">Brazil</div>
              </div>
            </div>
          </td>
          <td>
            Wyman-Ledner
            <br />
            <span class="badge badge-ghost badge-sm"
              >Community Outreach Specialist</span
            >
          </td>
          <td>Indigo</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

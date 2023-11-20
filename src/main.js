import { createApp } from "vue";

// Styles
import "./assets/styles/index.css";
// Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiMenuAlt2, CoBell } from "oh-vue-icons/icons";

import App from "./App.vue";

const app = createApp(App);

// Adding icons to app
addIcons(HiMenuAlt2, CoBell);
app.component("v-icon", OhVueIcon);

app.mount("#app");

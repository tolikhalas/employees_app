import { createApp } from "vue";

// Styles
import "./assets/styles/index.css";
// Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiMenuAlt2, CoBell, IoCloseSharp } from "oh-vue-icons/icons";
import { RiPlayCircleLine } from "oh-vue-icons/icons"

import { BiInstagram, BiFacebook, BiTwitter, BiLinkedin } from "oh-vue-icons/icons";

import App from "./App.vue";

const app = createApp(App);

// Adding icons to app
// System icons
addIcons(HiMenuAlt2, CoBell, IoCloseSharp);
// Socials
addIcons(BiInstagram, BiFacebook, BiTwitter, BiLinkedin);
// Miscellaneous
addIcons(RiPlayCircleLine)
app.component("v-icon", OhVueIcon);

app.mount("#app");

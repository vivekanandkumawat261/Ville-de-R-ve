import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router
import { createPinia } from "pinia";
import "./assets/styles/main.css"; // Ensure this file exists
import "./style.css";


const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

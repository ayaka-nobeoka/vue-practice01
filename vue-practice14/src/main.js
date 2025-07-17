// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ここでルーターを読み込む

const app = createApp(App);

app.use(router); // ← プラグインの登録はここ！
app.mount("#app");

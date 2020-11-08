import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import './assets/tailwind.css'
import LoadScript from 'vue-plugin-load-script';

const app = createApp(App);
app.use(LoadScript);
app.use(router);

app.mount('#app')


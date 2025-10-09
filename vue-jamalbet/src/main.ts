import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router/Index' 

const app = createApp(App).use(router)

library.add(faBars)
app.component('hamburguer', FontAwesomeIcon);
app.mount('#app')


import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

// ----------- PRIME CONFIG IMPORTS -----------
import PrimeVue from 'primevue/config'

// ----------- PRIME IMPORTS -----------
import Card from 'primevue/card'


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'light'
    }
  }
})
app.use(router)

// ----------- GLOBAL COMPONENTS DECLARATIONS -----------
app.component('TheCard', Card)

app.mount('#app')

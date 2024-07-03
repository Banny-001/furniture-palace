//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import vue from 'vue'
//import filter from 'vue-filter'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify= createVuetify ({
    components,
    directives
})

 createApp(App)
.use(router)
.use(store)
.use(vuetify)

.mount('#app')

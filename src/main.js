import "./assets/main.css"
import { createRouter, createWebHashHistory } from "vue-router"
import { createApp } from "vue"
import App from "./App.vue"

// Defines route components
import HomeView from "./views/HomeView.vue"
import AvocadoDetails from "./views/AvocadoDetails.vue"
// Defines routes
// Each route maps to a component
const routes = [
    { path: "/", component: HomeView },
    { path: "/details/:id", component: AvocadoDetails, props: true },
]

// Creates the router instance and passes the `routes` option
const router = createRouter({
    // Provides the history implementation.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// Creates and mounts the root instance
const app = createApp(App)

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount("#app")
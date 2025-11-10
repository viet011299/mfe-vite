import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Employee from "./pages/Employee.vue";
import Department from "./pages/Department.vue";
import Position from "./pages/Position.vue";
import NotFound from "./pages/NotFound.vue";
import Contact from "./pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contact },
  {
    path: "/employees",
    name: "employees",
    component: Employee,
  },
  {
    path: "/departments",
    name: "departments",
    component: Department,
  },
  {
    path: "/positions",
    name: "positions",
    component: Position,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[
      {
        path: "/Dashboard",
        name: "Dashboard",
        component: () => 
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
      },
      {
        path: "/Chart",
        name: "Chart",
        component: () => 
          import(/* webpackChunkName: "chart" */ "../views/Chart.vue")
      },
      {
        path: "/Setting",
        name: "Setting",
        component: () => 
          import(/* webpackChunkName: "setting" */ "../views/Setting.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
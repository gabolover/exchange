import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";
//permite instalar pluggins o utildades que tiene la libreria
//dice que vamos a utilizarlo, pero no se esta utilizando en ningun lado
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      //id es un parametro dinamico
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});

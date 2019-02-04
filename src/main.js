// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

// State machine for the app is here
// ..\movie search good fsm corrected flowchart no emphasis switchMap.png
new Vue({
  el: "#root",
  components: { App },
  template: "<App/>"
});

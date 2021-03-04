const App = {
  data() {
    return {
      name: "Rahul Lokare",
    };
  },
};
Vue.createApp(App).mount("#app");

Vue.createApp({
  data() {
    return {
      name: "I write code",
    };
  },
}).mount("#onemoreapp");

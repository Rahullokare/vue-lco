// alert("hell0");

const App = {
  data() {
    return {
      heading: "A trip to Japan",
      subhead: "nature park in japan",
      myImg: "./mountain.jfif",
      buttonText: "Go to Lco",
      linkTOLco: "web.learncodeonline.in",
    };
  },
};

Vue.createApp(App).mount(".vapp");

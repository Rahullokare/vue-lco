// alert("hello");
const App = {
  data() {
    return {
      courseList: [
        {
          id: "lco1",
          courseName: "python",
          subtitle: "learn python with excitement",
          price: "199rs",
          courseImage: "python.jfif",
          url: "",
        },
        {
          id: "lco2",
          courseName: "React",
          subtitle: "learn React with excitement",
          price: "199rs",
          courseImage: "react.png",
          url: "",
        },
        {
          id: "lco3",
          courseName: "Vue",
          subtitle: "learn vue with excitement",
          price: "199rs",
          courseImage: "vue.jpeg",
          url: "",
        },
      ],
    };
  },
};

Vue.createApp(App).mount("#vapp");

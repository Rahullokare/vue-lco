// alert("hello");
const App = {
  data() {
    return {
      holdMyItem: [],
      courseList: [
        {
          id: "lco1",
          courseName: "python",
          subtitle: "learn python with excitement",
          price: 199,
          courseImage: "python.jfif",
          url: "",
        },
        {
          id: "lco2",
          courseName: "React",
          subtitle: "learn React with excitement",
          price: 199,
          courseImage: "react.png",
          url: "",
        },
        {
          id: "lco3",
          courseName: "Vue",
          subtitle: "learn vue with excitement",
          price: 199,
          courseImage: "vue.jpeg",
          url: "",
        },
      ],
    };
  },
  computed: {
    finalBill() {
      const gst = 10;
      return this.holdMyItem.reduce(
        (accumulator, course) => Number(course.price) + gst + accumulator,
        0
      );
    },
  },
  methods: {
    addToHolder(course) {
      this.holdMyItem.push(course);
    },
  },
};

Vue.createApp(App).mount("#vapp");

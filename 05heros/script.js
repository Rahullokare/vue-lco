Vue.createApp({
  data() {
    return {
      heroSelect: "",
      avengerSelect: [],
      myDynamic: "",
      myBonds: [
        { text: "james Bond", value: 7 },
        { text: "jammy Bond", value: 8 },
        { text: "valry Bond", value: 9 },
      ],
    };
  },
}).mount("#vapp");

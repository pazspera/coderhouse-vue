let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    increaseCounter() {
      this.counter++;
      console.log(this.counter);
    },
    decreaseCounter() {
      this.counter--;
      console.log(this.counter);
    },
  },
});

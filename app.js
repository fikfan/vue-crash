const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire',
      buttonTitle: 'Show Title',
      show: true,
    }
  },
  methods: {
    showTitle() {
      this.show = !this.show;

      if (this.show) {
        this.buttonTitle = 'Hide Title';
      } return this.buttonTitle = 'Show Title';
    }
  }
});

app.mount('#app');
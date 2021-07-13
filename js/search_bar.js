let data = {
  list: [
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Vue.js' },
    { name: 'React' },
    { name: 'Angular' },
  ],
  input: {
    text: '',
  },
};

new Vue({
  el: '#app',
  data: data,
  computed: {
    titleMenu() {
      if (this.input.text) {
        return this.list.filter(
          itemName =>
            itemName.name
              .toLowerCase()
              .indexOf(this.input.text.toLowerCase()) !== -1, //不等於-1代表有找到，找到就留下
        );
      } else {
        return this.list; //任何字都沒輸入即顯示全部項目
      }
    },
  },
});

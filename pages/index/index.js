// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    message: 'hello world!',
    movies: ['蜘蛛侠', '钢铁侠', '咸蛋超人'],
    counter: 0
  },
  handleIncrement: function() {
    this.setData({ counter: this.data.counter + 1})
  },
  handleDecrement: function() {
    this.setData({ counter: this.data.counter - 1})
  }
})

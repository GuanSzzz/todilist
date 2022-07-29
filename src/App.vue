<template>
  <div>
    <button @click="Peeling">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <MyButton :title="我的按钮"></MyButton>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import MyButton from './components/MyButton.vue'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    MyButton
  },

  created() {},

  methods: {
    Peeling() {
      const color = ['red', 'pink', 'blue', 'skyblue', 'hotppink']
      const n = Math.floor(Math.random() * 5)
      // console.log(color[n])
      this.$store.dispatch('peeling/ChangeColor', color[n])
    }
  }
}
</script>

<style scoped></style>

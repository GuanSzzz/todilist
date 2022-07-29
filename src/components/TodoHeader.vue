<template>
  <header class="header">
    <h1 :style="{ color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      v-model="todo"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addlist"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapTodoState } = createNamespacedHelpers('todolist')
const { mapState: mapPeelingState } = createNamespacedHelpers('peeling')
export default {
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapTodoState(['todolist']),
    ...mapPeelingState(['color'])
    // color() {
    //   return this.$store.state.peeling.color
    // }
  },
  methods: {
    addlist() {
      if (this.todo.trim().length === 0) {
        return alert('内容不能为空')
      }
      const id = this.todolist[this.todolist.length - 1]?.id + 1 || 1
      const list = {
        name: this.todo,
        done: false,
        id
      }
      this.$store.dispatch('todolist/SetTodoList', list)
      this.todo = ''
      console.log(list)
    }
  }
}
</script>

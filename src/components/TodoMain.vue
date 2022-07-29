<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="(item, index) in todolist" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delTodoList(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapTodoState } = createNamespacedHelpers('todolist')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapTodoState(['todolist'])
  },
  methods: {
    delTodoList(index) {
      // const index = this.todolist.findIndex((ele) => (ele.id = id))
      this.todolist.splice(index, 1)
      // console.log(this.todolist)
      this.$store.dispatch('todolist/DelTodoList', this.todolist)
    }
  }
}
</script>

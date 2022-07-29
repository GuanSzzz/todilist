<template>
  <button>{{ title ? title : '默认按钮' }}</button>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="less">
button {
  border: 1px solid #000;
  padding: 10px;
}
</style>

<template>
  <div id="app">
    <contact></contact>
  </div>
</template>

<script>
import contact from './view/contact.vue'
export default {
  name: 'app',
  components: {
    contact
  }
}
</script>

<style lang='less'>
@import './less/index.less';
</style>

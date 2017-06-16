<template>
  <div>
    <div class="contact__main">
      <lx-form></lx-form>
      <lx-table></lx-table>
    </div>
  </div>
</template>

<script>
import LxForm from '../components/LxForm.vue'
import LxTable from '../components/LxTable.vue'
export default {
  name: 'contact',
  components: {
    LxForm,
    LxTable
  }
}
</script>

<style scoped>
.contact__main {
  padding-top: 80px;
  width: 500px;
  margin: 0 auto;
}
</style>

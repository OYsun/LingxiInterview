<template>
  <div v-if="!nodate">
    <div>
      <div class="Lingxi-loading__mask"></div>
      <div class="Lingxi-loading" >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    nodate: Boolean
  }
}
</script>
<style>

</style>

<template>
  <div>
    <div v-if="!nodate">

      <div>
        <div class="Lingxi-loading__mask"></div>
        <div class="Lingxi-loading"  v-if="!min">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="Lingxi-MinLoading"  v-if="min">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    min: Boolean,
    nodate: Boolean
  }

}
</script>
<style>

</style>

<template>
  <transition-group name="dialog" tag="div" >
    <div class="Lingxi__message" key="message" v-show="visible">
      <div class="Lingxi__message__icon">
        ！
      </div>
      <div class="Lingxi__message__title">
        {{ message }}
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'LxMessage',
  props: {
    message: String,
    visible: Boolean
  }
}
</script>

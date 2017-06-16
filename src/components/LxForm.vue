<template>
  <div class="Lingxi__form">
    <div class="Lingxi__form__wrap" >
      <div class="Lingxi__form__item">
        <label for="name" class="Lingxi__form__item--label">姓名</label>
        <input type="text" name="name" class="Lingxi__form__item--input"  v-model="inputUser.name" >
      </div>
      <div class="Lingxi__form__item">
        <label for="tel" class="Lingxi__form__item--label">电话</label>
        <input type="tel" name="tel" class="Lingxi__form__item--input" v-model="inputUser.tel" >
      </div>
      <button type=""class="Lingxi__btn Lingxi__btn--info Lingxi__form__item--button"  @click='toAddUser()'>添加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LxForm',
  computed: {
    ...mapState([
      'inputUser',
      'loading'
    ])
  },
  methods: {
    ...mapActions([
      'toggleLoading',
      'addUser',
      'restForm'
    ]),
    toAddUser () {
      let _this = this
      _this.toggleLoading()
      setTimeout(function () {
        _this.addUser()
        _this.restForm()
        _this.toggleLoading()
      }, 800)
    }
  }
}
</script>


<template>
  <div class="Lingxi__form" >
    <lx-message :visible='rx' :message='message'></lx-message>
    <div class="Lingxi__form__wrap" >
      <div class="Lingxi__form__item">
        <label for="name" class="Lingxi__form__item--label">姓名</label>
        <input type="text" name="name" class="Lingxi__form__item--input"  v-model="inputUser.name" required>
      </div>
      <div class="Lingxi__form__item">
        <label for="tel" class="Lingxi__form__item--label">电话</label>
        <input type="tel" name="tel" class="Lingxi__form__item--input" v-model="inputUser.tel" >
      </div>
      <button type="submit"class="Lingxi__btn Lingxi__btn--success Lingxi__form__item--button"  @click='toAddUser()'>添加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { isPhone } from '../util/regExp.js'
import LxMessage from '../components/LxMessage.vue'
export default {
  name: 'LxForm',
  components: {
    LxMessage
  },
  data () {
    return {
      rx: false,
      message: 'nihao'
    }
  },
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
      if (this.inputUser.name === '' || this.inputUser.tel === '') {
        this.rx = true
        this.message = '请输入正确的姓名和电话'
        let that = this
        setTimeout(function () {
          that.rx = false
          that.restForm()
        }, 2000)
      } else if (!isPhone(this.inputUser.tel)) {
        this.rx = true
        this.message = '电话格式错误'
        let that = this
        setTimeout(function () {
          that.rx = false
          that.restForm()
        }, 2000)
      } else {
        let _this = this
        _this.toggleLoading()
        setTimeout(function () {
          _this.addUser()
          _this.restForm()
          _this.toggleLoading()
        }, 1000)
      }
    }
  }
}
</script>


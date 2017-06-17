<template>
  <div class="Lingxi__mian ">
    <vloading  :nodate='loading'></vloading>
    <div v-show="editor">
      <div class="Lingxi__editor__mask"></div>
      <div class="Lingxi__editor__form">
        <div class="Lingxi__form__item">
          <label for="name" class="Lingxi__form__item--label">姓名</label>
          <input type="text" name="name" class="Lingxi__form__item--input"  v-model="editorData.name" required>
        </div>
        <div class="Lingxi__form__item">
          <label for="tel" class="Lingxi__form__item--label">电话</label>
          <input type="tel" name="tel" class="Lingxi__form__item--input" v-model="editorData.tel" >
        </div>
        <button type="button" class="Lingxi__btn Lingxi__btn--success" @click = 'savaUser'>保存</button>
        <button type="button" class="Lingxi__btn Lingxi__btn--error" @click='cancel'>取消</button>
      </div>
    </div>
    <table class="Lingxi__table">
      <thead>
        <tr>
          <th >姓名</th>
          <th >电话</th>
          <th >操作</th>
        </tr>
      </thead>
      <transition-group name="fade" tag="tbody">
        <tr v-for="(data,index) in tableList" :key="tableList">
          <td>{{ data.name }}</td>
          <td>{{ data.tel }}</td>
          <td>
            <button type="button" class="Lingxi__btn Lingxi__btn--error" @click='toDeleUser(index)'>删除</button>
            <button type="button" class="Lingxi__btn Lingxi__btn--info" @click='toEditor(index)'>编辑</button>
          </td>
        </tr>
      </transition-group>
    </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import vloading from './loading.vue'
export default {
  name: 'LxTable',
  created () {
    let _this = this
    _this.toggleLoading()
    setTimeout(function () {
      _this.fetchData()
      _this.toggleLoading()
    }, 1000)
  },
  data () {
    return {
      editor: false
    }
  },
  components: {
    vloading
  },
  computed: {
    ...mapState([
      'tableList',
      'loading',
      'inputUser',
      'editorData'
    ])
  },
  methods: {
    ...mapActions([
      'toggleLoading',
      'fetchData',
      'deleUser',
      'editorUser'
    ]),
    toDeleUser (index) {
      let _this = this
      _this.toggleLoading()
      setTimeout(function () {
        _this.deleUser(index)
        _this.toggleLoading()
      }, 1000)
    },
    toEditor (index) {
      this.editor = true
      this.editorUser(index)
    },
    cancel () {
      this.editor = false
    },
    savaUser () {
      this.editor = false
    }
  }
}
</script>
<style>
.Lingxi__editor__form{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.Lingxi__editor__mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:#fff;
}
</style>

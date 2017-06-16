<template>
  <div class="Lingxi__mian ">
    <vloading class="Lingxi__table__loading" :nodate='loading'></vloading>
    <table class="Lingxi__table">
      <thead>
        <tr>
          <th >姓名</th>
          <th >电话</th>
          <th >操作</th>
        </tr>
      </thead>
      <transition-group name="fade-slide" tag="tbody" >
      <tr v-for="(data,index) in tableList" :key="tableList">
          <td>{{ data.name }}</td>
          <td>{{ data.tel }}</td>
          <td><button type="" class="Lingxi__btn Lingxi__btn--error" @click='toDeleUser(index)'>删除</button></td>
      </tr>
      </transition-group>
    </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import vloading from './loading'
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
  components: {
    vloading
  },
  computed: {
    ...mapState([
      'tableList',
      'loading'
    ])
  },
  methods: {
    ...mapActions([
      'toggleLoading',
      'fetchData',
      'deleUser'
    ]),
    toDeleUser (index) {
      let _this = this
      _this.toggleLoading()
      setTimeout(function () {
        _this.deleUser(index)
        _this.toggleLoading()
      }, 800)
    }
  }
}
</script>

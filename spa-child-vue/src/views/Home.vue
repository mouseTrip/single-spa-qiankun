<!--
 * @Author: 张天昊
 * @Date: 2020-05-06 16:05:21
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:26:46
 * @Description: 
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>接受到基座传来的信息{{ user }}</p>
    <button @click="sendMsg2Base('来着vue子应用的消息')">给基座传消息</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setSpaState } from '@/utils/spa-store'

export default {
  name: 'Home',
  computed: {
    ...mapState('spa', ['spaState']),
    user() {
      return this.spaState.user
    },
  },
  methods: {
    sendMsg2Base(msg) {
      setSpaState({
        ...this.spaState,
        msg,
      })
    },
  },
}
</script>

<!--
 * @Author: 张天昊
 * @Date: 2020-05-06 16:05:21
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 15:21:59
 * @Description: 
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('spa', { user: state => state.spaState.user }),
  },
}
</script>

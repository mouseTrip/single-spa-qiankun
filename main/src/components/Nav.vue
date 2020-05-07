<!--
 * @Author: 张天昊
 * @Date: 2020-05-07 11:07:41
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 14:47:34
 * @Description:
 -->
<template>
  <Menu
    mode="horizontal"
    theme="dark"
    active-name="vue"
    @on-select="handleMenuChange"
  >
    <MenuItem name="vue">
      Vue
    </MenuItem>
    <MenuItem name="react">
      React
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  methods: {
    onRouteChange(state, title, url) {
      if (window.location.pathname === url) {
        return
      }
      window.history.pushState(state, title, url)
    },
    handleMenuChange(name) {
      this.onRouteChange(null, name, `/${name}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-nav {
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

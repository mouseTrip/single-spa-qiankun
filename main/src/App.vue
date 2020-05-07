<template>
  <div id="main-app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Layout>
      <Header>
        <div class="layout__header">
          <Nav />
        </div>
      </Header>
      <Content>
        <div class="layout__content">
          <div id="sub-app-container"></div>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapState } from 'vuex'
export default {
  components: {
    Nav,
  },
  computed: {
    ...mapState({ spa: state => state.spa }),
  },
  watch: {
    spa(newVal) {
      if (newVal.msg) {
        this.$Message.info(newVal.msg)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout {
  &__header {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__content {
    height: calc(100vh - 64px);
  }
}
#sub-app-container {
  width: 100%;
  height: 100%;
}
</style>

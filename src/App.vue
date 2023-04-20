<template>
  <div id="app">
    <Head @posternOn="posternOnFun"></Head>
    <!-- 占位符 -->
    <router-view></router-view>
    <Bottom></Bottom>
    <PosternPopWindow v-if="posternIsOn" @closePostern = "closePosternFun"></PosternPopWindow>
  </div>
</template>

<script>
import Head from '@/components/head/Head.vue'
import Bottom from '@/components/bottom/Bottom.vue'
import PosternPopWindow from './components/head/PosternPopWindow.vue'

export default {
  name: 'App',
  data() {
    return {
      // 从子组件Postern传来的postern状态值
      posternIsOn: false
    }
    
  },
  methods: {
    posternOnFun(state) {
      if(state) {
        this.posternIsOn = state
      }
    },
    closePosternFun(state) {
      if(!state) {
        this.posternIsOn = state
      }
    }
  },
  components: {
    Head,
    Bottom,
    PosternPopWindow,
  }
}
</script>

<style scoped>
</style>

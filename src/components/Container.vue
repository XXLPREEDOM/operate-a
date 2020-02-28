<template>
  <el-container class="layout">
    <el-header class="header">
        <Header></Header>
    </el-header>
    <el-container>
      <el-aside>侧边栏</el-aside>
      <el-container>
        <el-main>
          <!-- 内容部分 -->
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from './layout/Header'
import Main from './Main'
export default {
  name: 'Container',
  components: { Header, Main },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.layout .el-header{
  padding: 0;
  background-color:#161F2A;
}
</style>

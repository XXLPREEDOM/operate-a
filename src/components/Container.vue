<template>
  <el-container class="layout">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside style="width:200px;">
        <NavBar></NavBar>
      </el-aside>
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
import NavBar from './layout/siderBar'
export default {
  name: 'Container',
  components: { Header, Main, NavBar },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.layout {
  overflow: hidden;
  height: calc(100vh);
  background-color: white;
}
.layout .el-header {
  padding: 0;
  background-color: #161f2a;
}

.el-aside {
  background: #292b3b;
  color: #333;
  /* text-align: center; */
  box-sizing: border-box;
  overflow: hidden;
}
</style>

<!-- -->
<template>
  <div>
    <el-col :span="12">
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        background-color="#292b3b"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/HomePage">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="/EnterpriseMange">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>企业管理</span>
          </template>
          <el-menu-item index="/EnterpriseMange/EnterpriseMgt">企业信息</el-menu-item>
          <el-menu-item index="/EnterpriseMange/EnterpriseUser">企业用户</el-menu-item>
          <el-menu-item index="/EnterpriseMange/EnterpriseApplication">企业应用</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
            <i class="el-icon-location"></i>
            <span>应用模板管理</span>
        </el-menu-item>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>运营看板</span>
          </template>
          <el-menu-item index="">管理员日志</el-menu-item>
        </el-submenu>

      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () {},
  mounted () {},
  activited () {},
  update () {},
  beforeRouteUpdate () {},
  methods: {

  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style scoped>
.el-menu {
  width: 200px;
}
</style>

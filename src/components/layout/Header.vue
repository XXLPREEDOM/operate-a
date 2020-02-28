<template>
  <div class="headerContainer">
    <div class="headerLogo flex-s-b">
      <div class="logo bd-g"></div>
      <div class="title">管理中心</div>
      <div class="icon flex-j-a">
        <i
          class="el-icon-s-unfold"
          style="font-size:26px;cursor: pointer;"
        ></i>
      </div>
    </div>
    <div class="headerUser">
      <div class="userContent">
        <div><i
            class="el-icon-user-solid"
            style="font-size:26px;cursor: pointer;"
          ></i></div>
        <div style="margin-left:15px;">{{username}}</div>
        <div><i
            class="el-icon-close"
            style="font-size:26px;cursor: pointer;margin-left:60px;"
            @click="handleLogout"
          ></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data () {
    return {
      username: ''
    }
  },
  created () {
    const username = window.localStorage.getItem('username')
    this.username = username
  },
  mounted () {},
  activited () {},
  update () {},
  beforeRouteUpdate () {},
  methods: {
    handleLogout () {
      window.localStorage.removeItem('username')
      this.$router.push('/login')
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style scoped>
.headerContainer {
  color: white;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  height: 60px;
}
.headerLogo {
  background: #292b3b;
  width: 200px !important;
  box-sizing: border-box;
  padding: 0 10px;
}
.headerLogo .logo {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.headerLogo .icon {
  height: 30px;
  width: 30px;
}

.headerUser {
  height: 60px;
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
}
.headerUser .userContent {
  height: 100%;
  width: 210px;
  display: flex;
  align-items: center;
}
</style>

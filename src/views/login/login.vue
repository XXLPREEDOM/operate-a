<template>
  <div class="flex-j-a container">
    <el-form autocomplete="on" class="login-form" :model="loginForm" :rules="loginRule" ref="loginForm">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item prop="username">
        <el-input name="username" type="text"  autoComplete="on" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="" type="password"  autoComplete="on" placeholder="请输入密码" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin('loginForm')" style="width:100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRule: {
        username: {
          required: true,
          message: '此项为必填项'
        },
        password: {
          required: true,
          message: '此项为必填项'
        }
      }
    }
  },
  methods: {
    handleLogin (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          if (this.loginForm.password === '123') {
            window.localStorage.setItem('username', this.loginForm.username)
            this.$router.push('/homePage')
          } else {
            this.$message({
              type: 'error',
              message: '密码错误'
            })
          }
        } else {
          return false
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
}
.container>>>.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
}
.container>>>.el-input{
  display: inline-block;
  height: 47px;
}

.container>>>.el-input input {
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
}

.login-form{
  height: 300px;
  width: 600px;
}

.login-title {
  font-size: 26px;
  font-weight: 400;
  color: gainsboro;
  margin: 0 auto 20px;
  text-align: center;
  font-weight: bold;
}

</style>

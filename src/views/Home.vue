<template>
  <div class="">
    首页12213
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  beforeCreate: function () {
    const login = window.localStorage.getItem('login')
    // console.log(typeof (login))
    if (login == null || login === undefined) {
      this.$router.push('login')
    }
  },
  methods: {
    loginOut () {
      window.localStorage.removeItem('login')
      this.$router.push('login')
    }
  },
  components: {
  }
}
</script>

<style lang="stylus"></style>

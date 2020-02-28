<!-- -->
<template>
  <div>
    首页
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  beforeCreate () {
    const username = window.localStorage.getItem('username')
    if (username === null || username === undefined) {
      this.$router.push('login')
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
</style>

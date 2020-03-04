<!--
1.container容器的子组件；内容部分的父组件；
2.内容部分的容器，通过当前的路由将页面加载到这个组件下面；
-->
<template>
  <div>
    <router-view name="mainRouter"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () {
    console.log(213)
    console.log(this.$route.path)
  },
  mounted () {
    this.$router.push(this.$route.path)
  },
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

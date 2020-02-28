<!-- -->
<template>
  <div style="border-top: 1px solid #474b66;">
    <el-row class="tac">
      <el-col>
        <el-menu
          id="navBar"
          background-color="#292b3b"
          text-color="#ffffffb3"
          active-text-color="white"
          :default-active="defaultActive"
        >
          <template v-for="parentRouter in menus">
            <el-menu-item
              :class="isActiveClass[parentRouter.name] ? 'activeClass' : 'noActiveClass'"
              class="siderbar"
              v-if="parentRouter.childrens.length === 0"
              :index="parentRouter.name"
              :key="parentRouter.name"
              @click='jumpTo(parentRouter.path)'
            >
              <i
                :class="'iconfont ' + icon[parentRouter.name]"
                class="menuIcon"
              ></i>
              <span
                slot="title"
                class="menu_leve1"
              >{{parentRouter.title}}</span>
            </el-menu-item>
            <el-submenu
              v-else
              :index="parentRouter.name"
              :key="parentRouter.name"
            >
              <template slot="title">
                <i
                  :class="'iconfont ' + icon[parentRouter.name]"
                  class="menuIcon"
                ></i>
                <span
                  slot="title"
                  class="menu_leve1 siderbar"
                >{{parentRouter.title}}</span>
              </template>
              <el-menu-item-group title="">
                <el-menu-item
                  :class="isActiveClass[childRouter.name] ? 'activeClass' : 'noActiveClass'"
                  v-for="childRouter in parentRouter.childrens"
                  :index="childRouter.name"
                  :key="childRouter.name"
                  @click='jumpTo(childRouter.path)'
                >
                  <i
                    :class="icon[childRouter.name]"
                    class="menuIcon"
                  ></i>
                  <span class="siderbar">{{childRouter.title}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  props: {},
  data () {
    return {
      defaultActive: '',
      menuList: [],
      icon: {
        HomePage: 'iconhome',
        EnterpriseMange: 'iconqiyegl',
        AppTemplateMgt: 'iconyingymbgl',
        OperationManage: 'iconyunykb',
        SystemManage: 'iconxitgli',
        EnterpriseMgt: 'el-icon-postcard',
        EnterpriseDBUpgrade: 'el-icon-coin',
        EnterpriseUser: 'el-icon-user',
        EnterpriseApplication: 'el-icon-menu',
        AdminAuditLog: 'el-icon-finished',
        UserOperationLog: 'el-icon-mouse',
        PlatformUserManage: 'el-icon-user'
      },
      isActiveClass: {}
    }
  },
  created () {
    var routers = this.$router.options.routes[2].children
    this.menuList = routers
    // console.log(this.menuList)
    this.defaultActive = this.$route.name
  },
  mounted () {},
  methods: {
    jumpTo (to) {
      this.$router.push(to)
    }
  },
  computed: {
    menus: function () {
      var menuList = this.menuList
      var parent = []
      var newMenus = []
      // 获取父目录
      for (var m = 0; m < menuList.length; m++) {
        const parentPaths = menuList[m].path.split('/')
        const parentPath = parentPaths[1]
        const parentIndex = parent.indexOf(parentPath)
        // 过滤掉 CurrentUser
        if (parentIndex === -1 && parentPath !== 'CurrentUser') {
          // 不存在
          // 父目录
          parent.push(parentPath)
          menuList[m].childrens = []
          newMenus.push(menuList[m])
          this.$set(this.isActiveClass, menuList[m].name, false)
        }
      }
      // 获取子目录
      for (var n = 0; n < menuList.length; n++) {
        const paths = menuList[n].path.split('/')
        const parentPath = paths[1]
        const parentIndex = parent.indexOf(parentPath)
        if (paths.length === 3 && parentPath !== 'CurrentUser') {
          // 添加子目录
          newMenus[parentIndex].childrens.push(menuList[n])
          this.$set(this.isActiveClass, menuList[n].name, false)
        }
      }
      return newMenus
    }
  },
  watch: {}
}
</script>

<style scoped>
#navBar .is-active {
  background-color: #2f9ffa !important;
  color: white !important;
}
</style>

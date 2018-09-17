<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="300px" class="aside" v-if="hidden">
      <div class="home-logo">
      </div>
      <!-- 个人信息 -->
      <div class="information">
        <!-- 上传头像 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span class="name">{{user}}</span>
        <span class="department">{{duty}}</span>
      </div>
      <!-- 侧边导航菜单 -->
      <el-menu
        default-active="2"
        class="left-menu"
        :router="true">
        <el-submenu index="/policy">
          <template slot="title">
            <span>保险管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/policy">保单管理</el-menu-item>
            <el-menu-item index="/policy/add">新增保单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <!-- 导航栏 -->
        <div class="left-nav">
        <el-row>
          <!-- 左侧 -->
          <el-col :span="15">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#03a9f4"
              text-color="#fff"
              active-text-color="fff"
              :router="true">
              <el-menu-item index="/" @click="handeleDisplay"><i class="iconfont my-icon-liebiao" v-if="hidden"></i><i class="iconfont my-icon-56" v-if="leftIcon"></i></el-menu-item>
              <el-menu-item index="/"><i class="iconfont my-icon-fangzihouse128"></i></el-menu-item>
              <el-menu-item index="/policy">保单管理</el-menu-item>
              <el-menu-item index="/organization">保险机构</el-menu-item>
              <el-menu-item index="/product">产品信息</el-menu-item>
              <!-- <el-menu-item  @click="handleApplication">更多应用</el-menu-item> -->
              <li role="menuitem" @click="handleApplication" tabindex="0" class="el-menu-item is-active" style="color: rgb(255, 255, 255); border-bottom-color: transparent; background-color: rgb(3, 169, 244);">更多应用</li>
            </el-menu>
            <el-row :gutter="24">
              <el-col :span="10" :offset="4">
                <el-card class="apply-card" v-if=" moreApply">
                  <el-row>
                      <el-col :span="6">
                        <div @click="handlePersonnel"><i class="iconfont my-icon-icon-"></i><span>人员管理</span></div>
                      </el-col>
                      <el-col :span="6">
                        <div @click="handelClient"><i class="iconfont my-icon-kehuguanli"></i><span>客户管理</span></div>
                      </el-col>
                      <el-col :span="6">
                        <div @click="handelStatistics"><i class="iconfont my-icon-jixiaokaoheqia"></i><span>统计管理</span></div>
                      </el-col>
                      <el-col :span="6">
                        <div @click="handleFramework"><i class="iconfont my-icon-Management"></i><span>架构管理</span></div>
                      </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
          <!-- 右侧 -->
          <el-col :span="9">
            <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#03a9f4"
            text-color="#fff"
            :router="true">
            <el-menu-item index="/" class="mr-nav"><i class="iconfont my-icon-sousuo"></i></el-menu-item>
            <el-menu-item index="/"><i class="iconfont my-icon-shouji"></i></el-menu-item>
            <el-menu-item index="/"><i class="iconfont my-icon-c"></i></el-menu-item>
            <el-menu-item index="/" @click="handleExit"><i class="el-icon-circle-close-outline"></i></el-menu-item>
          </el-menu>
          </el-col>
        </el-row>
        </div>
      </el-header>
      <!-- 主体部分 -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      // 导航栏的隐藏与显示
      hidden: true,
      // 小图标切换
      leftIcon: false,
      // 更多应用
      moreApply: false,
      // 上传头像
      imageUrl: '',
      // 用户信息
      user: '赵俊凯',
      duty: '副总经理'
    }
  },
  methods: {
    // 隐藏/显示左侧导航栏
    handeleDisplay: function () {
      this.hidden = !this.hidden
      this.leftIcon = !this.leftIcon
    },
    // 退出
    handleExit: function () {
      this.$router.push({
        name: 'login'
      })
    },
    // 更多应用
    handleApplication: function () {
      this.moreApply = !this.moreApply
    },
    // 跳转到人员管理
    handlePersonnel: function () {
      this.$router.push({
        name: 'personnel'
      })
    },
    // 跳转到客户管理
    handelClient: function () {
      this.$router.push({
        name: 'client'
      })
    },
    // 跳转到统计管理
    handelStatistics: function () {
      this.$router.push({
        name: 'statistics'
      })
    },
    // 跳转到架构管理
    handleFramework: function () {
      this.$router.push({
        name: 'framework'
      })
    }
  }
}
</script>

<style>
.container {
  height: 100%;
}
/* 头部 */
.header {
  background-color: #03a9f4;
}
.apply-card {
  position: relative;
  z-index: 1000000000!important;
}
.el-card__body {
  padding: 0%!important
}
/* 更多应用 */
.apply-card div {
  font-size: 14px;
  text-align: center;
}
.apply-card div span {
  display: block;
}
/* 图标 */
.my-icon-sousuo,.my-icon-shouji, .my-icon-c,.el-icon-circle-close-outline,.my-icon-liebiao,.my-icon-fangzihouse128,.my-icon-56{
  color: #fff !important;
}
.my-icon-icon-,.my-icon-kehuguanli,.my-icon-jixiaokaoheqia,.my-icon-Management{
  font-size: 30px!important;
}
.my-icon-icon- {
  color: #3bce94
}
.my-icon-kehuguanli {
  color: #fc7632
}
.my-icon-jixiaokaoheqia {
  color: #ff7575
}
.my-icon-Management {
  color: #106cba;
}
.my-icon-56,.my-icon-liebiao {
  position: absolute;
}
/* 侧标栏 */
.aside {
  background-color: #ffffff;
  line-height: 60px;
  text-align: center
}
.home-logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  background-color: #03a9f4;
}
.information {
  /* text-align: center; */
  position: relative;
  height: 150px;
}
/* 上传头像 */
.avatar-uploader .el-upload {
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 50px;

  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  /* 个人信息 */
  .information .name {
    color: #000;
    position: absolute;
    left: 140px;
    top: 40px;
  }
  .information .department {
    color: #000;
    position: absolute;
    left: 140px;
    top: 70px;
  }
  .portal {
    color: #000;
    text-align: center
  }
/* 侧边导航 */
.broadside {
  text-align: center
}
.main {
  background-color: #f7f7f7;
  height: 100%;
  padding: 0%!important;
}
.broadside .el-menu-demo i {
  margin-right: 10px !important;
}
/* 主体部分 */
.top,.second-line,.third-line,.third-path,.fourth-line{
  height: 265px;
  padding: 5px;
  margin-bottom: 10px;
}
.carousel{
  height: 265px;
}
</style>

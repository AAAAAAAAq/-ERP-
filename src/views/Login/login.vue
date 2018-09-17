<template>
  <div class="login-wrap" :style ="note">
    <div class="login-border">
      <el-tabs v-model="activeName" class="login-tabs">
        <el-tab-pane label="用户密码" name="first">
          <el-form label-position="left" label-width="80px" :model="loginFormData" class="login-form">
            <el-form-item label="用户名：">
              <el-input v-model="loginFormData.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input type="password" v-model="loginFormData.passworfd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="短信验证码" name="second">
          <el-form label-position="left" label-width="80px" :model="loginFormData" class="login-form">
            <el-form-item label="手机号">
              <el-input v-model="loginFormData.phoneNum"></el-input>
            </el-form-item>
            <el-form-item label="验证码:">
              <el-input v-model="loginFormData.authCode"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="第三方授权登录" name="third">
          <img src="../../assets/img/QQ.png" alt="" class="qq-pic">
          <img src="../../assets/img/wx.png" alt="" class="wx-pic">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 背景图
      note: {
        backgroundImage: 'url(' + require('../../assets/img/login.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '5px'
      },
      // Tabs标签页
      activeName: 'first',
      // 表单数据
      loginFormData: {
        userName: '',
        passworfd: '',
        phoneNum: '',
        authCode: ''
      }
    }
  },
  methods: {
    handleLogin: function () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
  .login-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .login-border {
    background-color: #fff;
    width: 15%;
    height: 40%;
    position: absolute;
    top:20%;
    left: 60%;
    padding: 40px
  }
  .login-tabs {
    padding: 10px;
  }
  .login-form {
    margin-top: 20px;
  }
  .qq-pic, .wx-pic {
    width: 100px;
    height: 100px;
    margin: 30px;
  }
</style>

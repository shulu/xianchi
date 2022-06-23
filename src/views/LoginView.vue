<template>
  <div class="login">
    <div class="title">登录</div>
    <div class="user">
      <label for="#username">用户名:</label>
      <input type="text"
             name=""
             class="username input"
             id="username"
             placeholder="输入账号"
             v-model="username">
    </div>
    <div class="pwd">
      <label for="password">密码:</label>
      <input type="password"
             name=""
             class="password input"
             id="password"
             placeholder="输入密码"
             v-model="password">
    </div>
    <div class="login-btn">
      <button class="btn"
              @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
  },
  methods: {
    ...mapActions(['LOGIN']),
    login() {
      let username = this.username
      let password = this.password
      if (!username) {
        window.alert('用户名不能为空')
        return false
      }
      if (!password) {
        window.alert('密码不能为空')
        return false
      }
      let params = {
        account: username,
        password: password,
        deviceId: '355c4547ba2f4b218a135fcc22a0e54c',
        appType: 'IOS'
      }
      console.log('login params', params)
      this.LOGIN(params)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.login {
  border: 2px solid #f37626;
  margin: auto;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 44rem;
  height: 24rem;

  .title {
    font-size: 2.5rem;
    margin-top: 1rem;
    font-weight: 800;
  }

  .user,
  .pwd {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .input {
    border: 1px solid lightgray;
    border-radius: 1rem;
    margin: 1rem;
    width: 28rem;
    height: 3.5rem;
  }

  label {
    font-size: 1.5rem;
    font-weight: 500;
  }

  button {
    width: 8rem;
    height: 4rem;
    border: none;
    background-color: #f37626;
    color: #fff;
    border-radius: 1rem;
    margin-top: 1rem;
  }
}
</style>
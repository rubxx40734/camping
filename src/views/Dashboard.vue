<template>
  <Navbar class=""></Navbar>
  <div class="container-fluid position-relative setting">
    <router-view></router-view>
  </div>
  <ToastList></ToastList>
</template>
<style>
.setting{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
<script>
import Navbar from '../components/Navbar.vue'
import emitter from '../methods/emitter.js'
import ToastList from '../components/ToastList.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Navbar,
    ToastList
  },
  provide () {
    return {
      emitter
    }
  },
  async created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    const checkLogin = await this.axios.post(api)
    if (!checkLogin.data.success) {
      this.$router.push('/login')
    }
  }
}
</script>

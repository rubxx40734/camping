<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/dashboard/products" class="nav-link active" aria-current="page">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/orders" class="nav-link active" aria-current="page">訂單管理</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/coupons" class="nav-link active" aria-current="page">優惠券</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="Logout">登出</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    async Logout () {
      const api = `${process.env.VUE_APP_API}logout`
      const result = await this.axios.post(api)
      if (result.data.success) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

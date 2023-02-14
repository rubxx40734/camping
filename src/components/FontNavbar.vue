<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary navbar-light">
  <div class="container-fluid d-flex justify-content-between">
    <div class="me-7">
      <a class="navbar-brand navbartitle fs-2 ff-p" href="#">City Camping</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-25 " id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <router-link to="/" class="nav-link fw-bold text-primary listhover hightSetting">首頁</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/fontproducts" class="nav-link fw-bold text-primary listhover hightSetting">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/carts" class="nav-link fw-bold text-primary listhover hightSetting">購物車<span v-if="cartLength!== 0">({{ cartLength }})</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/coupongame" class="nav-link fw-bold text-primary listhover hightSetting">折扣</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link fw-bold text-primary listhover hightSetting">關於我們</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
.listhover:hover{
  border-bottom: 3px solid #347E87;
}
.hightSetting{
  height: 45px;
}
</style>

<script>
export default {
  data () {
    return {
      cartLength: 0
    }
  },
  methods: {
    async getCartlist () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const result = await this.axios.get(api)
      console.log(result.data.data)
      this.cartLength = result.data.data.carts.length
    }
  },
  mounted () {
    this.getCartlist()
  }
}
</script>

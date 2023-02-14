<template>
    <FontNavbar ref="fontnav" class="mb-7"></FontNavbar>
    <div class="container mb-7">
        <div class="row d-flex justify-content-center mb-7">
          <div class="col-12 col-md-8 d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">確認購物車</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">訂購資訊</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">確認結帳</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">訂購成功</p>
              </div>
          </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <p class="fw-bold mb-3 fs-3 mt-5">商品清單</p>
                <div class="card mb-3" v-for="item in products" :key="item.id">
                    <div class="row g-0">
                      <div class="col-md-6">
                        <img :src="item.product.imageUrl" class="h-200 img-fluid rounded-start card-img bgCover" alt="...">
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.product.title }}</h5>
                            <p class="card-text">數量:{{ item.qty }}</p>
                            <p class="card-text mb-7"><small class="text-muted">售價NT$ {{$filter.currency(item.product.price)}}</small></p>
                            <p class="card-text">總價NT$ {{ $filter.currency(item.final_total) }}</p>
                        </div>
                     </div>
                    </div>
                </div>
                <h2 class="text-end">總金額NT$ {{ $filter.currency(totalPrice) }}</h2>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <p class="fw-bold mb-3 fs-3 mt-5">訂購人資訊</p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" disabled v-model="user.name">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="text" class="form-control" disabled v-model="user.email">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Tel</label>
                    <input type="text" class="form-control" disabled v-model="user.tel">
                </div>
                <div class="mb-7">
                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                    <input type="text" class="form-control" disabled v-model="user.address">
                </div>
                <div class="text-end">
                    <button type="button" class="btn btn-outline-warning"
                     @click="gotoBuyform">取消</button>
                    <button type="button" class="btn btn-outline-primary ms-3"
                    @click="surePay">確認付款</button>
                </div>
            </div>
        </div>
    </div>

    <div class="connection bg-secondary p-6 d-flex flex-column align-items-center mb-5">
      <div class="phone d-xl-flex d-block justify-content-between mb-4">
        <p class="text-success fw-bold me-2">| 客服時間： Mon - Fri 09:30-12:00 13:00-17:30（例假日官網客服無法及時回覆，敬請見諒）</p>
        <p class="text-success fw-bold me-2">| 客服專線：02-2999-9520</p>
        <p class="text-success fw-bold me-2">| 信箱：bill.cheng#taidoc.com.tw</p>
      </div>
      <div class="community d-flex">
        <a href="#" class="d-block"><i class="bi bi-facebook fs-3 me-3"></i></a>
        <a href="#" class="d-block"><i class="bi bi-instagram fs-3 me-3"></i></a>
        <a href="#" class="d-block"><i class="bi bi-line fs-3 me-3"></i></a>
        <a href="#" class="d-block"><i class="bi bi-youtube fs-3"></i></a>
      </div>
    </div>
    <p class="text-center text-success">Copyright © 2023 Coleman Taiwan All Rights Reserved.</p>
    <p class="text-center text-success mb-4">此網站為練習作品，無任何商業用途</p>
</template>

<style lang="scss">
.step1{
  background-color: #ff9235;
}
.circle{
  width: 15px;
  height: 15px;
  border: 2px solid gray;
  border-radius: 50%;
}
.progressLine{
  width: 40px;
  height: 1px;
  border: 1px solid #dee2e6;
}
</style>

<script>
import FontNavbar from '../components/FontNavbar.vue'
export default {
  data () {
    return {
      orderId: '',
      products: {},
      user: {},
      totalPrice: 0
    }
  },
  components: { FontNavbar },
  methods: {
    async getOrderdetail () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      const result = await this.axios.get(api)
      console.log(result.data)
      this.products = result.data.order.products
      this.user = result.data.order.user
      this.totalPrice = result.data.order.total
    },
    gotoBuyform () {
      this.$router.push('/fontproducts')
    },
    async surePay () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      const result = await this.axios.post(api)
      console.log(result)
      this.$router.push('/successpay')
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrderdetail()
  }
}
</script>

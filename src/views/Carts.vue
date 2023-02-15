<template>
    <Loading :active="isLoading">
    <div class="loadingio-spinner-spinner-a5v3i0pye0a"><div class="ldio-ifotaor80h">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
    <FontNavbar ref="fontnav"></FontNavbar>

     <!-- // 購物車畫面 -->
    <div class="container mt-7 d-flex flex-column" v-if="carts.total">
        <div class="row d-flex justify-content-center mb-7">
          <div class="col-12 col-md-8 d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">確認購物車</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">訂購資訊</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">確認結帳</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">訂購成功</p>
              </div>
          </div>
        </div>
        <!-- // 電腦板顯示的購物車 -->
        <div class="d-none d-md-block">
          <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">商品圖片</th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">數量</th>
                  <th scope="col">售價</th>
                  <th scope="col">小計</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in carts.carts" :key="item.id">
                  <th>
                    <img :src="item.product.imageUrl" alt=""
                     class="bgCover card-img smimg">
                  </th>
                  <td>{{ item.product.title }}</td>
                  <td>
                    <input type="number" class="form-control w-50" min="1"
                     v-model="item.qty" @change='updateCart(item)'
                     :disabled="loadingItem == item.product_id">
                  </td>
                  <td>{{ $filter.currency(item.product.price) }}</td>
                  <td>
                    <p>NT$ {{ $filter.currency(item.total) }}</p>
                    <p class="text-primary fw-bold" v-if="couponStatus">折扣價 NT$ {{ $filter.currency(item.final_total) }}</p>
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger" @click="deleteProduct(item.id)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
           </table>
        </div>
         <!-- // 手機板 -->

         <div class="row border d-flex align-items-center mb-5 d-block d-md-none"
          v-for="item in carts.carts" :key="item.id">
          <div class="col-6">
            <img :src="item.product.imageUrl" alt=""
                   class="bgCover card-img phoneimg">
          </div>
          <div class="col-6">
            <p class="mb-2 fw-bold">{{ item.product.title }}</p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">數量</span>
              <input type="number" class="form-control" min="1"
                   v-model="item.qty" @change='updateCart(item)'
                   :disabled="loadingItem == item.product_id">
            </div>
            <p class="mb-2">售價: NT$ {{ $filter.currency(item.product.price) }}</p>
            <p class="mb-2">小計: NT$ {{ $filter.currency(item.total) }}</p>
            <p class="text-primary fw-bold" v-if="couponStatus">折扣價 NT$ {{ $filter.currency(item.final_total) }}</p>
            <button type="button" class="btn btn-danger" @click="deleteProduct(item.id)">
                    <i class="bi bi-trash3"></i>
            </button>
          </div>
         </div>

         <h1 class="fs-4 text-end mt-5">總金額 NT$ {{ $filter.currency(carts.total) }}</h1>
         <h1 class="fs-2 fw-bold text-primary text-end mt-5 mb-5" v-if="couponStatus">折扣價 NT$ {{ $filter.currency(carts.final_total) }}</h1>
         <p class="text-danger text-end fw-bold" v-if="!couponStatus">{{ couponMessage }}</p>
         <div class="input-group mb-3 text-end couponWidth align-self-end mt-3">
           <input type="text" class="form-control" placeholder="輸入折扣碼" v-model="couponCode"
            aria-label="Example text with button addon" aria-describedby="button-addon1">
           <button class="btn btn-outline-primary" @click="sendCoupon"
            type="button" id="button-addon1">確定</button>
        </div>
    </div>
     <!-- // 購物車沒東西畫面 -->
    <div class="container mt-7 d-flex flex-column align-items-center bg-secondary py-7 mb-7"
    v-else>
      <h1 class="fw-bold text-center mb-5">購物車是空的喔</h1>
      <img src="../assets/productImg/cart.jpg"
       class="card-img bgCover w-100 mb-5 h-420" alt="">
      <router-link to="/fontproducts" class="btn btn-primary">購物去</router-link>
    </div>

    <div class="container mb-7 mt-7">
      <h3 class="text-success fw-bold text-center mb-7 fs-2">猜您喜歡...</h3>
      <div class="row">
        <div class="col-lg-3 col-12 col-md-6 box border border-3 px-5 mb-5 mb-md-0" v-for="item in hotProducts" :key="item.id">
          <img :src="item.imageUrl" @click="gooneproduct(item.id)" alt="newProduct" class="bgCoverBottom card-img h-200  mb-5 cover-fit w-100">
          <p class="text-success text-center mb-3">{{item.title}}</p>
          <div class="d-md-flex d-block justify-content-between">
            <p class="text-success text-center mb-3 d-none d-md-block text-center"><del>NT ${{$filter.currency(item.origin_price)}}</del></p>
            <p class="text-success text-center mb-3">NT ${{$filter.currency(item.price)}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-7 text-center">
      <button type="button" class="btn btn-outline-warning me-3">
        <router-link to="/fontproducts" class="nav-link fw-bold">繼續購物</router-link>
      </button>
      <button type="button" class="btn btn-outline-primary" :disabled="!carts.total">
        <router-link to="/buyform" class="nav-link fw-bold">填寫訂購資訊</router-link>
      </button>
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
@import '../assets/helpers/loading.scss';
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
.smimg{
  width: 180px;
  height: 100px;
}
.phoneimg{
  width: 100%;
  height: 250px;
}

</style>

<script>
import FontNavbar from '../components/FontNavbar.vue'
export default {
  data () {
    return {
      hotProducts: [],
      carts: {},
      productQty: 0,
      loadingItem: '',
      isLoading: false,
      couponCode: '',
      couponStatus: false,
      couponMessage: ''
    }
  },
  components: { FontNavbar },
  methods: {
    async getCartlist () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const result = await this.axios.get(api)
      this.$refs.fontnav.getCartlist()
      console.log(result.data.data)
      this.isLoading = false
      this.carts = result.data.data
    },
    async gethotProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      const result = await this.axios.get(api)
      const allProduct = result.data.products
      allProduct.forEach(item => {
        if (item.productRule5 === '熱銷') {
          this.hotProducts.push(item)
        }
      })
    },
    gooneproduct (id) {
      console.log(id)
      this.$router.push(`oneproduct/${id}`)
    },
    async updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.loadingItem = item.product_id
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      const result = await this.axios.put(api, { data })
      console.log(result)
      this.loadingItem = ''
      this.getCartlist()
    },
    async deleteProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      const result = await this.axios.delete(api)
      console.log(result)
      this.getCartlist()
    },
    async sendCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.couponCode
      }
      const result = await this.axios.post(api, { data })
      console.log(result)
      this.couponStatus = result.data.success
      this.couponMessage = result.data.message
      this.getCartlist()
    }
  },
  mounted () {
    this.getCartlist()
    this.gethotProduct()
  }
}
</script>

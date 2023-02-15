<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spinner-a5v3i0pye0a"><div class="ldio-ifotaor80h">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
    <FontNavbar class="mb-6" ref="fontnav"></FontNavbar>
    <div class="container bgbanner mb-5" id="title">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-5 mb-md-0">
                <div class="list-group">
                    <button type="button" @click="filterproducts"
                     :class="{'bg-primary': category == '全部商品'}"  class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action" aria-current="true">
                        全部商品
                    </button>
                    <button type="button" :class="{'bg-primary': category == '帳篷'}" @click="changetent"
                     class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action">帳篷</button>
                    <button type="button" :class="{'bg-primary': category == '露營裝備'}" @click="changeeq"
                     class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action">露營裝備</button>
                    <button type="button" :class="{'bg-primary': category == '露營燈具'}" @click="changeray"
                     class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action">露營燈具</button>
                    <button type="button" :class="{'bg-primary': category == '野炊'}" @click="changecook"
                     class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action">野炊</button>
                    <button type="button" :class="{'bg-primary': category == '天幕'}" @click="changesky"
                     class="list-group-item fw-bold fs-5 mb-2 btn btn-primary list-group-item-action">天幕</button>
                </div>
            </div>
            <div class="col-md-9">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col mb-7" v-for="item in filterProducts" :key="item.id">
                    <div class="card h-100 position-relative">
                      <div class="position-relative hoverdetail">
                        <button type="button" @click="gooneproduct(item.id)" class="btn btn-primary w-25 position-absolute top-50 start-50  translate-middle d-hover">
                          <i class="bi bi-search"></i>
                        </button>
                        <img :src="item.imageUrl" class="card-img-top card-img bgCover h-200 w-100 mb-3" alt="">
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-center mb-4">{{ item.title }}</h5>
                        <div class="priceset d-flex justify-content-between mb-3">
                          <div class="orprice"><p><del>NT$ {{ $filter.currency(item.origin_price) }}</del></p></div>
                          <div class="saleprice">NT$ {{ $filter.currency(item.price) }}</div>
                        </div>
                      </div>
                      <div class="card-footer bg-light">
                        <div class="text-end">
                          <button type="button" :disabled="loadingItem == item.id"
                          class="btn btn-primary" @click="addcart(item.id)">
                          <div v-if="loadingItem ==  item.id" class="spinner-border spinner-border-sm text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>加入購物車</button>
                        </div>
                      </div>
                      <p class="position-absolute top-0 start-0 badge rounded-pill bg-danger">{{ item.productRule5 }}</p>
                    </div>
                  </div>
                </div>
                <pagination v-if="this.category == '全部商品'" :page="pagination" @changePage="filterproducts" class="mb-7"></pagination>
            </div>
        </div>
    </div>

  <div class="connection bg-secondary p-6 d-flex flex-column align-items-center mb-4">
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

      <!-- // 加入購物車提示視窗 -->

      <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-footer d-flex justify-content-between">
                <p class="fw-bold"><i class="bi bi-check-circle text-info me-2 fs-4"></i>加入購物車成功</p>
                <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
        </div>
     </div>
</template>
<style lang="scss">
@import '../assets/helpers/loading.scss';
.bgbanner{
    height: 500px;
    background-image: url('https://oscar55107.github.io/fireman/img/product-tent.2a2d2c8d.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover cover;
}
.hoverdetail:hover img{
  background-color: white;
  opacity: 0.3;
}
.d-hover{
  display: none;
  z-index: 99;
}
.hoverdetail:hover .d-hover{
  display: block;
}
</style>

<script>
import FontNavbar from '../components/FontNavbar.vue'
import pagination from '../components/Pagination.vue'
import Modal from 'bootstrap/js/dist/modal.js'
export default {
  data () {
    return {
      modal: {},
      isLoading: false,
      allProducts: [],
      filterProducts: [],
      category: '全部商品',
      pagination: {},
      loadingItem: ''
    }
  },
  methods: {
    async getallproducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      const result = await this.axios.get(api)
      console.log('all', result.data)
      this.allProducts = result.data.products
      this.isLoading = false
    },
    async filterproducts (page = 1) {
      // 這邊是指定到網頁位置
      this.category = '全部商品'
      const scrollDiv = document.querySelector('#title').offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.isLoading = true
      const result = await this.axios.get(api)
      console.log('filter', result.data)
      this.filterProducts = result.data.products
      this.pagination = result.data.pagination
      this.isLoading = false
    },
    async gooneproduct (id) {
      this.$router.push(`/oneproduct/${id}`)
      // console.log(id)
    },
    async addcart (id) {
      this.loadingItem = id
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const obj = {
        product_id: id,
        qty: 1
      }
      const result = await this.axios.post(api, { data: obj })
      this.loadingItem = ''
      this.$refs.fontnav.getCartlist()
      if (result.data.success) {
        this.modal.show()
      }
      console.log(result)
    },
    async changetent () {
      this.category = '帳篷'
      const filterobject = []
      this.allProducts.forEach(item => {
        if (item.category === '帳篷') {
          filterobject.push(item)
        }
      })
      this.filterProducts = filterobject
    },
    async changeeq () {
      this.category = '露營裝備'
      const filterobject = []
      this.allProducts.forEach(item => {
        if (item.category === '露營裝備') {
          filterobject.push(item)
        }
      })
      this.filterProducts = filterobject
    },
    async changeray () {
      this.category = '露營燈具'
      const filterobject = []
      this.allProducts.forEach(item => {
        if (item.category === '露營燈具') {
          filterobject.push(item)
        }
      })
      this.filterProducts = filterobject
    },
    async changecook () {
      this.category = '野炊'
      const filterobject = []
      this.allProducts.forEach(item => {
        if (item.category === '野炊') {
          filterobject.push(item)
        }
      })
      this.filterProducts = filterobject
    },
    async changesky () {
      this.category = '天幕'
      const filterobject = []
      this.allProducts.forEach(item => {
        if (item.category === '天幕') {
          filterobject.push(item)
        }
      })
      this.filterProducts = filterobject
    }
  },
  components: { FontNavbar, pagination },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    this.getallproducts()
    this.filterproducts()
  }
}
</script>

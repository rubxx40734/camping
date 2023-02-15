<template>
  <FontNavbar></FontNavbar>
  <div class="backVideo position-relative border">
    <img src="https://oscar55107.github.io/fireman/img/banner.2493c812.jpg"
     alt="" class="card-img bgCover d-block d-md-none">
    <video loop="loop" autoplay="autoplay" muted="muted" class="videoSetting d-none d-md-block" >
      <source type="video/mp4" src="https://assets.mixkit.co/videos/preview/mixkit-man-walking-along-an-old-narrow-alley-tracking-27238-large.mp4">
    </video>
    <h1 class="position-absolute top-50 start-50
    text-light fw-bold translate-middle spaceTitle">用露營 看見世界的美好◎</h1>
  </div>
  <div class="container mb-7">
    <div class="row mt-7 mb-7">
      <div class="col">
        <img src="https://i.imgur.com/PQADM8x.jpg" alt="homeimg1" class="bgCoverBottom card-img">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
         <h2 class="text-success fw-bold text-center mb-5 fs-7">露營美學</h2>
         <p class="text-success fw-bold mb-3">
            人應該就待在，沒有天花板的地方 -
         </p>
         <p class="text-success fw-bold mb-3">
            別趕時間，就坐在那裡等時間 -
         </p>
         <p class="text-success fw-bold mb-3">
            在大自然面前，永遠未成年 -
         </p>
         <p class="text-success fw-bold mb-3">
            不是大人給了孩子童年，是孩子在陪大人複習童年 -
         </p>
         <p class="text-success fw-bold mb-3">
            不插電的親子時光，會牢記一輩子 -
         </p>
         <p class="text-success fw-bold mb-3">
            城市裡停不下來的人，到了野外就成了木頭人 -
         </p>
         <p class="text-success fw-bold mb-3">
            離噪音遠了，離白噪音就近了 -
         </p>
      </div>
      <div class="col-md-6">
        <img src="https://i.imgur.com/u1hfLrP.jpg" alt="homeimg2" class="bgCoverBottom card-img h-350">
      </div>
    </div>
  </div>
  <div class="container mb-7">
    <h3 class="text-success fw-bold text-center mb-7 fs-2">本周新品 | NEW ITEM</h3>
    <div class="row">
      <div class="col-lg-3 col-12 col-md-6 box border border-3 px-5 mb-5 mb-md-0" v-for="item in newProducts" :key="item.id">
        <img :src="item.imageUrl" @click="gooneproduct(item.id)" alt="newProduct" class="bgCoverBottom card-img h-200 mb-5 cover-fit w-100">
        <p class="text-success text-center mb-3">{{item.title}}</p>
        <div class="d-md-flex d-block justify-content-between">
          <p class="text-success text-center mb-3 d-none d-md-block text-center"><del>NT ${{$filter.currency(item.origin_price)}}</del></p>
          <p class="text-success text-center mb-3">NT ${{$filter.currency(item.price)}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-7">
    <h3 class="text-success fw-bold text-center mb-7 fs-2">熱銷商品 | HOT ITEM</h3>
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

  <div class="mb-6 d-none d-xl-block">
    <img src="https://i.imgur.com/sgCEcEu.jpg" alt="home3" class="bgCoverBottom card-img h-850">
  </div>
  <div class="mb-6 d-block d-xl-none">
    <img src="https://i.imgur.com/sgCEcEu.jpg" alt="home3" class="bgCoverBottom card-img h-432">
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
</template>

<style>
.videoSetting{
   width: 100%;
   height: 100%;
   object-fit: fill;
}
@keyframes typing {
  from { width: 0 }
}
.spaceTitle {
  width: 11em;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(11)
}
/* //  圖片hover效果 */
.animate__animated.animate__pulse {
  --animate-duration: 4s;
}
.box {
  overflow: hidden;
}
img {
  transition: 0.5s;
}
.box:hover img {
  transform: scale(1.2);
  cursor: pointer;
}
.cover-fit {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
<script>
// @ is an alias to /src
import FontNavbar from '@/components/FontNavbar.vue'

export default {
  data () {
    return {
      newProducts: [],
      hotProducts: []
    }
  },
  components: {
    FontNavbar // make the <FullCalendar> tag available
  },
  methods: {
    async getnewProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      const result = await this.axios.get(api)
      const allProduct = result.data.products
      allProduct.forEach(item => {
        if (item.productRule5 === '新品推薦') {
          this.newProducts.push(item)
        }
      })
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
      this.$router.push(`oneproduct/${id}`)
    }
  },
  mounted () {
    this.getnewProduct()
    this.gethotProduct()
  }
}
</script>

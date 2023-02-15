<template>
  <FontNavbar class="mb-7"></FontNavbar>
  <!-- data-aos="fade-right" data-aos-duration="2000" -->
   <div class="container">
     <h1 class="text-center fw-bold mb-7 text-primary">那些關於我們的故事</h1>
     <div class="row mb-7" data-aos="fade-up" data-aos-duration="2000">
      <div class="col-md-6 mb-5 mb-md-0 ">
          <img src="../assets/productImg/LED1-1.jpeg" alt=""
          class="card-img bgCover h-350">
      </div>
      <div class="col-md-6 mb-5 mb-md-0  d-flex align-items-center">
        <h2 class="fw-bold fs-5">我們是一家專注於露營產品的線上電商，成立於2022年。我們的使命是幫助人們在野外度過最難忘的時光，通過提供高品質且實惠的露營產品。我們的團隊由一群熱愛戶外活動的專業人員組成，他們不斷努力提供最好的露營體驗給我們的客戶。</h2>
      </div>
     </div>

     <div class="row mb-7" data-aos="fade-up" data-aos-duration="2000">
      <div class="col-md-6 mb-5 mb-md-0  d-flex align-items-center order-2  order-md-1">
        <ul>
          <li><h2 class="fw-bold fs-5 mb-5">我們堅信以下幾項核心價值觀是我們成功的關鍵：</h2></li>
          <li class="fw-bold">客戶至上：我們始終以客戶的需求為中心，確保他們能夠享受到最佳的露營體驗。</li>
          <li class="fw-bold">品質保證：我們堅持使用優質的材料製造產品，確保產品符合客戶的期望。</li>
          <li class="fw-bold">環保意識：我們致力於減少對環境的影響，並支持可持續發展。</li>
          <li class="fw-bold">創新精神：我們不斷尋求創新，以提供更好的露營產品和體驗。</li>
          <li class="fw-bold">團隊合作：我們相信團隊合作是成功的關鍵，我們始終在一起努力。</li>
        </ul>
      </div>
      <div class="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
        <img src="../assets/productImg/about2.jpg" alt=""
          class="card-img bgCover h-350">
      </div>
     </div>

     <div class="row mb-7" data-aos="fade-up" data-aos-duration="2000">
      <div class="col-md-6 mb-5 mb-md-0 ">
          <img src="../assets/productImg/about3.jpg" alt=""
          class="card-img bgCover h-350">
      </div>
      <div class="col-md-6 mb-5 mb-md-0  d-flex align-items-center">
        <ul>
          <li><h2 class="fw-bold fs-5 mb-5">我們對未來充滿信心，並有以下幾個明確的規劃：</h2></li>
          <li class="fw-bold">擴大產品線：我們將不斷擴大我們的產品線，以滿足客戶的更多需求。</li>
          <li class="fw-bold">提高客戶服務水平：我們將加強客戶服務，以提供更好的顧客體驗。</li>
          <li class="fw-bold">加強品牌知名度：我們將努力提高我們的品牌知名度，以吸引更多客戶。</li>
          <li class="fw-bold">投資新技術：我們將繼續投資創新技術，以提供更高效、更高品質的產品和服務。</li>
          <li class="fw-bold">建立露營社群：我們將努力建立一個熱愛露營的社群，以分享露營經驗和信息。</li>
        </ul>
      </div>
     </div>
   </div>

   <div class="map bg-secondary">
    <div class="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57821.59895870447!2d121.37273305820315!3d25.07307489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a721c0d6c8fb%3A0x5a1fc3d9b460fab6!2zRnVu6YeO55Sf5rS75oi25aSW6YeO6YG4!5e0!3m2!1szh-TW!2stw!4v1676270238842!5m2!1szh-TW!2stw"
       height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100 mb-5"></iframe>
       <p class="text-center fw-bold">星期一至星期五：上午9時至晚上6時</p>
       <p class="text-center fw-bold">星期六：上午10時至下午5時</p>
       <p class="text-center fw-bold">星期日：休息</p>
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
</template>

<style lang="scss">

</style>

<script>
import FontNavbar from '@/components/FontNavbar.vue'
import AOS from 'aos'
export default {
  data () {
    return {

    }
  },
  components: { FontNavbar },
  mounted () {
    AOS.init()
    console.log(AOS)
  }
}
</script>

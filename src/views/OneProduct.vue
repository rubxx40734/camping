<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spinner-a5v3i0pye0a"><div class="ldio-ifotaor80h">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
    <FontNavbar class="mb-7" id="title" ref="fontnav"></FontNavbar>
    <div class="container mb-7">
        <div class="row justify-content-center">
            <div class="col-md-5 border me-7 h-520 mb-5 mb-md-0">
                <img :src="product.imageUrl" alt=""
                class="card-img bgCover w-100 h-350">
                <!-- <div class="overset"> -->
                  <ul class="d-flex overflowX">
                      <li v-for="(item, index) in product.imagesUrl" :key="index" class="p-3">
                          <a href="#" @click.prevent="changeImg(item)"><img :src="item" alt="" class="smallImg bgCoverBottom card-img"></a>
                      </li>
                  </ul>
                <!-- </div> -->
            </div>
            <div class="col-md-5 h-500">
                <h1 class="mb-6">{{ product.title }}</h1>
                <p class="text-success mb-6">{{ product.content }}</p>
                <p><del>原價NT$ {{$filter.currency(product.origin_price)}}</del></p>
                <p class="fs-2 text-primary mb-6">特價NT$ {{$filter.currency(product.price)}}</p>
                <div class="shoppcart d-flex">
                    <input type="number" name="" v-model="data.qty"
                     placeholder="數量" class="form-control w-25 me-3">
                    <button class="btn btn-primary w-25" @click="addtocarts"
                    :disabled="productId !== ''">
                      <div v-if="productId !== ''" class="spinner-border spinner-border-sm text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mb-7">
      <div class="title d-flex align-items-center mb-5">
        <div class="line me-3 bg-primary"></div>
        <h2>品牌思想</h2>
      </div>
      <p class="w-100 w-md-50 mb-5"> {{ product.description }}</p>

      <div class="title d-flex align-items-center mb-5">
        <div class="line me-3 bg-primary"></div>
        <h2>商品規格</h2>
      </div>
      <p class="w-50"> {{ product.productRule1 }}</p>
      <p class="w-50"> {{ product.productRule2 }}</p>
      <p class="w-50"> {{ product.productRule3 }}</p>
      <p class="w-50"> {{ product.productRule4 }}</p>

      <div class="title d-flex align-items-center mb-5 mt-5">
        <div class="line me-3 bg-primary"></div>
        <h2>注意事項</h2>
      </div>
      <p class="text-danger fw-bold">￭ 本站依《消費者保護法》之規定提供7日鑑賞期，為保障雙方權益，請於收到商品後立即檢查，開箱及第一次搭設使用過程請全程錄影以確認商品完整性，如商品有任何問題請立即與本站客服聯絡，並提供清晰影片及照片以進行後續程序，此開箱及第一次搭設使用影片，會作爲原廠瑕疵判斷的重要依據。請注意《消費者保護法》所定之7日鑑賞期並非試用期，如商品已拆封使用，或拆封非出於檢查之目的且非在檢查之必要範圍內者，將不得退貨。</p>
      <p class="fw-bold">￭ 瑕疵商品之認定以本公司或原廠規範為準，並依維修物件之實際狀況，判斷是否屬於新品瑕疵。細微汙損或刮傷、線頭或輕微脫線等不影響商品外觀、使用功能，或原廠於商品有特別標示說明者，皆不屬於瑕疵商品（如：營柱金屬部位些微刮傷、布面髒污可清除者或天然木質所產生的裂紋及凹洞等皆不屬於瑕疵商品）。維修判斷如有任何疑義，將統一以本公司維修部解釋為主，會員不得有任何異議。</p>
      <p class="fw-bold">￭ 鑑賞期非試用期，退換貨商品必須為「全新未使用」狀態 ，含商品/配件/吊牌/贈品/原廠包裝等。如經使用或有缺件、汙損情況概不接受退換，敬請見諒。</p>
      <p class="fw-bold">￭ 退貨時請以物流配送之包裝紙箱將商品回復原狀，或使用其他紙箱妥善包裝。請勿直接於商品原廠外盒/包裝上黏貼紙張、膠帶或書寫文字，如造成損壞、髒汙將影響退貨權益，損壞費用將由訂單退款扣抵。</p>
      <p class="fw-bold">￭ 官網與門市之庫存/金流為獨立系統，恕不開放門市取貨/退換貨，歡迎使用網路購物，或直接前往全台實體通路購買。</p>
      <p class="fw-bold">￭ 下訂後請於1小時內完成付款，訂單成立且成功付款，方為完成訂購程序，逾時系統將自動取消訂單。訂購完畢隔日起約3-5個工作天內配達商品（不含國定例假日），恕不受理指定時間到貨/急件出貨/自行取貨。</p>
      <p class="fw-bold">￭ 商品圖因拍攝光線、環境，與螢幕顯示不同，顏色與實品存在些微差異，請依實際收到商品為準。</p>
      <p class="fw-bold">※如無法接受以上網路購物注意事項，建議直接前往實體門市或經銷通路購買商品，謝謝您的支持！</p>
    </div>

    <div class="connection bg-secondary p-6 d-flex flex-column align-items-center">
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
    <!-- // 提示視窗 -->

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
.smallImg{
    width: 90px;
    height: 90px;
}
.overflowX{
  overflow: scroll;
}
.line{
  width: 10px;
  height: 30px;
}
</style>

<script>
import FontNavbar from '../components/FontNavbar.vue'
import Modal from 'bootstrap/js/dist/modal.js'
export default {
  data () {
    return {
      modal: {},
      isLoading: false,
      product: {},
      data: {
        product_id: '',
        qty: 1
      },
      productId: ''
    }
  },
  methods: {
    async getoneProduct () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.data.product_id}`
      const result = await this.axios.get(api)
      this.product = result.data.product
      // this.data.product_id = result.data.product.id
      this.isLoading = false
      const scrollDiv = document.querySelector('#title').offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
      console.log(result.data.product)
    },
    changeImg (item) {
      this.product.imageUrl = item
    },
    async addtocarts () {
      this.productId = this.data.product_id
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const result = await this.axios.post(api, { data: this.data })
      this.$refs.fontnav.getCartlist()
      console.log(result)
      console.log(typeof (result.data.message))
      if (result.data.message === '已加入購物車') {
        console.log('suucess')
        this.modal.show()
      }
      this.productId = ''
    }

  },
  components: { FontNavbar },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    // this.modal.show()
  },
  created () {
    this.data.product_id = this.$route.params.id
    this.getoneProduct()
  }
}
</script>

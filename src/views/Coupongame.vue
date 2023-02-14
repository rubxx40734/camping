<template>
  <FontNavbar></FontNavbar>
  <div class="bgImg border">
    <h1 class="text-center mt-5 mb-7 text-light">來個小遊戲吧!</h1>
    <div class="containe">
      <div class="d-flex justify-content-center">
        <LuckyWheel
          ref="myLucky"
          width="350px"
          height="350px"
          :prizes="prizes"
          :blocks="blocks"
          :buttons="buttons"
          @start="startCallback"
          @end="endCallback"
        />
      </div>

      <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h5 class="modal-title fw-bold fs-2">幸運輪盤</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="fw-bold">{{ couponText }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bgImg{
    height: 100vh;
    background-color: black;
}
</style>
<script>
import FontNavbar from '@/components/FontNavbar.vue'
import Modal from 'bootstrap/js/dist/modal.js'
// import { Turntable } from '@nutui/nutui-bingo'
export default {
  data () {
    return {
      modal: {},
      couponText: '',
      blocks: [
        {
          padding: '10px',
          background: '#869cfa'
          // imgs: [
          //   {
          //     src: 'https://images.unsplash.com/photo-1647682619322-e9c4ff7aab26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4MDU3NDQ1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          //     rotate: 'true'
          //   }
          // ]
        }
      ],
      prizes: [
        {
          background: '#e9e8fe',
          range: 10,
          fonts: [{ text: '銘謝惠顧', fontWeight: '800', lineClamp: 1 }],
          imgs: [{
            src: 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-cry-face-emoji-emoticon-expression-png-image_5246498.png',
            width: 60,
            height: 60,
            top: 20
          }]
        },
        {
          background: '#b8c5f2',
          range: 20,
          fonts: [{ text: '         85折        折扣碼:camping85', fontWeight: '800', lineClamp: 1 }],
          imgs: [{
            src: 'https://png.pngtree.com/png-vector/20191215/ourmid/pngtree-discount-up-to-85-off-label-price-gold-vector-template-design-png-image_2089942.jpg',
            width: 60,
            height: 60,
            top: 20
          }]
        },
        {
          background: '#b8c5f2',
          range: 30,
          fonts: [{ text: '銘謝惠顧', fontWeight: '800' }],
          imgs: [{
            src: 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-cry-face-emoji-emoticon-expression-png-image_5246498.png',
            width: 60,
            height: 60,
            top: 20
          }]
        },
        {
          background: '#e9e8fe',
          range: 10,
          fonts: [{ text: '         半價        折扣碼:camping50', fontWeight: '800', lineClamp: 1 }],
          imgs: [{
            src: 'https://png.pngtree.com/png-clipart/20190424/ourmid/pngtree-explosive-5-discount-promotional-label-png-image_986885.jpg',
            width: 60,
            height: 60,
            top: 20
          }]
        },
        {
          background: '#b8c5f2',
          range: 20,
          fonts: [{ text: '銘謝惠顧', fontWeight: '800' }],
          imgs: [{
            src: 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-cry-face-emoji-emoticon-expression-png-image_5246498.png',
            width: 60,
            height: 60,
            top: 20
          }]
        },
        {
          background: '#e9e8fe',
          range: 30,
          fonts: [{ text: '         75折        折扣碼:camping75', fontWeight: '800', lineClamp: 1 }],
          imgs: [{
            src: 'https://png.pngtree.com/png-vector/20191215/ourmid/pngtree-discount-up-to-75-off-label-price-gold-vector-template-design-png-image_2089941.jpg',
            width: 60,
            height: 60,
            top: 20
          }]
        }
      ],
      buttons: [
        { radius: '40%', background: '#617df2' },
        { radius: '35%', background: '#afc8ff' },
        {
          radius: '30%',
          background: '#869cfa',
          pointer: true,
          fonts: [{
            text: 'GO',
            top: '-20px',
            fontWeight: 900,
            fontSize: '30',
            fontColor: 'black'
          }]
        }
      ]
    }
  },
  components: { FontNavbar },
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback () {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        // const index = 2
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop()
      }, 2500)
    },
    // 抽奖结束会触发end回调
    endCallback (prize) {
      console.log(prize.fonts[0].text)
      this.couponText = prize.fonts[0].text
      this.modal.show()
    }
  },
  mounted () {
    console.log(this.VueLuckyCanvas, this.axios)
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>

<template>
   <Loading :active="isLoading">
    <div class="loadingio-spinner-spinner-a5v3i0pye0a"><div class="ldio-ifotaor80h">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" @click="openModal(true, item)">新增優惠券</button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">優惠券</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">優惠券名稱</label>
                <input
                  type="email"
                  class="form-control"
                  id="title"
                  v-model="data.title"
                />
              </div>
              <div class="mb-3">
                <label for="percent" class="form-label">折扣%</label>
                <input
                  type="number"
                  class="form-control"
                  id="percent"
                  v-model="data.percent"
                />
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠券號碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  v-model="data.code"
                />
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">優惠券到期日</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  v-model="due_date"
                />
              </div>
              <div class="mb-3 w-25">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="data.is_enabled"
                  />
                  <label class="form-check-label ml-0" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="addCoupon(this.data)">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <table class="table container mb-5">
        <thead>
          <tr>
            <th scope="col">優惠碼名稱</th>
            <th scope="col">折扣碼</th>
            <th scope="col">折數 %</th>
            <th scope="col">到期日</th>
            <th scope="col">啟用狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <th scope="row">{{item.title}}</th>
            <td>{{item.code}}</td>
            <td>{{item.percent}}</td>
            <td>{{$filter.date(item.due_date)}}</td>
            <td v-if="item.is_enabled" class="text-success">啟用</td>
            <td v-else class="text-danger">未啟用</td>
            <td>
              <button class="btn btn-outline-primary me-2" @click="openModal(false, item)">修改</button>
              <button class="btn btn-outline-danger" @click="opendelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <DelModal ref="delmodal" :product="data"
  @delete-product="deleteCoupon"></DelModal>
</template>

<style lang="scss">
@import '../assets/helpers/loading.scss'
</style>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
import DelModal from '../components/DelModal.vue'
export default {
  data () {
    return {
      modal: {},
      coupons: [],
      isLoading: false,
      isNew: false,
      due_date: '',
      data: {
        title: '',
        is_enabled: 0,
        percent: '',
        due_date: 0,
        code: ''
      }
    }
  },
  watch: {
    due_date () {
      this.data.due_date = this.due_date
    }
  },
  components: { DelModal },
  inject: ['emitter'],
  methods: {
    openModal (isNew, item) {
      //  新增
      if (isNew) {
        this.due_date = ''
        this.data = {}
      //  修改
      } else {
        // 這邊有個重點 要用YYYY-MM-DD才可以寫回v-modal YYYY/MM/DD不行!!!!!!
        const dateAndTime = new Date(item.due_date).toISOString().split('T')
        this.due_date = dateAndTime[0]
        this.data = { ...item }
      }
      this.isNew = isNew
      this.modal.show()
    },
    cangeUnix (date) {
      const localDate = new Date(date)
      console.log(typeof (date), 1122)
      return localDate.toLocaleDateString()
    },
    changeDate (date) {
      const unix = new Date(date)
      return unix.getTime()
    },
    async addCoupon (data) {
      //  預設為新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'

      //  這邊是修改
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${data.id}`
        httpMethod = 'put'
      }
      this.data.due_date = this.changeDate(this.data.due_date)
      const result = await this.axios[httpMethod](api, { data: this.data })
      console.log(result)
      if (result.data.success) {
        this.emitter.emit('sendMessage', {
          style: 'success',
          title: result.data.message
        })
      } else {
        this.emitter.emit('sendMessage', {
          style: 'danger',
          title: '更新失敗',
          content: result.data.message.join('、')
        })
      }
      this.modal.hide()
      this.getCoupons()
    },
    opendelModal (item) {
      this.data = { ...item }
      this.$refs.delmodal.showModal()
    },
    async deleteCoupon (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      const result = await this.axios.delete(api)
      if (result.data.success) {
        this.emitter.emit('sendMessage', {
          style: 'success',
          title: result.data.message
        })
      }
      this.$refs.delmodal.hideModal()
      this.getCoupons()
    },
    async getCoupons () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      const result = await this.axios.get(api)
      this.isLoading = false
      this.coupons = result.data.coupons
    }
  },
  async mounted () {
    this.modal = new Modal(this.$refs.modal)
    this.getCoupons()
  }
}
</script>

<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spinner-a5v3i0pye0a"><div class="ldio-ifotaor80h">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" @click="openModal(true)">新增品項</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
          {{$filter.currency(item.origin_price)}}
        </td>
        <td class="text-right">
          {{$filter.currency(item.price)}}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-secondary" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
<ProductModal ref="productmodal"
@update-product="updateProduct"
:product="tempProduct"></ProductModal>
<DelModal ref="delmodal" :product="tempProduct"
@delete-product="deleteProduct"></DelModal>
<Pagination :page="pagination"
class="align-self-center w-50 mt-4"
@change-page="getproducts"></Pagination>
</template>

<!-- // 讀取效果 -->
<style lang="scss">
@import '../assets/helpers/loading.scss'
</style>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  components: { ProductModal, DelModal, Pagination },
  methods: {
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      this.$refs.productmodal.showModal()
    },
    async getproducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      const result = await this.axios.get(api)
      this.isLoading = false
      this.products = result.data.products
      this.pagination = result.data.pagination
      console.log(result)
    },
    async updateProduct (item) {
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.isLoading = true
      const result = await this.axios[httpMethod](api, { data: this.tempProduct })
      if (result.data.success) {
        this.emitter.emit('sendMessage', {
          style: 'success',
          title: '更新成功'
        })
      } else {
        this.emitter.emit('sendMessage', {
          style: 'danger',
          title: '更新失敗',
          content: result.data.message.join('、')
        })
      }
      this.isLoading = false
      this.$refs.productmodal.hideModal()
      this.getproducts(this.pagination.current_page)
    },
    async openDelModal (item) {
      this.tempProduct = { ...item }
      this.$refs.delmodal.showModal()
    },
    async deleteProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$refs.delmodal.hideModal()
      this.isLoading = true
      const result = await this.axios.delete(api)
      this.isLoading = false
      console.log(result)
      this.getproducts()
    }
  },
  mounted () {
    this.getproducts()
  }
}
</script>

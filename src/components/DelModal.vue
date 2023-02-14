<template>
<div class="modal" tabindex="-1" ref="delModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除產品</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定要刪除 <span class="text-danger">{{product.title}}</span> 嗎?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" @click="checkDel">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'

export default {
  data () {
    return {
      modal: {}
    }
  },
  props: ['product'],
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    checkDel () {
      this.$emit('delete-product', this.product.id)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.delModal)
  }
}
</script>

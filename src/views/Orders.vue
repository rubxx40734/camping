<template>
    orders
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    async getOrders () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      const result = await this.axios.get(api)
      console.log(result)
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

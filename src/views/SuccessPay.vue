<template>
    <FontNavbar></FontNavbar>
    <div class="banner card-img bgCover py-7">
        <h1 class="text-center fw-bold text-light mb-3">訂購成功!</h1>
        <p class="text-center fw-bold text-light mb-7">我們將盡快出貨，請耐心等待</p>
        <div class="text-center">
            <button type="button" class="btn btn-outline-primary">
                <router-link to="/fontproducts" class="nav-link fw-bold">繼續逛逛</router-link>
            </button>
        </div>
    </div>
</template>
<style lang="scss">
.banner{
    background-image: url('https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1796&q=80');
    width: 100%;
    height: calc(100vh);
}

</style>
<script>
import FontNavbar from '../components/FontNavbar.vue'
export default {
  data () {
    return {

    }
  },
  components: { FontNavbar },
  methods: {

  },
  mounted () {

  }
}
</script>

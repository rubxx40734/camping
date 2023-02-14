<template>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{ disabled : page.has_next}">
      <button class="page-link" type="button" @click="changePage(page.current_page -1 )"><p class="text-dark" >Previous</p></button>
    </li>
    <li v-for="(item, index) in page.total_pages" :key="index"
    class="page-item" :class="{ active : item === page.current_page}"><button class="page-link" type="button"
    @click="changePage(item)"><p class="text-dark">{{ item }}</p></button></li>
    <li class="page-item" :class="{ disabled : page.has_pre}">
      <button class="page-link" type="button" @click="changePage(page.current_page + 1 )"><p class="text-dark">Next</p></button>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['page'],
  methods: {
    changePage (page) {
      this.$emit('change-page', page)
    }
  }
}
</script>

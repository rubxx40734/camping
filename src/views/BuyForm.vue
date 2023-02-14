<template>
    <FontNavbar ref="fontnav" class="mb-7"></FontNavbar>
    <div class="container mb-7 mb-7">
        <div class="row d-flex justify-content-center mb-7">
          <div class="col-12 col-md-8 d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">確認購物車</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle step1"></div>
                <p class="fw-bold mt-3">訂購資訊</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">確認結帳</p>
              </div>
              <div class="progressLine d-none d-md-block"></div>
              <div class="step step d-flex flex-column align-items-center">
                <div class="circle"></div>
                <p class="fw-bold mt-3">訂購成功</p>
              </div>
          </div>
        </div>
        <h1 class="fw-bold mb-3 text-center">訂購資訊</h1>
        <p class="text-danger text-center fw-bold mb-5">送出訂購資訊前請再三確認，送出後不可更改</p>
        <Form v-slot="{ errors}" class="row g-3 mb-5 p-md-5 p-0 d-block d-md-flex justify-content-center"
            @submit="createorder">
                <div class="col-md-4">
                <label for="name" class="form-label">收件人姓名</label>
                <Field id="name" name="姓名" type="text" class="form-control"
                            :class="{ 'is-invalid': errors['姓名'] }"
                            placeholder="請輸入姓名" rules="required"
                            v-model="form.user.name"
                            ></Field>
                        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-4">
                <label for="tel" class="form-label">收件人電話</label>
                <Field id="tel" name="電話" type="tel" class="form-control"
                            :class="{ 'is-invalid': errors['電話'] }"
                            placeholder="請輸入電話" :rules="isphone"
                            v-model="form.user.tel"
                            ></Field>
                        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-8">
                <label for="email" class="form-label">信箱</label>
                <Field id="email" name="email" type="email" class="form-control"
                            :class="{ 'is-invalid': errors['email'] }"
                            placeholder="請輸入 Email"
                            rules="email|required" v-model="form.user.email"></Field>
                            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-8">
                <label for="address" class="form-label">地址</label>
                <Field id="address" name="地址" type="text" class="form-control"
                            :class="{ 'is-invalid': errors['地址'] }"
                            placeholder="請輸入地址" rules="required"
                            v-model="form.user.address"
                            ></Field>
                        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="form-floating col-md-8 mt-4">
                <textarea
                    class="form-control mb-6"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">留言或備註</label>
                </div>
                <div class="col-md-8 text-end">
                <button type="button" class="btn btn-outline-warning" @click="gobackshop">回購物車</button>
                <button type="submit" class="btn btn-outline-primary ms-3">前往下一步</button>
                </div>
        </Form>
    </div>

    <div class="connection bg-secondary p-6 d-flex flex-column align-items-center mb-5">
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
.step1{
  background-color: #ff9235;
}
.circle{
  width: 15px;
  height: 15px;
  border: 2px solid gray;
  border-radius: 50%;
}
.progressLine{
  width: 40px;
  height: 1px;
  border: 1px solid #dee2e6;
}
</style>

<script>
import FontNavbar from '../components/FontNavbar.vue'
export default {
  data () {
    return {
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: { FontNavbar },
  methods: {
    isphone (value) {
      const MobileReg = /^(09)[0-9]{8}$/
      return MobileReg.test(value) ? true : '需填寫正確手機格式><'
    },
    createorder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const obj = this.form
      this.axios.post(url, { data: obj })
        .then(res => {
          console.log(res)
          this.$router.push(`/payorder/${res.data.orderId}`)
        })
    },
    gobackshop () {
      this.$router.push('/carts')
    }
  },
  mounted () {
    this.$refs.fontnav.getCartlist()
  }
}
</script>

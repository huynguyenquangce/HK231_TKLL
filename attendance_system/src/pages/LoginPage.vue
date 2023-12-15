<template>
  <div class="page-wrapper">
    <div class=" inside-wrapper container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Đăng nhập</h3>
        <p class="subtitle has-text-grey">Vui lòng đăng nhập để tiếp tục.</p>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input
                
                  v-model="form.email"
                  class="input is-large"
                  type="email"
                  placeholder="Địa chỉ Email"
                  autofocus=""
                  autocomplete="email">
                  <form-errors :errors="v$.form.email.$errors" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                
                
               

                  v-model="form.password"
                  class="input is-large"
                  type="password"
                  placeholder="Mật Khẩu"
                  autocomplete="current-password">
                  <form-errors :errors="v$.form.password.$errors" />
              </div>
            </div>
            
            <button
            
              @click="login"
              @keyup.enter="login"
              :disabled="isProcessing"
              type="button"
              class="button is-block is-info is-large is-fullwidth"
            >
              Đăng nhập
            </button>
          </form>
        </div>
        <p class="has-text-grey">
          
          <router-link to="/help" >
            Đăng ký
        </router-link>&nbsp;&nbsp;
        <router-link to="/help" >
          Cần sự giúp đỡ?        </router-link>
         
        </p>
      </div>
    </div>
    <div class=" footer_boot ">
  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white "
          style="background-color: #404765"
          >
    <!-- Grid container -->
    <div class="container pt-3 pb-1 pb-0 ">
     
     

      <!-- Section: Social media -->
      <section class=" text-center pt-20">
        <!-- Facebook -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-facebook-f"></i
          ></a>

        <!-- Twitter -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-twitter"></i
          ></a>

        <!-- Google -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-google"></i
          ></a>

        <!-- Instagram -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-instagram"></i
          ></a>

        <!-- Linkedin -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-linkedin-in"></i
          ></a>

        <!-- Github -->
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-github"></i
          ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center "
         style="background-color: #404765"
         >
      © 2023 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >AttendanceX</a
        >
    </div>
    <!-- Copyright -->
    <div
    style="background-color: #404765"
    class="  d-sm-flex justify-content-center justify-content-sm-between ">

<span class=" text-center text-sm-left d-block d-sm-inline-block ">|  KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH.
            |  Designed and Developed by Phan Nguyen Xuan Loc - Nguyen Quang Huy - Doan Thi Hue. 
            |  Instructor: Tran Thanh Binh</span>
</div>

  </footer>
  <!-- Footer -->
</div>

  </div>
</template>
<script>
import useAuth from '../composition/useAuth';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import FormErrors from "../components/FormErrors.vue"
export default {
  components: {
    FormErrors
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      
     
    }
  },
  validations() {
    return {
      form: {
        email: { required, email },
        password: { required }
      }
    }
  },
  setup() {
    return {
      ...useAuth(),
      v$: useVuelidate()
    };
  },
  watch: {
    isAuthenticated(isAuth) {
      if (isAuth) { this.$router.push("/"); }
    }
  },
  methods: {
    async login() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.$store.dispatch("user/login", this.form);
      }
    },
   
    

  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 1rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
  .inside-wrapper{
    background-color: #EEEEEE;
    margin-top: 110px;
  }

  .footer_boot{
    margin-top:100px;
  }
  
</style>
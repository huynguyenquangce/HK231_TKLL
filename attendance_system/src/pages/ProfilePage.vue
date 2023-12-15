<template>
  <div class="page-wrapper">
    <div class="columns">
      <div class="container profile">
        <div class="section profile-heading">
          <div class="columns is-mobile is-multiline">
            <div class="column is-2">
              <figure class="image  header-icon user-profile-image">
                <img
                  class="is-rounded"
                  :src="user.avatar"/>
              </figure>
            </div>
            <div class="column is-4-tablet is-10-mobile name">
              <div class="user-info">
                <p>
                  <span class="title is-bold">{{user.username}}</span>
                  <br/>
                </p>
                <p class="tagline">
                  {{user.info}}
                </p>
              </div>
              <profile-modal
                :user="user"
              />
            </div>

           
          </div>
        </div>
        <div
          class="columns is-mobile is-multiline">
          <template v-if="true">
          
          </template>
        </div>
      </div>
    </div>
    <div class="container">
      

<div class="row gutters-sm">
         
         <div class="col-md-12">
           <div class="card mb-3">
             <div class="card-body">
               <div class="row">
                 <div class="col-sm-3">
                   <h6 class="mb-0">Tên đăng nhập</h6>
                 </div>
                 <div class="col-sm-9 text-secondary">
                  {{user.username}}
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-sm-3">
                   <h6 class="mb-0">Số điện thoại</h6>
                 </div>
                 <div class="col-sm-9 text-secondary">
                  {{ user.phone }}
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-sm-3">
                   <h6 class="mb-0">Mã số</h6>
                 </div>
                 <div class="col-sm-9 text-secondary">
                   (239) 816-9029
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-sm-3">
                   <h6 class="mb-0">Địa chỉ</h6>
                 </div>
                 <div class="col-sm-9 text-secondary">
                  {{ user.address }}
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-sm-3">
                   <h6 class="mb-0">Quốc tịch</h6>
                 </div>
                 <div class="col-sm-9 text-secondary">
                  {{ user.country }}
                 </div>
               </div>
               <hr>
               
             </div>
           </div>

        



         </div>
       </div>

    </div>
    
    
<!-- <div class=" doan d-sm-flex justify-content-center justify-content-sm-between">

<span class=" text-center text-sm-left d-block d-sm-inline-block ">|  KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH.
            |  Designed and Developed by Phan Nguyen Xuan Loc - Nguyen Quang Huy - Doan Thi Hue. 
            |  Instructor: Tran Thanh Binh</span>
</div> -->



<div class=" footer_boot ">
  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white"
          style="background-color: #404765"
          >
   
    <div
         class="text-center p-3"
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
    class="  d-sm-flex justify-content-center justify-content-sm-between">

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
import ProfileModal from "../components/ProfileModal.vue";
export default {
  components: {
    ProfileModal
  },
  setup() {
    return useAuth();
  },
  watch: {
    isAuthenticated(isAuth) {
      if (!isAuth) { this.$router.push("/"); }
    }
  },
}
</script>

<style scoped>
  .link {
    font-weight: 500;
    color: rgb(79, 79, 172);
    text-decoration: underline;
  }
  .user-info {
    margin-bottom: 10px;
  }
  .stats-error {
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
  }
  .delete-item {
    color: red;
  }
  .stats-tab {
    border-bottom: 2px solid transparent;
    transition: 0.5s;
  }
  .stats-tab:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
  .stats-tab.is-active {
    border-bottom: 2px solid black;
  }
  .stat-val {
    font-size: 2em;
    padding-top: 20px;
    font-weight: bold;
  }
  .stat-key {
    font-size: 1.4em;
    font-weight: 200
  }
  .section.profile-heading .column.is-2-tablet.has-text-centered + .has-text-centered {
    border-left: 1px dotted rgba(0, 0, 0, .2);
  }
  .container.profile {
    margin-top: 1%;
  }
  .control.is-pulled-left span.select {
    margin-right: 5px;
    border-radius: 2px;
  }
  .modal-card .content h1 {
    padding: 40px 10px 10px;
    border-bottom: 1px solid #dadada
  }
  .container.profile .profile-options .tabs ul li.link a {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #F1F1F1;
  }
  .card-footer {
    justify-content: center;
    padding: 5px;
  }
  /* .doan{
    margin-top: 100px;
  } */
  .footer_boot{
    margin-top:100px;
  }
</style>
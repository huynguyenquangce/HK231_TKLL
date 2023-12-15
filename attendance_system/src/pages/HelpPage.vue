<template>
    <div class="page-wrapper">
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2">Bạn bị lạc?</h3>

              <p>Vui lòng liên hệ quản trị viên hoặc người quản lý phần mềm để đăng ký tài khoản!</p>

              <router-link class="btn btn-danger" to="/" >
            Quay về trang chủ
        </router-link>&nbsp;&nbsp;
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <div
  
    class="  d-sm-flex justify-content-center justify-content-sm-between">

<span class="da text-center text-sm-left d-block d-sm-inline-block ">|  KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH.
            |  Designed and Developed by Phan Nguyen Xuan Loc - Nguyen Quang Huy - Doan Thi Hue. 
            |  Instructor: Tran Thanh Binh</span>
</div>
</div>
</template>

<script>
export default {};
</script>

<style>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
.page_404{
    margin-top: 60px;
}
.da{
  margin-top:100px;
}
</style>
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="stylemain.css">
    <!-- =====================nav bar================== -->


  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
<!-- ===================footer===================== -->
<footer class="bg-white pt-5 d-flex">
  <div class="footermain d-flex flex-column justify-content-center mx-auto">
    <hr>
    <div class="footersaletext text-start">
      <router-link to="/"><a class="saletext fs-3 fw-bold" href="">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</a></router-link>
    </div>
    <hr>
    <div class="footertext d-flex justify-content-between pt-5">
      <img class="footerimg" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt=""    srcset="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png 360w, https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-300x100.png 300w, https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png 120w" sizes="(max-width: 90px) 100vw, 90px">
      <div class="footeroptions d-flex justify-content-between fs-3 ">
        <span class="text-black">For her</span>
        <span class="text-black">For him</span>
        <span class="text-black">subscribe</span>
      </div>
    </div>
    <div class="subsearch d-flex flex-row justify-content-between ">
      <p class="text-start  fs-3 fw-bold">The best look anytime, anywhere.</p>
      <input class="subscribeinput" type="search" placeholder="Your email address" aria-label="Search">
    </div>
      <div class="searchbtn d-flex flex-column align-items-end mb-5">
        <input type="submit" class=" bg-primary text-white p-3" value="SUBSCRIBE" style="border: 0px solid black;">
      </div>
    
    <hr class="mt-5">
    <div class="copyrights text-start d-flex justify-content-between ">
      <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
      <div class="socialicons d-flex">
        <i class="fa-brands fa-facebook-f px-2"></i>
        <i class="fa-brands fa-youtube px-2"></i>
        <i class="fa-brands fa-twitter px-2"></i>
        <i class="fa-brands fa-instagram px-2"></i>
        <i class="fa-brands fa-google px-2"></i>
        
      </div>
    </div>
  </div>
  </footer>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footersaletext a{
  text-decoration: none;
  color: black;
}

.footersaletext a:hover{
  color: rgb(0, 140, 255);
}

.saletext{
  transition: color 0.3s ease;
}
.saletext:hover{
  color: aqua;
}
footer{
    width: 100%;
    /* height: 500px; */
}

.footeroptions{
    width: 50%;
    /* font-size: 30px; */
}
.footermain{
    width: 65%;
}

.subscribeinput{
    height: 50px;
}
</style>

<script>

export default {
 
}
</script>
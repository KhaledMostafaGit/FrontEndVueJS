<template>
  <link rel="stylesheet" href="stylehome.css">
  <navbar :linkcolor="'text-white'" logoimg="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" width="140" height="47"/>
  <div class="homemainbody">
    <div class="mainbody">
      <div class="title">
        <h1>
          Raining Offers For Hot Summer!
        </h1>
      </div>
      <h3>
        25% Off On All Products
      </h3>
      <div class="buttons">
        <button id="btn1">SHOP NOW</button>
        <button id="btn2">FIND MORE</button>
      </div>
    </div>
  </div>
<!-- ====================slide show =======================-->

<!-- <figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="client-logo-4"></figure> -->
<!-- ==================sale cards======================== -->
<div class="salecards bg-white d-flex justify-content-center " style="padding-bottom: 120px;">
<HomeSaleCards cardimage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" cardtitle="20% Off On Tank Tops" cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum..​" backgroundposition="top right" btn_name="SHOP NOW"/>
<HomeSaleCards cardimage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" cardtitle="Latest Eyewear For You" cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.​" backgroundposition="center left" btn_name="SHOP NOW"/>
<HomeSaleCards cardimage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" cardtitle="Let's Lorem Suit Up!" cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.​" backgroundposition="center right" btn_name="CHECK IT OUT"/>
</div>
<!-- =======================featured products====================== -->
<div class="featuredproducts bg-white py-5">
  <h1 class="featuredtitle pb-4 fw-bold">
    Featured Products
  </h1>
  <div class="featuredprodscontainer ">
    <featuredproducts/>
  </div>
</div>
<div class="whitebackground bg-white">
  <div class="homesaleposter mx-auto text-start text-white position-relative">
    <div class="textcontainerposter position-absolute">
      <h3>Limited Time Offer</h3>
      <h1>Special Edition</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
      <router-link to="/"><button id="btn1">SHOP NOW</button></router-link>
    </div>
  </div>
</div>

<div class="whitebackground bg-white">
  <div class="qualitycards mx-auto pt-5">
    <div class="card-group ">
    <div class="card border border-0">
      <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" class="mx-auto" alt="..." width="52px" height="52px">
      <div class="card-body">
        <h5 class="card-title fw-bold">Worldwide Shipping</h5>
        <p class="card-text">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
      </div>
    </div>
    <div class="card border border-0">
      <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" class="mx-auto" alt="..." width="52px" height="52px"> 
      <div class="card-body">
        <h5 class="card-title fw-bold">Best Quality</h5>
        <p class="card-text">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
      </div>
    </div>
    <div class="card border border-0">
      <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" class="mx-auto" alt="..." width="52px" height="52px">
      <div class="card-body">
        <h5 class="card-title fw-bold">Best Offers</h5>
        <p class="card-text">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
      </div>
    </div>
    <div class="card border border-0">
      <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" class="mx-auto" alt="..." width="52px" height="52px">
      <div class="card-body ">
        <h5 class="card-title fw-bold" >Secure Payments</h5>
        <p class="card-text">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
      </div>
    </div>
  </div>
  </div>
</div>


</template>
<style scoped>
/* navbar */
.navbar{
    background-color: rgba(0,0,0,0.07);
}
body{
    background-image: url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg);
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

}

.homemainbody{
    width: 100%;
    height: 700px;
}
.mainbody{
    margin-top: 280px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 65%;
    height: 100%;
}
.title{
    width: 50%;
    text-align: left;
    margin-bottom: 12px;
 }
.mainbody h1{
    color: white;
    font-size: 65px;
}
.mainbody h3{
    color: white;
    text-align: left;
}

.buttons{
    margin-top: 12px;
    display: flex;
}

#btn1{
    margin-right: 20px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    background-color: white;
    padding: 15px 30px;
    border:0px solid white;
    transition: color 0.5s ease,background-color 0.5s ease;
}
#btn1:hover{
    background-color: black;
    color: white;
}
#btn2{
    font-size: 13px;
    font-weight: bold;
    color: white;
    background-color: transparent;
    padding: 15px 30px;
    border:1px solid white;
    transition: color 0.5s ease,background-color 0.5s ease;
}
#btn2:hover{
    background-color: white;
    color: black;
}


  .featuredtitle {
    display: inline-block;
    position: relative;
  }

  .featuredtitle::after {
    content: "";
    display: block;
    width: 30%; 
    height: 2px; 
    background-color: rgb(37, 37, 240); 
    position: absolute;
    bottom: 0;
    left: 35%; 
  }
  .featuredprodscontainer{
       display: flex;
      flex-wrap: wrap; 
      gap: 20px; 
       /* Set a maximum width for the container */
      margin: 0 auto;
      width: 80%;
  }
.homesaleposter{
    background-image: url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
    width: 75%;
    position: relative;
}
.homesaleposter::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 132, 214, 0.2);
}
.textcontainerposter{
  z-index: 1;
  width: 45%;
  top: 20%;
  left: 10%;
}
.qualitycards{
  width: 70%;
}
  </style>

<script>

// import HelloWorld from "@/components/HelloWorld.vue";
import HomeSaleCards from '@/components/HomeSaleCards.vue';
import featuredproducts from '@/components/FeaturedProducts.vue';
import navbar from '@/components/navbar.vue';

export default {
  // name: "HomeView",
  components: {
    HomeSaleCards,
    featuredproducts,
    navbar
  },

};
</script>

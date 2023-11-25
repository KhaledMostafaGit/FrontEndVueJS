<template>
<div class="salecard d-flex justify-content-center align-items-end m-2" :style="{ 'background-image': 'url(' + cardimage + ')' , 'background-position': backgroundposition}">
  <div class="card-body text-start text-white p-4">
    <h5 class="card-title fs-3 pb-2">{{cardtitle}}</h5>
    <p class="card-text">{{cardtext}}</p>
    <router-link to="/"><button class="salecardbuttons">{{btn_name}}</button></router-link>
  </div>
</div>
</template>



<style>
.card-title{

}
.salecard{
    /* background-image: url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg); */
    /* background-image: url("../src/assets/men-fashion-free-img.jpg"); */
    background-size: cover;
    /* background-position: top right; */
    position: relative;
    width: 23rem; height: 28rem; 
}
.salecard::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.card-body{
    z-index: 1;
}

.salecardbuttons{
    margin-right: 20px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    background-color: white;
    padding: 15px 30px;
    border:0px solid white;
    transition: color 0.5s ease,background-color 0.5s ease;
}

.salecardbuttons:hover{
    background-color: black;
    color: white;
}
</style>


<script>
export default {
    data(){

    },
    props:['cardimage','cardtitle','cardtext','backgroundposition','btn_name']
}
</script>
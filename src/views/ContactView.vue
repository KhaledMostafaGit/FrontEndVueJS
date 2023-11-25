<template>
    <link rel="stylesheet" href="stylecontact.css">
    <navbar :linkcolor="'text-white'" logoimg="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" width="140" height="47"/>
    <div class="homemainbody " style="height: 20vh;">
      <div class="mainbody">
        <h1>Contact Us</h1>
        
      </div>
    </div>
  
    <div class="whitebg bg-white" style="padding-top: 5%; padding-bottom: 2%;">
      <div class="container">
        <h4 class="fw-bold">Have any queries?</h4>
        <h1 class="fw-bold">We're here to help.​</h1>
      </div>
    
    
    
    </div>
  
  
  <div class="whitebackground bg-white">
    <div class="qualitycards mx-auto pt-5">
      <div class="card-group ">
      <div class="card border border-0">
        <div class="card-body">
          <h5 class="card-title fw-bold">Salesg</h5>
          <p class="card-text">Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          <span class="fs-5 fw-bold text-primary">1800 123 4567</span>
        </div>
      </div>
      <div class="card border border-0">
        <div class="card-body">
          <h5 class="card-title fw-bold">Complaints</h5>
          <p class="card-text">Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          <span class="fs-5 fw-bold text-primary">1900 223 8899</span>
          
        </div>
      </div>
      <div class="card border border-0">
        <div class="card-body">
          <h5 class="card-title fw-bold">Returns</h5>
          <p class="card-text">Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          <span class="fs-5 fw-bold text-primary">returns@mail.com</span>
        </div>
      </div>
      <div class="card border border-0">
        <div class="card-body ">
          <h5 class="card-title fw-bold" >Marketing</h5>
          <p class="card-text">Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          <span class="fs-5 fw-bold text-primary">1700 444 5578</span>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div class="bg-white pb-5">
    <div class="container d-flex">

        <div class="textpartcontact text-start " style="padding: 10% 0; ">
            <span class="fw-bold text-black">Don't be a stranger!</span>
            <h1 class="fw-bold pb-3">You tell us. We listen.</h1>
            <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
        </div>
        <div class="formpart d-flex flex-column w-100" style="padding: 10% 0;" >
            <input class="mb-3 p-2" type="text" placeholder="Name" style="border: 1px solid rgba(128, 128, 128, 0.3);">
            <input  class="mb-3 p-2" type="text" placeholder="Subject" style="border: 1px solid rgba(128, 128, 128, 0.3);">
            <input  class="mb-3 p-2" type="email" placeholder="Email" style="border: 1px solid rgba(128, 128, 128, 0.3);">
            <input class="mb-3 "  type="text" placeholder="Message" style="border: 1px solid rgba(128, 128, 128, 0.3); padding: 15% 0%;">
            <input type="submit" class="w-25 bg-primary text-white p-3" value="SEND MESSAGE" style="border: 0px solid black;">
        </div>
    </div>
  </div>
  
  </template>
  <style >
  
  
    </style>
  
  <script>
  
  // import HelloWorld from "@/components/HelloWorld.vue";
  import navbar from '@/components/navbar.vue';
  
  export default {
    // name: "HomeView",
    components: {
      navbar
    },
  
  };
  </script>
  
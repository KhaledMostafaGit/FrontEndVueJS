<template>
    <div class="logincontainer d-flex justify-content-center align-items-center flex-column">
        <div class="minicontainer">
            <form>
          <!-- Email input -->
          <div class="form-outline mb-4 d-flex flex-column pt-4 px-4">
              <label class="text-start">Username or Email Address</label>
              <input type="email"  class="" v-model="email" />
              <label class="form-label text-danger" for="form3Example3c" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</label>
                    
          </div>
        
          <!-- Password input -->
          <div class="form-outline mb-4 d-flex flex-column px-4">
              <label class="text-start" >Password</label>
            <input type="password"  v-model="pass" class="" />
            <label class="form-label text-danger" for="form3Example4c" v-if="v$.pass.$error">{{ v$.pass.$errors[0].$message }}</label>
                    
          </div>
        
          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check ps-5">
                <input class="form-check-input " type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>
        
            <div class="col">
              <!-- Submit button -->
              <button type="button" class="btn btn-primary btn-block mb-4" @click="login()" >Log in</button>
            </div>
          </div>
          
          
        </form>
      </div>
      <!-- Simple link forgot password-->
      <a href="">Forgot password?</a>
      <router-link to="/"><a href="">←Go to Brandstore</a></router-link>
    </div>
</template>


<style>
.logincontainer{
    height: 100vh;
}
.minicontainer{
  width: 350px;
    border: 1px solid rgba(128, 128, 128, 0.644);
}
</style>


<script>
import { thisExpression } from '@babel/types'
import { useVuelidate } from '@vuelidate/core'
import { required, email,sameAs } from '@vuelidate/validators'
import axios from "axios"
export default {
  data () {
    return { 
      v$: useVuelidate() ,
      email:'',
      pass:'',
    }
  },
  validations () {
    return {
      email: { required, email }, 
      pass: { required }, 
    }
  },
  methods:{
    async login(){
      this.v$.$validate();
      axios.get(`http://localhost:3000/users/?email=${this.email}&password=${this.pass}`)
      .then((re)=>{
        if(re.data.length>0){
          this.$router.push({name:"home"})
        }
      })
      
    }
  }
}
</script>
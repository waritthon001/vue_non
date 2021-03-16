<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
            <div class="brand">
              <h1>Welcome to HappyPet</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="section section-signup page-header" :style="signupImage">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>User ID</label>
                <md-input v-model="name"></md-input>
              </md-field>
              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field> -->
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input type="password" v-model="password"></md-input>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg "
                v-on:click="checkForm"
              >
                Get Started
              </md-button>
              <md-button
                href="#/register"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Register
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { LoginCard } from "@/components";
import axios from "axios";
var validator = require("validator");

export default {
  components: {
    LoginCard
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg") //background
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    }
  },
  data() {
    return {
      name: null,
      // email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    checkForm: function(e) {
          // console.log(typeof(this.password))
      if (!this.name || !this.password ) {
        alert('Please enter all fields');
        e.preventDefault();
      }

      else if (this.password.length < 8) {
         alert('Password must be at least 8 characters')
         e.preventDefault();
      }

      // else if(!validator.isEmail(this.email)){
      //   alert('Your email is invalide')
      //   e.preventDefault();
      // }
      else{ 
        axios
          .post("http://localhost:5000/users/login", {
            name: this.name,
            // email: this.email,
            password: this.password
          })
          .then(response => {
              window.location.href = '#/Home/';
              console.log('done')
              }).catch(error => {
  
                // console.log(error.response.data)
                // console.log('-----------------------------')
                // console.log(error.response.data.error)
    
                // if(error.response.data.message.message && error.response.data.message.message.indexOf('E11000 duplicate key error collection: myFirstDatabase.users index: name_1 dup key')!=-1)
                //   alert('name is already existed')
    
                // if(error.response.data.message.message && error.response.data.message.message.indexOf('User validation failed: password: Path `password`')!=-1)
                //   alert('password required length (8)')
  
                if(error.response.data.error && error.response.data.error.indexOf('Login failed,please check your credentials !')!=-1)
                  alert('Can not found your data!')
    
                // if(error.response.data.message.errmsg &&error.response.data.message.errmsg.indexOf('E11000 duplicate key error collection:')!=-1)
                //   alert('email is already existed')
                });
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

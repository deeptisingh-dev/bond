<template>
  <div class="container">
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <form @submit.prevent="login">
        <card class="card-login card-white text-left">
          <template slot="header">
            <img src="img/card-primary.png" class="card-img" alt="" />
            <h1 class="card-title">Log in</h1>
          </template>

          <div>
            <base-input
              v-validate="'required|email'"
              name="email"
              v-model="model.email"
              placeholder="Email"
              addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
              v-validate="'required|min:5'"
              name="password"
              v-model="model.password"
              type="password"
              placeholder="Password"
              addon-left-icon="tim-icons icon-lock-circle"
            >
            </base-input>
          </div>

          <div slot="footer">
            <base-button
              native-type="submit"
              type="primary"
              class="mb-3"
              size="lg"
              block
            >
              Get Started
            </base-button>
            <div class="pull-left">
              <h6>
                <router-link class="link footer-link" to="/register">
                  Create Account
                </router-link>
              </h6>
            </div>

            <div class="pull-right">
              <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
            </div>
          </div>
        </card>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Card, BaseInput } from "@/components/index";

export default {
  components: {
    Card,
    BaseInput
  },
  data() {
    return {
      model: {
        email: "",
        password: "",
        subscribe: true,
        sessionID:0,
        showErrMsg:false
      }
    };
  },
  methods: {
    async login() {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        var url = 'https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/validatelogin';
              const vm = this;
              axios.post(url,{
                EmailID : vm.model['email'],
                Password : vm.model['password']
              })
              .then(function (res) {
                        if ( res.data[0].LoggedIn== 1){
                            vm.model['showErrMsg']=false
                            vm.model['sessionId']=res.data[0].sessionID
                            vm.$router.push('/dashboard')
                        }
                        else{
                          vm.model['sessionId']=0
                          vm.model['showErrMsg']=true
                        }
              });
        // TIP use this.model to send it to api and perform login call
      }
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>

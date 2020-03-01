<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 ml-auto">
        <div class="info-area info-horizontal mt-5">
          <div class="icon icon-warning">
            <i class="tim-icons icon-wifi"></i>
          </div>
          <div class="description">
            <h3 class="info-title">Bond Market</h3>
            <p class="description">
              Indian companies lined up bonds worth Rs 42,271 crore for issue in the 
              local market in just about a week after the Reserve Bank of India said 
              it would infuse Rs 1 lakh crore through longterm repo operation (LTRO), pulling yields down.
            </p>
          </div>
        </div>
        <div class="info-area info-horizontal">
          <div class="icon icon-primary">
            <i class="tim-icons icon-triangle-right-17"></i>
          </div>
          <div class="description">
            <h3 class="info-title">Indian firms have issued a Record Dollar Bonds</h3>
            <p class="description">
              Refinitiv data showed Indian firms have issued a record $5.6 billion 
              worth of dollar bonds between Jan. 1 and Feb. 11. That follows a record 
              gross issuance of $16.5 billion in 2019.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-7 mr-auto">
        <form @submit.prevent="register">
          <card class="card-register card-white">
            <template slot="header">
              <img
                class="card-img"
                src="img/card-primary.png"
                alt="Card image"
              />
              <h4 class="card-title text-left">Register</h4>
            </template>

            <base-input
              v-validate="'required'"
              v-model="model.fullName"
              name="Full Name"
              placeholder="Full Name"
              addon-left-icon="tim-icons icon-single-02"
            >
            </base-input>

            <base-input
              v-validate="'required|email'"
              v-model="model.email"
              name="email"
              placeholder="Email"
              addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
              v-validate="'required|min:5'"
              v-model="model.password"
              name="password"
              type="password"
              placeholder="Password"
              addon-left-icon="tim-icons icon-lock-circle"
            >
            </base-input>

            <base-checkbox class="text-left">
              I agree to the <a href="#something">terms and conditions</a>.
            </base-checkbox>

            <base-button
              native-type="submit"
              slot="footer"
              type="primary"
              round
              block
              size="lg"
            >
              Get Started
            </base-button>
            <base-button
              @click.prevent="login"
              slot="footer"
              type="primary"
              round
              block
              size="lg"
            >
              Back to Login Page
            </base-button>
              <base-alert v-show="model['actReg']" type="success"  dismissible>
              <span><b> Success - </b> REGISTRATION SUCCESSFUL:  Please login with your EmailId</span>
              </base-alert>
              
            
          </card>
        </form>
        <div>
          <card>
            <base-alert type="success" dismissible>
            <span
              ><b> Success - </b> This is a regular notification made with
              ".alert-success"</span
            >
            </base-alert>
            </card>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { BaseCheckbox, Card, BaseInput, Modal } from "@/components/index";
import BaseAlert from "@/components/BaseAlert";
import NotificationTemplate from "@/pages/Notifications/NotificationTemplate";

import BaseButton from "@/components/BaseButton";


export default {
  components: {
    BaseCheckbox,
    Card,
    BaseInput
  },
  data() {
    return {
      model: {
        email: "",
        fullName: "",
        password: "",
        actReg:false
      }
    };
  },
  methods: {
    async register() {
      
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        var url = 'https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/bondcreateuser';
        const vm = this;
        axios.post(url,{
                FirstName : vm.model['fullName'],
                LastName : "XYZ",
                EmailID : vm.model['email'],
                PhoneNo : "123",
                Password : vm.model['password']
              })
              .then(function (res) {
                        if ( res.data[0].status == 1){
                            vm.model['actReg']=true
                        }
                        
              })
        // TIP use this.model to send it to api and perform register call
      }
    },
    login: function () {
              this.$router.push('/login')
            }
  }
};
</script>
<style></style>

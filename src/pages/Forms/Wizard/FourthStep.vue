<template>
  <div>
    <h5 class="info-text">
      Let's start with the basic information
    </h5>
    <div class="row justify-content-center mt-5">
      <div class="col-sm-5">
        <base-input
          name="firstName"
          required
          placeholder="First Name"
          v-model="model.firstName"
          v-validate="modelValidations.firstName"
          :error="getError('firstName')"
          addon-left-icon="tim-icons icon-single-02"
        >
        </base-input>

        <base-input
          name="date of birth"
          required
          placeholder="date of birth"
          v-model="model.dob"
          v-validate="modelValidations.dob"
          :error="getError('dob')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>

       

        <!--<base-input
          name="email"
          required
          placeholder="Email"
          v-model="model.email"
          v-validate="modelValidations.email"
          :error="getError('email')"
          addon-left-icon="tim-icons icon-email-85"
        >
        </base-input>-->
      </div>
      <div class="col-sm-5">
        <base-input
          name="lastName"
          required
          placeholder="Last Name"
          v-model="model.lastName"
          v-validate="modelValidations.lastName"
          :error="getError('lastName')"
          addon-left-icon="tim-icons icon-caps-small"
        >
        </base-input>
         <base-input
          name="PAN"
          required
          placeholder="PAN"
          v-model="model.pan"
          v-validate="modelValidations.pan"
          :error="getError('PAN')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>

        
        
      </div>
      <div class="col-sm-10">

         <base-input
          name="Adhaar"
          required
          placeholder="Adhaar"
          v-model="model.adhaar"
          v-validate="modelValidations.adhaar"
          :error="getError('Adhaar')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>
        <!--<base-input
          name="address"
          placeholder="Address"
          v-model="model.address"
          v-validate="modelValidations.address"
          :error="getError('address')"
          addon-left-icon="tim-icons icon-square-pin"
        >
        </base-input>-->
      </div>
    </div>
  </div>
</template>
<script>
import { BaseInput } from "@/components";
import data from "../Wizard";

export default {
  components: {
    BaseInput
  },

  data() {
    return {
      model: {
        firstName: "",
        lastName: "",
        dob: "",
        pan: "",
        adhaar: ""
      },
      modelValidations: {
        firstName: {
          //required: true,
          //min: 5
        },
        lastName: {
          //required: true,
          //min: 5
        },
        dob: {
          //required: true,
          //dob: true
        },
        pan: {
          //required: true,
          //numeric: true
        },
        adhaar: {
          //required: true,
          //numeric: true
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    passData(ref){
      console.log("passdata");
      console.log(data.data().wizardModel.firstName);
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit("on-validated", res, this.model);
        return res;
      });
    }
  }
};
</script>
<style></style>

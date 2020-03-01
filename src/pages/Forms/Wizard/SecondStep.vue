<template>
  <div>
    <h5 class="info-text">
      Bank Details
    </h5>
    <div class="row justify-content-center mt-5">
      <div class="col-sm-5">
        <base-input
          name="bankName"
          required
          placeholder="Bank Name"
          v-model="model.bankName"
          v-validate="modelValidations.bankName"
          :error="getError('bankName')"
          addon-left-icon="tim-icons icon-single-02"
        >
        </base-input>

        <base-input
          name="bankIFSC"
          required
          placeholder="BANK IFSC"
          v-model="model.bankIFSC"
          v-validate="modelValidations.bankIFSC"
          :error="getError('bankIFSC')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>

       

        
      </div>
      <div class="col-sm-5">
        <base-input
          name="bankAccountNum"
          required
          placeholder="Bank Account Number"
          v-model="model.bankAccountNum"
          v-validate="modelValidations.bankAccountNum"
          :error="getError('bankAccountNum')"
          addon-left-icon="tim-icons icon-caps-small"
        >
        </base-input>
         <base-input
          name="bankAccountNumAgain"
          required
          placeholder="Re-enter Bank Account Number"
          v-model="model.bankAccountNumAgain"
          v-validate="modelValidations.bankAccountNumAgain"
          :error="getError('bankAccountNum')"
          addon-left-icon="tim-icons icon-caps-small"
        >
        </base-input>

        
        
      </div>
      
    </div>
  </div>
</template>
<script>
import { BaseInput } from "@/components";

export default {
  components: {
    BaseInput
  },

  data() {
    return {
      model: {
        bankName: "",
        bankIFSC: "",
        bankAccountNum: "",
        bankAccountNumAgain: "",
        },
      modelValidations: {
        bankName: {
          //required: true,
          //min: 5
        },
        bankIFSC: {
          //required: true,
          //min: 5
        },
        bankAccountNum: {
          //required: true,
          //dob: true
        },
        bankAccountNumAgain: {
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

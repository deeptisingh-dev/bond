<template>
  <div>
    <h5 class="info-text">
      Depository Details
    </h5>
    <div class="row justify-content-center mt-5">
      <div class="col-sm-5">
        
        <base-input :error="getError('depository')">
        <el-select
          v-model="model.depository"
          class="select-primary"
          name="depository"
          v-validate="modelValidations.depository"
        >
          <el-option
            v-for="depository in depositoryOptions"
            class="select-primary"
            :label="depository"
            :value="depository"
            :key="depository"
          ></el-option>
        </el-select>
      </base-input>

        <base-input
          name="dpID"
          required
          placeholder="DP ID"
          v-model="model.dpID"
          v-validate="modelValidations.dpID"
          :error="getError('dpID')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>

       

        
      </div>
      <div class="col-sm-5">
        <base-input
          name="dpName"
          required
          placeholder="DP Name"
          v-model="model.dpName"
          v-validate="modelValidations.dpName"
          :error="getError('dpName')"
          addon-left-icon="tim-icons icon-caps-small"
        >
        </base-input>
         <base-input
          name="dpAccount"
          required
          placeholder="DP Account"
          v-model="model.dpAccount"
          v-validate="modelValidations.dpAccount"
          :error="getError('dpAccount')"
          addon-left-icon="tim-icons icon-caps-small"
        >
        </base-input>

        
        
      </div>
       <div class="col-sm-10">

         <base-input
          name="clientID"
          required
          placeholder="clientID"
          v-model="model.clientID"
          v-validate="modelValidations.clientID"
          :error="getError('clientID')"
          addon-left-icon="tim-icons icon-mobile"
        >
        </base-input>
       
      </div>
      
    </div>
  </div>
</template>
<script>
import { Select, Option } from "element-ui";
import { BaseInput } from "@/components";

export default {
  components: {
    BaseInput,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      model: {
        depository: "",
        dpID: "",
        dpName: "",
        dpAccount: "",
        clientID : ""
        },
        
      depositoryOptions: [
        "NSE",
        "BSE"
      ],
      modelValidations: {
        depository: {
          //required: true,
          //min: 5
        },
        dpID: {
          //required: true,
          //min: 5
        },
        dpName: {
          //required: true,
          //dob: true
        },
        dpAccount: {
          //required: true,
          //numeric: true
        },
        clientID: {
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

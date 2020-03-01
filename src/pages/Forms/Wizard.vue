<template>
  <div class="content">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <simple-wizard>
          <template slot="header">
            <h3 class="card-title">Complete your KYC</h3>
            <h3 class="description">
                
            </h3>
          </template>

          <wizard-tab :before-change="() => validateStep('step1')">
            <template slot="label">
              <i class="tim-icons icon-single-02"></i>
              <p>About</p>
            </template>
            <first-step
              ref="step1"
              @on-validated="onStepValidated"
            ></first-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step2')">
            <template slot="label">
              <i class="tim-icons icon-settings-gear-63"></i>
              <p>Bank Details</p>
            </template>
            <second-step
              ref="step2"
              @on-validated="onStepValidated"
            ></second-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step3')">
            <template slot="label">
              <i class="tim-icons icon-delivery-fast"></i>
              <p>Depository</p>
            </template>
            <third-step ref="step3"
            @on-validated="onStepValidated"
            ></third-step>
          </wizard-tab>

          <wizard-tab  :before-change="() => validateStep('step4')">
            <template slot="label">
              <i class="tim-icons icon-delivery-fast"></i>
              <p>Verification</p>
            </template>
            <fourth-step ref="step4"
            @on-validated="onStepValidated"
            ></fourth-step>
          </wizard-tab>
        </simple-wizard>
      </div>
    </div>
  </div>
</template>
<script>
import { SimpleWizard, WizardTab } from "@/components";
import FirstStep from "./Wizard/FirstStep.vue";
import SecondStep from "./Wizard/SecondStep.vue";
import ThirdStep from "./Wizard/ThirdStep.vue";
import FourthStep from "./Wizard/FourthStep.vue";
import swal from "sweetalert2";

export default {
  data() {
    return {
      wizardModel: {}
    };
  },
  components: {
    SimpleWizard,
    WizardTab,
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep
  },
  methods: {
    passData(ref){
      return this.$refs[ref].passData(this.wizardModel);
    },
    validateStep(ref) {
      console.log(ref);
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      console.log(model);
      this.wizardModel = { ...this.wizardModel, ...model };
      console.log(this.wizardModel);
    },
    wizardComplete() {
      alert(this.wizardModel)
    }
  }
};
</script>
<style></style>

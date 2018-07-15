<template>
<div class="container">
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progressBar mt-4 mb-4">
     <progress-bar
            :total-step="4"
            :current-step="currentStep">
      </progress-bar>
</div>
<step1></step1>
</div>
</template>

<script>
import Step1 from "./Step1";
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  data() {
    return {
      currentStep: 1
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++;
      }
    }
  },
  components: {
    ProgressBar,
    Step1
  }
};
</script>

<style lang='scss'>
$warning-color: #f5a623;

.container {
  .progress {
    height: 4px;
  }
  .progressBar {
    max-width: 250px;
    margin: 0 auto;
  }
}
.inputWrapper {
  position: relative;
}
.inputWrapper-warning {
  &:after {
    font-family: "Font Awesome 5 Free";
    content: "\f071";
    font-weight: bold;
    position: absolute;
    right: 12px;
    top: 8px;
    color: $warning-color;
  }
  > input {
    border: 3px solid $warning-color !important;
    &:focus {
      box-shadow: none;
    }
  }
}
.badge-warning {
  color: white;
}
</style>

<template>
<div class="container">
<header-title :header='header'></header-title>
  <div class="form-group text-left has-feedback" >
    <label for="exampleInputAccount">Account</label>
    <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('email')}">
    <input name="email" v-model="formData.email" v-validate="'required|email'" type="email" class="form-control" id="exampleInputAccount" placeholder="example@email.com">
    </div>
    <span v-if="errors.has('email')" class="badge badge-warning">{{ errors.first('email') }}</span>
  </div>
  <div class="form-group text-left">
    <label for="exampleInputPassword1">Password</label>
    <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('password')}">
    <input ref="password" name="password" v-model="formData.password" v-validate="{required: true, min:6}" type="password" class="form-control" id="exampleInputPassword1" placeholder="●●●●●●●●">
    </div>
    <span v-if="errors.has('password')" class="badge badge-warning">{{ errors.first('password') }}</span>
  </div>
  <div class="form-group text-left">
    <label for="exampleInputPassword2">Comfirm Password</label>
    <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('checkPassword')}">
    <input v-model="formData.checkPassword" data-vv-as="password" name="checkPassword" v-validate="{required: true, confirmed: 'password'}" type="password" class="form-control" id="exampleInputPassword2" placeholder="●●●●●●●●">
    </div>
    <span v-if="errors.has('checkPassword')" class="badge badge-warning">{{ errors.first('checkPassword') }}</span>
  </div>
  <button @click="validateStep" :disabled='!validate' class="btn btn-primary btn-lg btn-block">SUBMIT & NEXT</button>
</div>
</template>

<script>
import HeaderTitle from "../../components/HeaderTitle";
export default {
  data() {
    return {
      header: {
        title: "Create Account",
        subTitle: "Glad to see you here!"
      },
      formData: {}
    };
  },
  components: {
    HeaderTitle
  },
  computed: {
    validate() {
      return this.errors.items.length === 0;
    }
  },
  methods: {
    validateStep() {
      this.$validator.validate().then(res => {
        if (res) {
          console.log(this.formData);
          // this.$emit('next');
        }
      });
    }
  }
};
</script>

<style lang='scss'>
</style>

<template>
  <q-page class="">
    <div class="text-center text-h5 text-uppercase text-bold text-grey-10 q-mt-md q-mb-lg">simple et rapide, ouvrez votre compte</div>
    <div class="row">
      <div class="col-lg-8 col-md-8 col-12 offset-lg-2 offset-md-2">
        <q-form
          class="q-gutter-md row q-mt-md"
        >
          <q-input
            outlined
            v-model="firstName"
            label="First name *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-input
            outlined
            v-model="lastName"
            label="Last name *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-input
            outlined
            v-model="email"
            label="Email *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-input
            outlined
            v-model="contact"
            label="Contact *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-input
            outlined
            v-model="pwd"
            label="Password *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-input
            outlined
            v-model="confirmPwd"
            label="Confirm password *"
            class="col-lg-5 col-md-5 col-11"
          />

          <q-toggle color="green" class="col-lg-5 col-md-5 col-11" v-model="accept" label="I accept the license and terms" />

          <q-btn class="col-lg-5 col-md-5 col-11 myBg-green4 text-white" label="Submit"/>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      accept: false,
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      pwd: '',
      confirmPwd: ''
    }
  }
}
</script>

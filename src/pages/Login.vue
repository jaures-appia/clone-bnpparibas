<template>
  <q-page class="myBg-green5 q-pa-none full-width">
    <div class="text-center text-h4 text-white q-mb-md q-pt-md">ACCÉDER À MES COMPTES</div>
    <div class="row">
       <div class="col-lg-4 col-md-4 col-12 offset-lg-4 offset-md-4">
        <q-form
          class="q-gutter-y-md q-mt-xl"
        >

          <q-input
            outlined
            v-model="email"
            label="Email *"
            bg-color="white"
            color="black"
            class=""
          />

          <q-input
            type="password"
            outlined
            v-model="pwd"
            label="Password *"
            bg-color="white"
            color="black"
            class=""
          />

          <q-btn class="full-width myBg-green4 text-white" label="Connexion"/>
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
      email: '',
      pwd: '',
    }
  }
}
</script>

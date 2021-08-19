<template>
  <q-page class="">
    <h1>home</h1>
    <!-- <div class="row">
      <div class="col-6ca">
        <div class="text-left text-h4 text-uppercase q-mb-lg q-pt-lg">bienvenue sur ma banque</div>
        <div class="text-center text-left" style=" font-size: 20px">
          Des solutions adaptées pour tous besoins : gestion et
          ouverture de compte en ligne, simulation de crédit,
          assurance, épargne… une banque présente à vos côtés au quotidien.
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{

    }
  },
  beforMount(){
    {{ $store.state.bnp }}
  }
}
</script>

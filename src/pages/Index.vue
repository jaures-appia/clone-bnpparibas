<template>
  <q-page class="">
    <h1>state : </h1>
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
    {{ $store }}
  }
}
</script>

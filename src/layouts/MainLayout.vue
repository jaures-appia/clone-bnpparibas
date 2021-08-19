<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="">
      <q-header elevated class="">
        <q-toolbar class="myBg-green3 text-white q-py-none" v-if="$route.name != 'devenirClient' && $route.name != 'login' && $route.name != 'dashbord'">
          <q-item clickable class="text-center q-px-md menu-item">Particuliers</q-item>
          <q-item clickable class="text-center q-px-md menu-item">Banque privée</q-item>
          <q-item clickable class="text-center q-px-md menu-item">Professionnels</q-item>
          <q-item clickable class="text-center q-px-md menu-item">Entreprises</q-item>
          <q-toolbar-title></q-toolbar-title>
          <q-item clickable class="text-center q-px-md menu-item">Accessibilité</q-item>
        </q-toolbar>

        <q-toolbar class="q-py-sm bg-white text-black">
          <q-btn v-if="$route.name != 'devenirClient' && $route.name != 'login' && $route.name != 'dashbord'" flat @click="drawer = !drawer" round dense icon="menu" />
           <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg">
          </q-avatar>
          <q-item clickable tag="label" class="text-h5 q-px-xs text-black" :to="{ name: 'home' }">Ma banque</q-item>
          <div class="q-px-sm">La banque d'un monde qui change</div>
          <q-toolbar-title></q-toolbar-title>
          <q-icon size="md" color="grey-9" name="search" />
          <q-separator class="q-mx-sm" vertical />
          <q-icon size="md" color="grey-9" name="notifications_active" />
          <q-separator class="q-mx-sm" vertical />
          <q-btn :to="{ name: 'devenirClient' }" class="myBg-green1 text-white q-pa-sm" outlined rounded no-caps label="Devenir client" v-if="$route.name != 'devenirClient' && $route.name != 'dashbord'"></q-btn>
          <q-btn :to="{ name: 'login' }" class="q-mx-sm myBg-green2 text-white q-pa-sm" outlined rounded no-caps icon="lock" label="Accéder à mon compte" v-if="$route.name != 'login' && $route.name != 'dashbord'"></q-btn>
          <div v-if="$route.name == 'dashbord'">Koffi Edouard</div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="180"
        :breakpoint="600"
        bordered
        content-class="bg-grey-10 text-white"
        v-if="$route.name != 'devenirClient' && $route.name != 'login' && $route.name != 'dashbord'"
      > 
        <q-scroll-area class="fit">
          <q-list>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="credit_card" />
              </q-item-section>
              <q-item-section>
                Gérer ses comptes
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Emprunter
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="beach_access" />
              </q-item-section>
              <q-item-section>
                Assurer et sécuriser
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_balance_wallet" />
              </q-item-section>
              <q-item-section>
                Épargner
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="trending_up" />
              </q-item-section>
              <q-item-section>
                Investir en bourse
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contacts" />
              </q-item-section>
              <q-item-section>
                Nous contacter
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>
              <q-item-section>
                Vous et vos besoins
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="redeem" />
              </q-item-section>
              <q-item-section>
                Ma banque et moi
              </q-item-section>
            </q-item>
            <q-separator color="grey-8" />

            <q-item clickable class="fixed-bottom">
              <q-item-section class="q-py-sm" style="margin-right: auto; margin-left: auto;">
                <q-img src="~assets/icon-rse.svg" style="width: 40px; height: 40px; margin-right: auto; margin-left: auto;"></q-img>
                <div class="text-center q-mt-xs" style="margin-right: auto; margin-left: auto;">
                  Ma banque s'engage
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page >
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>


<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
      drawer: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item:hover{
  background-color: #008854;
}
</style>

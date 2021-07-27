<template>
  <div>
    <headerNav/>
    <logged v-if="authed" />
    <youtube v-if="authed" />
    <login v-if="!authed"/>
    <speakers/>
    <banner v-if="fresh"/>
    <register @done="fresh = true" v-if="!authed"/>
    <flooter/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import firebase from './assets/firebaseconf'
import headerNav from './components/header.vue'
import register from './components/register.vue'
import speakers from './components/speakers.vue'
import flooter from './components/footer.vue'
import login from './components/login.vue'
import banner from './components/banner.vue'
import logged from './components/congrats.vue'
import youtube from './components/youtube.vue'

export default {
  name: 'App',
  data(){
    return{
      fresh:false
    }
  },
  components: {
    headerNav,
    register,
    speakers,
    flooter,
    login,
    banner,
    logged,
    youtube
  },
  computed:{
    authed(){
     return firebase.auth().currentUser;
    }
  }
}
</script>

<style>

</style>

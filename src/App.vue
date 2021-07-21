<template>
  <div>
    <headerNav/>
    <speakers/>
    <register/>
    <flooter/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import headerNav from './components/header.vue'
import register from './components/register.vue'
import speakers from './components/speakers.vue'
import flooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    headerNav,
    register,
    speakers,
    flooter
  }
}
</script>

<style>

</style>

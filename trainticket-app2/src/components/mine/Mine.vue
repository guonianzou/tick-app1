<template>
  <div>
      <v-header></v-header>

      123456
      

      <adv></adv>
      <v-foot></v-foot>
  </div>
</template>

<script>
import head from '../head/Head'
import adv from '../adv/Adv'
import foot from '../foot/Foot'

export default {
   components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    }
}
</script>

<style>

</style>

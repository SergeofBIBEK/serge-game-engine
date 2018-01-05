<template>
  <div class="hello">
    Hello World
    <div id="gameCanvas"></div>
  </div>
</template>

<script>

import { game } from '@/engine/core/Phaser';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>

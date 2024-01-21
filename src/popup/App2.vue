<template>
<div class="ui container">
  <br>
  <h3 class="ui dividing header">Spaced Repetition</h3>
  <Menu />
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: { Menu }
}
// this is dirty and should be adede!!
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>

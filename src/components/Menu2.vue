<template>
    <div class="ui primary flex float vertical pointing menu link">
    <a class="item" @click="startSession">
    Start Session
  </a>
  <a class="item" @click="manageCards">
    Manage Cards
  </a>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods:{
      startSession: () => {
      window.open('localhost:8080/session','_blank');
      },
      manageCards: () => {
      window.open('localhost:8080','_blank');
      },
    }
}
</script>

<template>
  <v-app-bar :elevation="2" class="px-md-12" color="blue-lighten-5">
    <v-container class="mx-auto d-flex align-center justify-center">
      <nuxt-link to="/" class="mx-2" min-width="200px">
        <v-img
          src="/img/logo.svg"
          contain
          class="mx-2 grayscale"
          height="100"
          min-width="200"
        />
      </nuxt-link>
    </v-container>
  </v-app-bar>
</template>
<script setup>
  const { APP_URL, APP_NAME } = useRuntimeConfig().public;
</script>

<template>
  <v-col v-for="p in 4" cols="12" sm="6" md="4" lg="3">
    <v-skeleton-loader
      class="mx-auto border"
      max-width="300"
      type="text, image, article"
    ></v-skeleton-loader>
  </v-col>
</template>
<script setup></script>

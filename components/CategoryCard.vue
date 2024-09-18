<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <router-link
      :to="{ path: `/${category.title.toLowerCase()}` }"
      class="no-underline"
    >
      <v-card
        v-bind="props"
        class="d-flex flex-column align-center justify-center"
        outlined
        height="200"
        :elevation="isHovering ? 8 : 2"
      >
        <v-card-text class="d-flex align-center justify-center">
          <h1>{{ category.title }}</h1>
        </v-card-text>
      </v-card>
    </router-link>
  </v-hover>
</template>
<script setup>
  const props = defineProps({
    category: {
      type: Object,
      required: true,
    },
  });
</script>

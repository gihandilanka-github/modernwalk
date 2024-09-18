<template>
  <v-card>
    <v-card-title>
      <PageTitle :titleText="product.title" titleSize="h6" :divider="false" />
    </v-card-title>
    <v-img :src="product.image" height="200px" cover></v-img>
    <v-card-subtitle class="text-h6 pt-5 pb-0">
      <PageTitle :titleText="product.price" titleSize="h6" :divider="false" />
    </v-card-subtitle>
    <v-card-text class="pt-0">
      {{ product.description }}
    </v-card-text>
  </v-card>
</template>
<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>

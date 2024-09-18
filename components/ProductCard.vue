<template>
  <v-card>
    <v-card-title class="text-none text-no-wrap">
      <span class="card-title" :title="product.title">{{ product.title }}</span>
    </v-card-title>
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-subtitle class="text-h6 pt-5 pb-0">
      <PageTitle
        :titleText="priceFormat(product.price)"
        titleSize="h6"
        :divider="false"
      />
    </v-card-subtitle>
    <v-card-text class="pt-0">
      <span :title="product.description">
        {{ truncateTitle(product.description, 100) || product.description }}
      </span>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import { priceFormat, truncateTitle } from '~/utils/commonHelper';
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>

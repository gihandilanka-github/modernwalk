<template>
  <v-card elevation="4">
    <v-card-title class="text-none text-no-wrap mb-5">
      <span class="card-title" :title="product.title">{{ product.title }}</span>
    </v-card-title>
    <v-img :src="product.image" height="200px"></v-img>

    <v-card-text class="pt-0 mt-5" :class="categoryColorClass">
      <v-card-title class="text-h6 pt-5 pb-0 text-none">
        <PageTitle
          :titleText="priceFormat(product.price)"
          titleSize="h6"
          :divider="false"
        />
      </v-card-title>
      <span :title="product.description">
        {{ truncateTitle(product.description, 90) || product.description }}
      </span>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import { priceFormat, truncateTitle } from '~/utils/commonHelper';
  import { MENS_COLOR, WOMENS_COLOR } from '~/utils/constants';
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const categoryColorClass = computed(() => {
    return `bg-${props.product.category === "men's clothing" ? `${MENS_COLOR}-accent-3` : `${WOMENS_COLOR}-accent-2`}`;
  });
</script>

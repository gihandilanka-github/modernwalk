<template>
  <v-container class="text-center pt-10">
    <v-row class="px-3">
      <PageTitle
        titleAlign="left"
        titleSize="h5"
        :titleText="category"
        :textCapitalize="true"
      />
    </v-row>
    <v-row v-if="productStore.productsLoading"> <ProductCardLoader /> </v-row>
    <v-row v-else class="justify-start">
      <v-col
        v-for="product in products"
        :key="product.id"
        class="pr-5"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import { SITE_META, CATEGORIES } from '~/utils/constants';
  import { convertToPossessive } from '~/utils/commonHelper';

  const route = useRoute();
  const category = convertToPossessive(route.params.category);
  const { APP_URL } = useRuntimeConfig().public;

  const setHead = inject('setHead');
  setHead({
    title: capitalize(category),
    description: SITE_META.HOME.description,
    keywords: SITE_META.HOME.keywords,
    ogTitle: SITE_META.HOME.ogTitle,
    ogDescription: SITE_META.HOME.description,
    ogUrl: APP_URL,
    ogImage: APP_URL + SITE_META.HOME.ogImage,
  });

  const productStore = useProductStore();

  const products = computed(() => {
    return productStore.products.filter((product) =>
      CATEGORIES.includes(product.category)
    );
  });

  const isProductsEmpty = computed(() => {
    return !CATEGORIES.includes(category);
  });

  if (isProductsEmpty.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    });
  }

  const fetchProductsPerCategory = () => {
    return productStore.fetchProductsPerCategory(category, 'desc');
  };

  onBeforeMount(() => {
    fetchProductsPerCategory();
  });
  onUnmounted(() => {
    productStore.setState('products', []);
    productStore.setState('categories', []);
  });
</script>

<template>
  <v-container class="text-center pt-10">
    <v-row class="px-3">
      <PageTitle titleText="Flash Sale" titleAlign="left" titleSize="h5" />
    </v-row>
    <v-row v-if="productStore.productsLoading"> <ProductCardLoader /> </v-row>
    <v-row v-else class="justify-start">
      <v-col
        v-for="product in products"
        :key="product.id"
        class=""
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
  <v-container class="text-center pt-10 mt-5">
    <v-row class="px-3">
      <PageTitle titleText="Categories" titleAlign="left" titleSize="h5" />
    </v-row>
    <v-row v-if="productStore.categoriesLoading"> <CategoryCardLoader /></v-row>
    <v-row v-else class="justify-start">
      <v-col
        v-for="category in categories"
        :key="category"
        class=""
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <CategoryCard :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { SITE_META, CATEGORIES } from '~/utils/constants';

  const { APP_URL } = useRuntimeConfig().public;
  const setHead = inject('setHead');
  setHead({
    title: 'Home',
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

  const categories = computed(() => {
    return productStore.categories.filter((category) =>
      CATEGORIES.includes(category)
    );
  });

  const fetchProducts = () => {
    return productStore.fetchProducts('desc');
  };

  const fetchCategories = () => {
    return productStore.fetchCategories();
  };

  onBeforeMount(() => {
    fetchProducts();
    fetchCategories();
  });

  onUnmounted(() => {
    productStore.setState('products', []);
    productStore.setState('categories', []);
  });
</script>

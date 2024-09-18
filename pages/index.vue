<template>
  <v-container class="text-center px-0 pt-10">
    <v-row>
      <PageTitle titleText="Flash Sale" titleAlign="left" titleSize="h5" />
    </v-row>
    <v-row class="justify-start">
      <v-col
        v-for="product in products"
        :key="product.id"
        class="pl-0 pr-5"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
  <v-container class="text-center px-0 pt-10">
    <v-row>
      <PageTitle titleText="Categories" titleAlign="left" titleSize="h5" />
    </v-row>
    <v-row class="justify-start">
      <v-col
        v-for="category in categories"
        :key="category.id"
        class="pl-0 pr-5"
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
  import ProductCard from '~/components/ProductCard.vue';
  import { SITE_META } from '~/utils/constants';

  const { APP_URL } = useRuntimeConfig().public;
  const setHead = inject('setHead');
  setHead({
    title: 'Modern Walk - Your Fashion Store',
    description: SITE_META.HOME.description,
    keywords: SITE_META.HOME.keywords,
    ogTitle: SITE_META.HOME.ogTitle,
    ogDescription: SITE_META.HOME.description,
    ogUrl: APP_URL,
    ogImage: APP_URL + SITE_META.HOME.ogImage,
  });

  const products = ref([
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 'Rs 10.00',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 'Rs 20.00',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      title: 'Product 3',
      description: 'Description for Product 3',
      price: 'Rs 30.00',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300',
      title: 'Product 4',
      description: 'Description for Product 4',
      price: 'Rs 40.00',
    },
  ]);

  const categories = ref([
    {
      id: 1,
      title: 'Mens Clothing',
      link: '/mens-clothing',
    },
    {
      id: 2,
      title: 'Womens Clothing',
      link: '/womens-clothing',
    },
  ]);
</script>

<template>
  <v-container fluid class="text-center px-0 pt-10">
    <v-row class="justify-center"> </v-row>
  </v-container>
</template>

<script setup>
  import { SITE_META } from '~/utils/constants';

  const { APP_URL, APP_NAME } = useRuntimeConfig().public;
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
</script>

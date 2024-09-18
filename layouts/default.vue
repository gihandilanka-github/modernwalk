<template>
  <v-app light>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
  const title = ref('');
  const description = ref('');
  const keywords = ref('');
  const { APP_NAME } = useRuntimeConfig().public;

  useHead({
    titleTemplate: `%s | ${APP_NAME}`,
    meta: [
      {
        name: 'description',
        content: description.value,
      },
      {
        name: 'keywords',
        content: keywords.value,
      },
    ],
  });

  provide('setHead', (meta) => {
    title.value = meta.title;
    useHead({
      title: meta.title,
      meta: [
        {
          name: 'description',
          content: meta.description,
        },
        {
          name: 'keywords',
          content: meta.keywords,
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: meta.ogTitle,
        },
        {
          property: 'og:description',
          content: meta.ogDescription,
        },
        {
          property: 'og:url',
          content: meta.ogUrl,
        },
        {
          property: 'og:image',
          content: meta.ogImage,
        },
      ],
    });
  });

  onMounted(() => {});
</script>

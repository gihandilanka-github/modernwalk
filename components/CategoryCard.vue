<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <router-link
      :to="{ path: formatTextToSlug(category) }"
      class="text-decoration-none"
    >
      <v-card
        v-bind="props"
        class="d-flex flex-column align-center justify-center"
        outlined
        height="250"
        :elevation="isHovering ? 8 : 2"
        :class="isHovering ? cardHoverClass : categoryColorClass"
      >
        <v-card-text
          class="d-flex align-center justify-center text-capitalize text-white"
        >
          <h1>{{ category }}</h1>
        </v-card-text>
      </v-card>
    </router-link>
  </v-hover>
</template>
<script setup>
  import { formatTextToSlug } from '~/utils/commonHelper';
  const props = defineProps({
    category: {
      type: String,
      required: true,
    },
  });

  const categoryColorClass = computed(() => {
    return `bg-${props.category === "men's clothing" ? `${MENS_COLOR}-accent-3` : `${WOMENS_COLOR}-accent-2`}`;
  });

  const cardHoverClass = computed(() => {
    return `bg-${props.category === "men's clothing" ? `${MENS_COLOR}-accent-4` : `${WOMENS_COLOR}-accent-4`}`;
  });
</script>

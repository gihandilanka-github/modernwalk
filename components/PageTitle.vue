<template>
  <div
    :class="{
      'title-container': titleAlign === 'center',
      'title-container-left': titleAlign === 'left',
    }"
  >
    <div :class="{ [size]: true, 'text-capitalize': textCapitalize }">
      {{ titleText }}
    </div>
    <v-divider
      v-if="titleDivider"
      class="title-divider"
      :thickness="3"
    ></v-divider>
  </div>
</template>

<script setup>
  const props = defineProps({
    titleText: {
      type: String,
      required: true,
    },
    titleAlign: {
      type: String,
      default: 'center',
    },
    titleSize: {
      type: String,
      default: 'h4',
    },
    divider: {
      type: Boolean,
      default: true,
    },
    textCapitalize: {
      type: Boolean,
      default: false,
    },
  });

  const size = computed(() => `home-page-title-${props.titleSize}`);
  const titleDivider = computed(() => props.divider);
</script>

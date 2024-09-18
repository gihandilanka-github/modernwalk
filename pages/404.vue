<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center">
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-alert
            class="justify-center"
            density="compact"
            icon="mdi-alert-octagon"
          >
          <template #title>
            <div class="text-h5">404 - Page Not Found</div>
          </template>
            Sorry, the page you are looking for does not exist.
          </v-alert>
        </v-col>
    </v-row>
  </v-container>
</template>
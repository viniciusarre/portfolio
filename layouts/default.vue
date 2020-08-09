<template>
  <v-app dark>
    <navbar />
    <v-app-bar
      fixed
      class="hidden-md-and-up"
    >
      <v-toolbar-title text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/NavBar'
export default {
  components: { Navbar }
}
</script>

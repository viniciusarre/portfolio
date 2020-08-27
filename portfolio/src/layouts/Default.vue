<template>
  <v-app dark>
    <navbar :items="menuItems" />
    <mobile-navbar :open="mobileDrawer" :items="menuItems" @toggle="mobileDrawer = !mobileDrawer">
      <v-app-bar class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="mobileDrawer = !mobileDrawer" />
        <v-toolbar-title v-text="title" />
      </v-app-bar>
    </mobile-navbar>
    <v-main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <slot />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/NavBar'
import MobileNavbar from '../components/MobileNavBar'
export default {
  components: { Navbar, MobileNavbar },
  data () {
    return {
      title: 'Vinícius Arré\'s Portfolio',
      mobileDrawer: false,
      menuItems: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-domain',
          title: 'Experience',
          to: '/experience'
        },
        {
          icon: 'mdi-handshake',
          title: 'Open Source',
          to: '/open-source'

        },
        {
          icon: 'mdi-book-open-variant',
          title: 'Education',
          to: '/education'
        }
      ]
    }
  }
}
</script>

<style scoped>
.app{
 overflow-x: none
}
</style>

<template>
  <v-navigation-drawer
    v-model="isOpen"
    :mini-variant="true"
    fixed
    expand-on-hover
  >
    <v-list class="mt-16">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="mt-3 py-3"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      fixed: true,
      items: [
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
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vinícius Arré\'s personal portfolio'
    }
  }
}
</script>

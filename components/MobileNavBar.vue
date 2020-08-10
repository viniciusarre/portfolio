<template>
  <v-navigation-drawer
    v-model="show"
    fixed
    class="hidden-md-and-up"
  >
    <v-list class="mt-16">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
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
    open: { type: Boolean, default: false, required: true },
    items: { type: Array, required: true }
  },
  data () {
    return {
      show: this.open
    }
  },
  watch: {
    open (curr) {
      this.show = open
    }
    // show (curr) {
    //   if (curr === this.open) {
    //     this.$emit('toggle')
    //   }
    // }
  }
}
</script>

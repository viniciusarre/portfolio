<template>
  <v-layout
    row
    justify-center
    align-center
    pa-0
    ma-0
  >
    <v-flex lg12 xs12 md12 class="text-center mb-2">
      <img src="/profile.JPG" class="profile">
    </v-flex>
    <v-flex sm10 xs10 lg6 xl6>
      <v-card outlined>
        <v-card-title class="headline">
          About me
        </v-card-title>
        <v-card-text>
          <p>
            I'm Vinícius, a {{ age }}-year-old Full Stack developer from Brazil.
          </p>
          <p>
            I love building robust and scalable systems on the Web.
            <br> As a freelancer, I have worked with clients from several countries and helped them bring their solutions to reality.
          </p>
          <p> I am a strong believer in team work and in the power of remote work </p>
          <p> I also enjoy contributing eventually to open-source, as well as developing my own open source software. </p>
          <p> I have a focused interest in EdTech systems.</p>
          <p> I am mostly familiar with the following Tech Stack: </p>
          <ul>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL/MySQL</li>
            <li>Python</li>
            <li>Docker</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    const birthday = new Date(1997, 4, 22)
    const age = new Date(new Date() - birthday).getFullYear() - 1970
    return {
      age
    }
  }
}
</script>

<style scoped>
    .profile {
        max-height: 30vh;
        border-radius: 10%;
    }
</style>

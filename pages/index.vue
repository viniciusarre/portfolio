<template>
  <v-layout
    row
    justify-center
    align-center
    pa-0
    ma-0
  >
    <v-img class="mb-5 hidden-md-and-down" src="/logo.png" max-width="20vw" max-height="auto" />
    <v-img class="mb-5 hidden-md-and-up" src="/logo.png" max-width="50vw" max-height="auto" />
    <v-flex xs10 sm10>
      <v-card outlined>
        <v-card-title class="headline">
          Hello World!
        </v-card-title>
        <v-card-text>
          <p>
            Thank you for taking an interest in my Portfolio.
            I hope you will find here the information you need about my career as a Full Stack Web Developer!
          </p>
          <p>
            Please, feel free to use the menu on the left to navigate to different sessions of the website...
          </p>
          <p>
            If you'd like to reach out, you can talk to me directly using this <a href="mailto:viniciusarre@gmail.com"> E-mail. </a>
          </p>
          <p>
            Furthermore, I am available on
            <span class="ml-3">
              <a target="__blank" href="https://www.linkedin.com/in/vin%C3%ADcius-arr%C3%A9-08732b131/"><v-icon>mdi-linkedin</v-icon></a>
            </span>
            <span class="ml-3">
              <a target="__blank" href="https://twitter.com/arre_dev"><v-icon>mdi-twitter</v-icon></a>
            </span>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<template>
  <v-layout
    row
    justify-center
    align-center
    pa-0
    ma-0
  >
    <v-flex xs10 sm10 md8 lg8 xl8>
      <h1 class="mt-10 mb-4">
        Open Source projects
      </h1>
      <!-- <v-slide-group multiple show-arrows>
        <v-slide-item class="mr-6"> -->
      <v-card outlined class="mb-4">
        <v-card-title class="headline">
          Quote A Lang
        </v-card-title>
        <v-card-text>
          <p> This is a really fun project I have been working on since my exchange program. </p>
          <p>  The idea consists of creating a language-practicing app using quotes from WikiQuotes. </p>
          <p> So far, I have implemented a small Proof of Concept API using Node.js, Express and MongoDB. </p>
          <p> have been working on the client-side now and on improving the tests.</p>
          <p> It also uses a Python web crawling server to fetch the quotes from the web page. </p>
          <p> In the future, I plan on implementing a Spaced-Repetition System.</p>

          You can learn more about it here:
          <a target="__blank" href="https://github.com/viniciusarre/quote-a-lang-server">API</a>
          and
          <a target="__blank" href="https://github.com/viniciusarre/quote-a-lang-crawler">Web Crawler</a>.
        </v-card-text>
      </v-card>
      <!-- </v-slide-item>
        <v-slide-item class="mr-6"> -->
      <v-card outlined class="mb-4">
        <v-card-title class="headline">
          Rust Playground
        </v-card-title>
        <v-card-text>
          <p> This is a small repository in which I do some testing with Rust, as I have been studying it lately. </p>
          <p> There isn't anything too complex, but it might help you grasp the syntax if you're new to the language. </p>
          <p> You can learn more about it here: </p>
          <a href="https://github.com/viniciusarre/rust-playground">Learn more </a>
        </v-card-text>
      </v-card>
      <!-- </v-slide-item>
        <v-slide-item class="mr-6"> -->
      <v-card outlined class="mb-4">
        <v-card-title class="headline">
          Star Wars Portfolio
        </v-card-title>
        <v-card-text>
          <p>This is a project I have worked on in university. </p>
          <p> It is quite simple, as it contains information about the subjects, but in a Star-Wars aesthetic. </p>
          <p> I will definitely revisit it soon.</p>
          <a target="__blank" href="https://github.com/viniciusarre/starwars-portfolio/">Learn More</a>
        </v-card-text>
      </v-card>
      <!-- </v-slide-item>
      </v-slide-group> -->
    </v-flex>
  </v-layout>
</template>

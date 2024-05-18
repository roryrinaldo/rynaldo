<template>
  <v-footer class="text-center d-flex flex-column" style="padding: 20px" theme="dark">
    <v-flex class="mt-2">
      <v-list style="background-color: transparent">
        <v-list-item-group style="display: flex">
          <v-list-item theme="light">
            <v-btn icon href="https://www.instagram.com/rynaldo.dev" target="_blank">
              <v-icon class="social-icon">mdi-instagram</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item theme="light">
            <v-btn icon href="https://twitter.com/rory_rinaldo" target="_blank">
              <v-icon class="social-icon">mdi-twitter</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item theme="light">
            <v-btn icon href="https://www.linkedin.com/in/roryrinaldo" target="_blank">
              <v-icon class="social-icon">mdi-linkedin</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item theme="light">
            <v-btn icon href="https://github.com/roryrinaldo" target="_blank">
              <v-icon class="social-icon">mdi-github</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-flex>
    <v-flex class="mt-6">
      <p class="footer-text" style="margin: 0">&copy; 2023. Vue3 & Vuetify Portfolio. Developed by Rory Rinaldo</p>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.social-icon {
  font-size: 2rem;
  transition: transform 0.2s, color 0.2s;
}

.social-icon:hover {
  transform: scale(1.3);
  color: rgb(194, 0, 194);
}

.footer-text {
  transition: color 0.3s;
}

.footer-text:hover {
  color: rgb(194, 0, 194);
}
</style>

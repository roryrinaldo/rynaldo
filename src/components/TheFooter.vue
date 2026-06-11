<template>
  <v-footer class="text-center d-flex flex-column" style="padding: 20px" theme="dark">
    <div class="mt-2 social-links">
      <v-btn icon="mdi-instagram" aria-label="Instagram" href="https://www.instagram.com/rynaldo.dev" target="_blank" rel="noopener noreferrer" variant="text" class="social-icon"></v-btn>
      <v-btn icon="mdi-twitter" aria-label="Twitter" href="https://twitter.com/rory_rinaldo" target="_blank" rel="noopener noreferrer" variant="text" class="social-icon"></v-btn>
      <v-btn icon="mdi-linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/roryrinaldo" target="_blank" rel="noopener noreferrer" variant="text" class="social-icon"></v-btn>
      <v-btn icon="mdi-github" aria-label="GitHub" href="https://github.com/roryrinaldo" target="_blank" rel="noopener noreferrer" variant="text" class="social-icon"></v-btn>
    </div>
    <div class="mt-6">
      <p class="footer-text" style="margin: 0">&copy; 2026. Vue 3 & Vuetify Portfolio. Developed by Rory Rinaldo</p>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 8px;
}

.social-icon {
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

<template>
  <v-app-bar scroll-behavior="hide" scroll-threshold="0" :elevation="0" theme="dark">
    <v-container>
      <div class="d-flex align-center">
        <v-app-bar-title>
          <v-btn class="d-flex font-weight-bold title text-none" variant="text" @click="scroll('home')"> <span style="color: rgb(175, 0, 245)">R</span>ynaldo.dev</v-btn>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-flex">
          <v-btn variant="text" class="font-weight-bold animated-btn" @click="scroll('about')">About</v-btn>
          <v-btn variant="text" class="font-weight-bold animated-btn" @click="scroll('skill')">Skills</v-btn>
          <v-btn variant="text" class="font-weight-bold animated-btn" @click="scroll('project')">Projects</v-btn>
          <v-btn variant="text" class="font-weight-bold animated-btn" @click="scroll('contact')">Contact</v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none">
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" temporary theme="dark">
    <v-list class="text-center">
      <v-list-item @click="scroll('home')">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('about')">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('skill')">
        <v-list-item-title>Skills</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('project')">
        <v-list-item-title>Projects</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('contact')">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation-Session',
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      if (!element) return;

      element.scrollIntoView({ behavior: 'smooth' });
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.animated-btn {
  transition: transform 0.3s ease, color 0.3s ease;
}

.animated-btn:hover {
  transform: scale(1.1);
  color: rgba(142, 5, 194, 1);
}

.title {
  font-size: 20px;
}

.title:hover {
  color: rgba(142, 5, 194, 1);
}
</style>

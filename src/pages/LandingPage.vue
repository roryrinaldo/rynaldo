<template>
  <div class="h-heading mt-n16">
    <v-container id="home" class="mt-16">
      <v-row class="mt-16 pt-lg-12" justify="center">
        <v-col cols="12" lg="9" xl="6" xxl="4" class="align-center layout-heading">
          <v-flex class="d-flex d-sm-none mt-n6" align="center">
            <v-img class="ma-5 avatar-grid-animated" aspect-ratio="1/1" max-height="300px" src="../assets/images/avatar.png" cover oncontextmenu="return false" />
          </v-flex>
          <v-flex class="d-flex flex-column title-heading">
            <h2 class="mx-4 desktop-h2">Full Stack Developer</h2>
            <h1 class="font-weight-bold mx-4 desktop-h1" style="line-height: 1.2">Rory Rinaldo</h1>

            <p class="ma-4">
              Hi there, i'm a
              <span class="font-weight-bold" style="color: rgba(142, 5, 194, 1)">Full Stack Developer</span> based in Indonesia who specializes in <i>Web</i> and <i>Mobile Development</i>
            </p>
          </v-flex>

          <v-flex class="d-none d-sm-flex">
            <v-img class="avatar-grid avatar-grid-animated" aspect-ratio="1/1" max-height="400px" src="../assets/images/avatar.png" cover oncontextmenu="return false" />
          </v-flex>
        </v-col>
      </v-row>

      <v-row justify="center" class="my-4">
        <v-col v-for="social in socialMedia" :key="social.id" cols="2" md="1" class="text-center">
          <a :href="social.link" target="_blank">
            <v-icon :icon="social.icon" size="x-large" class="social-icon"></v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container id="about" class="mt-5">
    <v-layout class="d-flex flex-column pt-15" wrap>
      <v-flex class="text-center" xs12 sm6>
        <h2 class="h2">ABOUT</h2>
        <p class="h3">to know more about me</p>
      </v-flex>
      <v-flex class="mt-5" xs12 sm6>
        <v-row>
          <v-col cols="12" md="4" class="mt-5" align="center">
            <v-img class="avatar-size" aspect-ratio="1/1" src="../assets/images/picture.png" style="background-color: #000000" oncontextmenu="return false" />
          </v-col>
          <v-col cols="12" md="8" class="text-justify">
            <v-list lines="two">
              <v-list-item-group>
                <v-list-item prepend-icon="mdi-code-tags">
                  <v-list-item-content>
                    My name is Rory Rinaldo. I'm a Full-Stack Developer based in Indonesia with 2 years of freelancing experience. Stay up-to-date with the latest technologies and trends. Passionate about creating beautiful and functional
                    web and mobile applications.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item prepend-icon="mdi-brush">
                  <v-list-item-content>
                    Proficient in UI/UX design using Figma; specializes in blending style with seamless user experiences; can create applications with modern, attractive appearances tailored to specific business needs.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item prepend-icon="mdi-school">
                  <v-list-item-content> Graduated with a Bachelor of Applied Computer in Information Systems from Vocational College of Politeknik Caltex Riau. </v-list-item-content>
                </v-list-item>

                <v-list-item prepend-icon="mdi-account-group">
                  <v-list-item-content>
                    Experienced in leadership roles within organizations; capable of leading and coordinating effectively. Skilled in both team collaboration and individual work, demonstrating adaptability and flexibility in various work
                    environments.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item prepend-icon="mdi-gamepad-variant">
                  <v-list-item-content> Outside of work, I'm an avid gamer and enjoy embarking on mountain adventures, exploring the natural beauty and challenges they offer. </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container id="skill" class="mt-5">
    <v-layout class="d-flex flex-column pt-15">
      <v-flex class="text-center">
        <h2 class="h2">SKILLS & TECHNOLOGIES</h2>
        <p class="h3">explore my expertise</p>
      </v-flex>
      <v-flex class="mt-10">
        <v-row v-for="(category, index) in categories" :key="index">
          <v-col cols="12" md="2" :class="'bg-' + category.color">
            <p class="ma-4 font-weight-bold">{{ category.title }}</p>
          </v-col>
          <v-col cols="12" md="10">
            <v-row :class="'bg-' + category.second_color">
              <v-col v-for="image in category.images" :key="image.id" cols="4" md="2">
                <v-img :src="image.src" height="100px" class="mr-4">
                  <v-tooltip activator="parent" location="bottom">{{ image.name }}</v-tooltip>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container id="project" class="mt-5">
    <v-layout class="d-flex flex-column pt-15">
      <v-flex class="text-center" xs12 sm6>
        <h2 class="h2">PROJECTS</h2>
        <p class="h3">my selected project</p>
      </v-flex>
      <v-flex class="mt-10" xs12 sm6 align="center">
        <v-row class="px-1">
          <v-col v-for="project in displayedProjects" :key="project.id" cols="12" class="mb-5">
            <v-card class="rounded-xl" theme="dark" align="left">
              <v-row>
                <v-col cols="12" md="7">
                  <v-img :src="project.imageUrl" class="rounded-xl bg-black"> </v-img>
                </v-col>
                <v-col cols="12" md="5" align-self="center">
                  <v-flex class="d-flex flex-column">
                    <v-card-title>{{ project.name }}</v-card-title>
                    <v-card-subtitle>{{ project.category }}</v-card-subtitle>
                    <v-card-text>
                      {{ project.description }}
                    </v-card-text>
                    <v-card-text>
                      Technologies:
                      <v-chip-group v-model="selection">
                        <v-chip size="small" v-for="technology in project.technologies" :key="technology">{{ technology.tech }}</v-chip>
                      </v-chip-group>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn v-if="project.githubUrl" prepend-icon="mdi-github" :href="project.githubUrl" target="_blank">Source Code</v-btn>

                      <v-btn v-if="project.liveDemoUrl" prepend-icon="mdi-web" :href="project.liveDemoUrl" target="_blank">Live Demo</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-btn class="ma-10 bg-black" @click="showMore" v-if="displayedProjects.length < projects.length" text="Show More"></v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container id="contact" class="mt-5">
    <v-layout class="d-flex flex-column pt-15">
      <v-flex class="text-center" xs12 sm6>
        <h2 class="h2">CONTACT</h2>
        <p class="h3">get in touch</p>
      </v-flex>
      <v-flex class="ma-10" align="center">
        <v-btn class="button-email" size="x-large" prepend-icon="mdi-email" text="Contact Me" href="mailto:roryrinaldo06@gmail.com" color="black"></v-btn>
        <v-breadcrumbs style="margin-top: 200px" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      categories: [
        {
          title: 'Front-End',
          color: 'grey-darken-2',
          second_color: 'grey-darken-1',
          images: [
            { id: 1, name: 'HTML', src: require('../assets/images/html.png') },
            { id: 2, name: 'CSS', src: require('../assets/images/css.png') },
            { id: 3, name: 'JavaScript', src: require('../assets/images/javascript.png') },
            { id: 4, name: 'Vue.js', src: require('../assets/images/vue.png') },
            { id: 5, name: 'Vuetify', src: require('../assets/images/vuetify.png') },
            { id: 6, name: 'Bootstrap', src: require('../assets/images/bootstrap.png') },
          ],
        },
        {
          title: 'Back-End',
          color: 'grey-lighten-3',
          second_color: 'grey-lighten-5',
          images: [
            { id: 1, name: 'Laravel', src: require('../assets/images/laravel.png') },
            { id: 2, name: 'CodeIgniter', src: require('../assets/images/codeigniter.png') },

            { id: 3, name: 'Node.JS', src: require('../assets/images/node-js.png') },
            { id: 4, name: 'ASP.Net', src: require('../assets/images/asp-net.png') },
            { id: 5, name: 'Java', src: require('../assets/images/java.png') },
            { id: 6, name: 'Kotlin', src: require('../assets/images/kotlin.png') },
          ],
        },
        {
          title: 'Database',
          color: 'grey-darken-2',
          second_color: 'grey-darken-1',
          images: [
            { id: 1, name: 'MySQL', src: require('../assets/images/mysql.png') },
            { id: 2, name: 'MongoDB', src: require('../assets/images/mongodb.png') },
            { id: 3, name: 'SQLite', src: require('../assets/images/sqlite.png') },
            { id: 4, name: 'Firebase', src: require('../assets/images/firebase.png') },
          ],
        },
        {
          title: 'Tools',
          color: 'grey-lighten-3',
          second_color: 'grey-lighten-5',
          images: [
            { id: 1, name: 'NPM', src: require('../assets/images/npm.png') },
            { id: 2, name: 'GitHub', src: require('../assets/images/github.png') },
            { id: 3, name: 'VSCode', src: require('../assets/images/vscode.png') },
            { id: 4, name: 'Figma', src: require('../assets/images/figma.png') },
            { id: 5, name: 'Android Studio', src: require('../assets/images/android-studio.png') },
          ],
        },
      ],
      socialMedia: [
        {
          id: 1,
          icon: 'mdi-instagram',

          link: 'https://www.instagram.com/rynaldo.dev',
        },
        {
          id: 2,
          icon: 'mdi-twitter',

          link: 'https://twitter.com/rory_rinaldo',
        },
        {
          id: 3,
          icon: 'mdi-linkedin',

          link: 'https://www.linkedin.com/in/roryrinaldo',
        },
        {
          id: 4,
          icon: 'mdi-github',

          link: 'https://github.com/roryrinaldo',
        },
      ],
      projects: [
        {
          id: 1,
          imageUrl: require('../assets/projects/project-1.jpg'),
          name: 'Project 1',
          category: 'Web Development',
          technologies: [
            { id: 1, tech: 'Vue.Js' },
            { id: 2, tech: 'Laravel' },
          ],
          description: 'This is a web development project that I worked on. I used Vue.js and Laravel to build a website for a local business.',
          githubUrl: 'https://github.com/roryrinaldo',
          liveDemoUrl: 'https://github.com/roryrinaldo',
        },
        {
          id: 2,
          imageUrl: require('../assets/projects/project-2.jpg'),
          name: 'Project 2',
          category: 'App Development',
          description: 'This is a mobile development project that I worked on. I used React Native to build an app for a food delivery service.',
          githubUrl: 'https://github.com/roryrinaldo',
        },
        {
          id: 3,
          imageUrl: require('../assets/projects/project-3.jpg'),
          name: 'Project 3',
          category: 'App Development',
          description: 'This is a data science project that I worked on. I used Python and machine learning to build a model that predicts customer churn.',
          githubUrl: 'https://github.com/roryrinaldo',
          liveDemoUrl: 'https://github.com/roryrinaldo',
        },
        {
          id: 4,
          imageUrl: require('../assets/projects/project-4.jpg'),
          name: 'Project 4',
          category: 'App Development',
          description: 'asdasd',
          githubUrl: 'https://github.com/roryrinaldo',
          liveDemoUrl: 'https://github.com/roryrinaldo',
        },
        {
          id: 5,
          imageUrl: require('../assets/projects/project-5.jpg'),
          name: 'Project 5',
          category: 'App Development',
          description: 'This is a data science project that I worked on. I used Python and machine learning to build a model that predicts customer churn.',
          githubUrl: 'https://github.com/roryrinaldo',
          liveDemoUrl: 'https://github.com/roryrinaldo',
        },
      ],
      displayedProjects: [],
    };
  },
  mounted() {
    this.displayedProjects = this.projects.slice(0, 2);
  },
  methods: {
    showMore() {
      const startIndex = this.displayedProjects.length;
      const endIndex = startIndex + 2;
      this.displayedProjects = [...this.displayedProjects, ...this.projects.slice(startIndex, endIndex)];
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .desktop-h1 {
    font-size: 30px;
  }
  .avatar-size {
    width: 400px;
  }
  .h-heading {
    height: auto;
  }
}
@media (min-width: 601px) {
  .h-heading {
    height: auto;
  }

  .desktop-h1 {
    font-size: 96px;
  }

  .desktop-h2 {
    font-weight: normal;
    font-size: 30px;
  }

  .avatar-size {
    width: 400px;
  }

  .layout-heading {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 16px;
    justify-content: center;
  }

  .title-heading {
    grid-column: 1;
    grid-row: 1;
  }

  .avatar-grid {
    grid-column: 2;
    grid-row: 1;
  }
}

.social-icon {
  transition: transform 0.3s ease-in-out;
  color: black;
}

.social-icon:hover {
  transform: scale(1.3);
  color: rgba(142, 5, 194, 1);
}

.avatar-grid-animated {
  animation: morph 8s ease-in-out infinite;
  border: 3px solid black;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

.h2 {
  font-size: 35px;
}

.h3 {
  font-size: 22px;
}

.button-email:hover {
  color: #ffffff !important;
  background-color: rgba(142, 5, 194, 1) !important;
  border-color: rgba(142, 5, 194, 1) !important;
}
</style>

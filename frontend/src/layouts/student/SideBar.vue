<template>
  <v-navigation-drawer v-if="shouldShowSidebar" color="primary" v-model="drawer" :rail="rail" permanent
    @click="rail = false">

    <v-list-item height="60">
      <v-list-item-title class="text-h5 text-center">Course Compass</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>




    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Recommendations" value="dashboard"
        :to="{ name: 'StudentHome' }"></v-list-item>
        <v-list-item prepend-icon="mdi-human" title="My Profile" value="profile"
        :to="{name:'StudentProfile'}"></v-list-item>
      <v-list-item prepend-icon="mdi-progress-check" title="Completed Courses" value="courses"
        :to="{ name: 'CompletedCourses' }"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-blank-variant" title="All Courses" value="allcourses"
        :to="{ name: 'AllCourses' }"></v-list-item>
        
    </v-list>

    <template v-slot:append>
      <v-list-item height="70" prepend-avatar="@/assets/user.png" :title="user"
        :subtitle="email" nav>        
      </v-list-item>
      <div class="pa-2">
        <v-btn block :to="{ name: 'Logout' }">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      drawer: true,
      rail: false,
      user: "Dummy User",
      email: "dummy@dummy.com",
    };
  },

  computed: {
    shouldShowSidebar() {
      return this.$route.meta.sidebar !== false;
    }
  },

  mounted: function() {
    this.user = sessionStorage.getItem('name')
    this.email = sessionStorage.getItem('email')
  },

  methods: {
    showCoursesDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

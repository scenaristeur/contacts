webId<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand to="/">Contacts </b-navbar-brand>
        <SolidLoginButton />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/import">Import</b-nav-item>
            <b-nav-item to="/export">Export</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            <b-nav-item to="/solidRestTest">SolidRest test</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"  v-if="webId != null">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- <b-nav-item-dropdown right>
            <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<br><br><br>

<div v-if="webId != null">

  <router-view />
  <!-- <router-link to="/tests" >Tests</router-link> -->
  <Fab class="fab" />
</div>
<div v-else>
  <b-jumbotron header="Contacts" lead="Contacts store your Contacts on your Solid POD in the rootFolder/contacts/ folder.">
    <p>For more information visit <a href="https://github.com/scenaristeur/ldp-workspace" target="_blank">github repo</a></p>
    <!-- <b-button variant="primary" href="#">More Info</b-button> -->
    <SolidLoginButton />
  </b-jumbotron>

</div>


<!-- <div id="nav">
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
</div> -->
<SolidTrackSession />
<!-- <Config /> -->
<small><i>0.1-1</i></small>
</div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    //  'Contacts': () => import('@/views/Contacts'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),
    'Fab': () => import('@/components/basic/Fab.vue')
    //  'Config': () => import('@/components/config/Config'),
    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server,
    webId: s => s.solid.webId
  }),
}
</script>



<style>
.fab {
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index:3;
}
/* This is for documentation purposes and will not be needed in your application */


/* #app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

#nav {
padding: 30px;
}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #42b983;
} */
</style>

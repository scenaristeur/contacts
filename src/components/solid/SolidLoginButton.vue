<!-- <i18n src="@/common/locales.json"></i18n> -->
<template>
  <span class="m-2">
    <b-button variant="success" v-if="webId == null" @click="login" size="sm">Login</b-button>
    <b-button variant="outline-warning" size="sm" v-else @click="logout" >Logout</b-button>
  </span>
</template>

<script>
import auth from 'solid-auth-client';
let popupUri = './solid-auth-login/popup.html';

export default {
  name: 'SolidLogin',

  methods: {
    async login() {
      console.log("login")
      let session = await auth.currentSession();
      console.log(session)
      if (!session){session = await auth.popupLogin({ popupUri });}
    },
    async logout(){
      console.log('logout')
      await  auth.logout()
    }
  },
  computed:{
    webId() {
      return this.$store.state.solid.webId
    }
  },
}
</script>

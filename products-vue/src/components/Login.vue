<template>
  <div class="login-form">
    <h2 class="login-heading">Login</h2>
    <form action="#" @submit.prevent="login">

      <div class="form-control">
        <input type="email" name="email" id="email" class="login-input" v-model="email" placeholder="Enter your Email/Username">
      </div>

      <div class="form-control mb-more">
        <input type="password" name="password" id="password" class="login-input" v-model="password" placeholder="Enter your password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Login</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('retrieveToken', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: 'products' })
        })
    }
  }
}
</script>

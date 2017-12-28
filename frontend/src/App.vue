<template>
  <div id="app">
    <app-header></app-header>
    <section>
      hola mundo      
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>

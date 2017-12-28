<template>
  <div id="app">
    <app-header></app-header>
    <section class="app-main">
      <router-view />
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>

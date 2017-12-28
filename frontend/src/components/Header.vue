<template>
  <header class="app-header">
    <h1 class="title">Proyecto</h1>
    <nav class="app-nav">
      <ul class="app-menu">
        <li class="menu-item" v-for="item in menu" :key="item.path">
          <router-link class="menu-link" :class="path === item.path ? 'active' : ''" :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
    <lang></lang>
  </header>
</template>

<script>
export default {
  mounted () {
    this.path = this.$route.path;
  },
  data () {
    return {
      path: '/',
      menu: [
        { path: '/', label: 'Inicio' },
        { path: '/form', label: 'Formulario' }
      ]
    };
  },
  watch: {
    '$route' (to, from) {
      this.path = to.path;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.app-header {
  overflow: hidden;
  
  h1 {
    text-align: center;
    margin: 30px 0 10px;
  }
}

.app-nav {
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  text-align: center;
}

.app-menu {
  list-style: none;
  padding: 0;
  display: inline-block;
  margin: 0 auto;

  .menu-item {
    display: inline-block;
    text-transform: uppercase;
  }

  .menu-link {
    line-height: 42px;
    text-decoration: none;
    color: #333;
    padding: 0 15px;
    display: inline-flex;
    font-size: .9rem;
    position: relative;
    transition: all ease .3s;
    outline: 0;

    &:before {
      content: '';
      transition: all ease .3s;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      height: 2px;
    }

    &:hover, &.active {
      color: $primary;

      &:before {
        background-color: $primary;
      }
    }

    &:active, &:focus {
      outline: 0;
    }
  }
}
</style>

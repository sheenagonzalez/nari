<template>
  <div :class="this.$route.name != 'index' || menuToggled ? 'wrapper-solid' : 'wrapper'">
    <div class="navHeader">
      <figure class="brand">
        <Logo />
      </figure>
      <div class="hamburger-menu" v-on:click="menuToggled = !menuToggled">
        <fa v-if="!menuToggled" icon="bars" />
        <fa v-if="menuToggled" icon="times" />
      </div>
    </div>
    <nav class="menu" v-show="menuToggled">
      <ul>
        <li class="menu-item"><nuxt-link to="/">About</nuxt-link></li>
        <DropdownMobile title="Events" :items="events" />
        <li class="menu-item"><nuxt-link to="/research">Research</nuxt-link></li>
        <li class="menu-item"><nuxt-link to="/">Projects</nuxt-link></li>
        <DropdownMobile title="Advanced Air Mobility" :items="aam" />
      </ul>
    </nav>
  </div>
</template>

<script>
import DropdownMobile from "./DropdownMobile.vue";
import Logo from "./Logo.vue";

export default {
  name: "AppHeaderMobile",
  components: "DropdownMobile",
  props: ["events", "aam"],
  components: {
    Logo,
    DropdownMobile
  },
  data() {
    return {
        searchToggled: false,
        menuToggled: false
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  width: 100%;
  z-index: 1000;
  &-solid {
    background-color: $med-blue;
  }
}
.navHeader {
  @include row;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  .brand {
    width: 6rem;
    margin-left: 1rem;
  }
  .hamburger-menu {
    color: white;
    position: absolute;
    right: 1rem;
    font-size: 1.5rem;
  }
}
.menu {
  background-color: $med-blue;
  width: 100%;
  color: white;
  height: 100%;
  margin: 0 1rem;
  padding: .5rem 0 1rem;
  .menu-item {
    font: $subheadline;
    padding: .5rem 0;
  }
}
</style>

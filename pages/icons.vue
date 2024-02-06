<template>
  <div class="icons">
    <template v-for="icon in icons">
      <div class="icons__icon">
        <p class="icons__icon-name">{{icon}}</p>
        <nuxt-logo class="icons__icon-logo" />
      </div>
    </template>
  </div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue';

export default {
  name: 'icons',
  components: {
    NuxtLogo
  },
  data() {
    return {
      count: 25,
    };
  },
  computed: {
    icons () {
      const res = [];
      for (let i = 0; i < this.count; i++) {
        res.push(i);
      }
      return res;
    }
  }
}
</script>

<style>
.icons {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 100px);
  grid-column-gap: 15px;
}

.icons__icon-logo {
  width: 100%;
}
</style>

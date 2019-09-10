<template>
  <header class="navbar">
    <Icon
      v-if="menuLeft.icon"
      :icon="menuLeft.icon"
      class-name="menu"
      @action="menuLeft.action"
    />
    <div class="brand">
      <img src="/img/naynco.png" />
    </div>
    <Icon
      v-if="menuRight.icon"
      :icon="menuRight.icon"
      class-name="menu"
      @action="menuRight.action"
    />
  </header>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  name: "Navbar",
  components: {
    Icon
  },
  props: {
    title: { type: String, default: "title" },
    menuLeft: {
      type: Object,
      default: () => {
        return {
          icon: null,
          action: () => {
            return
          }
        }
      }
    },
    menuRight: {
      type: Object,
      default: () => {
        return {
          icon: null,
          action: () => {
            return
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  align-items: center;
  background-color: #fff;
  border-bottom: solid 0.5px #aaa;
  box-shadow: 0px 8px 4px -4px rgba(150, 150, 150, 0.1);
  display: flex;
  flex-direction: row;
  height: 72px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background: #000;
}

.brand {
  padding: 1.45rem 1.0875rem;
}
.brand img{
  height: 68px;
}
</style>

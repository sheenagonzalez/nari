<template>
  <div class="menu-item" @click="isOpen = !isOpen" v-on-clickaway="away">
        <!-- Menu Item -->
        <div class="title">{{ title }}</div>
        <div class="arrow-down">
            <fa v-if="!isOpen" icon="chevron-down" />
            <fa v-if="isOpen" icon="chevron-up" />
        </div>
        <!-- Sub-menu -->
        <transition name="fade" appear>
        <div class="submenu" v-if="isOpen">
            <div class="submenu-item" v-for="(item, i) in items" :key="i">
                <nuxt-link :to=item.path>
                    {{ item.sublink }}
                </nuxt-link>
            </div>
        </div>
        </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
    name: "Dropdown",
    props: ["title", "items"],
    mixins: [clickaway],
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        away() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";
.menu-item {
    @include row;
}
svg {
    font-size: .75rem;
    margin-left: 1rem;
}
.submenu {
    position: absolute;
    background-color: $grey;
    color: $med-blue;
    top: 4rem;
    transform: translate(-1rem, -.75rem);
    width: 16rem;
    border-radius: 0 0 $m-corner $m-corner;
    box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.2);

    &-item {
        padding: 1rem;
    }
    &-item:hover {
        background: $bluish-grey;
        color: $med-blue;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: all .2s cubic-bezier(.5,2,0,3);
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translate(-1rem, -1.5rem);
    border-radius: $m-corner;
}
</style>
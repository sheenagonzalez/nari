<template>
    <div :class="this.$route.name == 'index' ? 'wrapper' : 'wrapper-solid'">
        <nav>
            <figure class="brand">
                <Logo />
            </figure>
            <ul class="menu">
                <li class="menu-item"><nuxt-link to="/about">About</nuxt-link></li>
                <Dropdown title="Events" :items="events" />
                <li class="menu-item"><nuxt-link to="/research">Research</nuxt-link></li>
                <li class="menu-item"><nuxt-link to="/projects">Projects</nuxt-link></li>
                <Dropdown title="Advanced Air Mobility" :items="aam" />    
            </ul>
            <div class="right-container">
                <div class="search">
                    <fa :class="searchToggled ? 'search-expand' : 'search-minimize'" v-on:click="searchToggled = !searchToggled" icon="search" />
                    <input v-if="searchToggled" class="search-input" type="text" placeholder="Search ..." />
                </div>
                <div class="news"><nuxt-link to="/">News</nuxt-link></div>
            </div>
        </nav>
    </div>
</template>

<script>
import Logo from "./Logo";
import Dropdown from "./Dropdown";

export default {
    name: "AppHeader",
    props: ["events", "aam"],
    components: {
        Logo,
        Dropdown
    },
    data() {
        return {
            searchToggled: false
        }
    },
}
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
nav {
    @include row;
    align-items: center;
    width: 100%;
    height: 4.5rem;
    .brand {
        width: 8rem;
        margin-left: 3.5rem;
        margin-right: 2.25rem;
    }
    .menu {
        @include row;
        margin-right: 1rem;

        &-item {
            padding: .5rem 1rem;
            color: white;
        }
        &-item:hover {
            background-color: $bluish-grey;
            color: $med-blue;
            border-radius: $s-corner;
            transition: 0.4s;
            cursor: pointer;
        }
    }
    .right-container {
        @include row;
        align-items: center;
        position: absolute;
        right: 3.5rem;
        .search {
            @include field-wrapper;
            &-expand {
                @include field-icon;
                height: 1rem;
                width: 1rem;
                position: relative;
                right: -5rem;
                transform: translateX(-3.25rem);
                transition: transform linear .2s;
                cursor: pointer;
            }
            &-minimize {
                color: white;
                position: relative;
                left: -5rem;
                transform: translateX(5rem);
                transition: transform linear .2s;
                cursor: pointer;
            }
            &-input {
                @include field-input;
                width: 9rem;
                height: 1.875rem;
                padding-left: 2rem;
                transform: scaleX(10rem);
                transition: transform linear 1s;
            }
        }
        .news {
            color: white;
            border: .0825rem solid white;
            border-radius: $s-corner;
            padding: .125rem 1.25rem;
            margin-left: 1rem;
        }
    }
}
</style>
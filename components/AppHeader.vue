<template>
    <nav>
        <figure class="brand">
            <Logo />
        </figure>
        <div class="right-container">
            <ul class="menu">
                <li class="menu-item"><nuxt-link to="/about">About</nuxt-link></li>
                <Dropdown title="Projects" :items="projects" />
                <Dropdown title="Partners" :items="partners" />
                <Dropdown title="Events" :items="events" />
            </ul>
            <div class="search">
                <fa icon="search" />
                <input type="text" placeholder="Search ..." />
            </div>
        </div>
    </nav>
</template>

<script>
import Logo from "./Logo";
import Dropdown from "./Dropdown";

export default {
    name: "AppHeader",
    props: ["projects", "partners", "events"],
    components: {
        Logo,
        Dropdown
    },
}
</script>

<style scoped lang="scss">
nav {
    @include row;
    align-items: center;
    width: 100%;
    height: 4rem;
    background: $med-blue;
    .brand {
        width: 20rem;
        position: absolute;
        left: 3rem;
    }
    .right-container {
        @include row;
        align-items: center;
        position: absolute;
        right: 3rem;
        .menu {
            @include row;
            margin-right: 1rem;

            &-item {
                padding: .5rem 1rem;
                color: white;
            }
            &-item:active, &-item:hover {
                background-color: $bluish-grey;
                color: $med-blue;
                border-radius: $s-corner;
                transition: 0.4s;
                cursor: pointer;
            }
        }
        .search {
            @include input-field;
            svg {
                height: 1rem;
                width: 1rem;
            }
            input[type=text] {
                width: 10rem;
                height: 2rem;
                padding-left: 2rem;
                text-decoration: underline;
            }
        }
    }
}
</style>
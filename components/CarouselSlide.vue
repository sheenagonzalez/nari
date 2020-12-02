<template>
    <div v-show="visibleSlide == index">
        <slot>
            <div>
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <button>Learn more ></button>
            </div>
            <div>
                <img v-bind:src="~/assets/img/ + 'fileName'" />
                <p class="caption">{{ caption }}</p>
                <p class="caption">{{ credits }}</p>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "CarouselSlide",
    props: ["title", "description", "link", "fileName", "caption", "credits", "visibleSlide", "index"]
}
</script>

<style scoped lang="scss">

h1 {
    font: $headline;
}
.caption {
    font: $caption;
}
</style>
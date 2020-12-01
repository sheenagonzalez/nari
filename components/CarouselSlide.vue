<template>
    <div v-show="visibleSlide === index">
        <slot>
            <div>
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <button>Learn more ></button>
            </div>
            <div>
                <img :src="imageSource" />
                <p class="caption">{{ imageCaption }}</p>
                <p class="caption">{{ imageCredits }}</p>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "CarouselSlide",
    props: ["title", "description", "link", "imageSource", "imageCaption", "imageCredits", "visibleSlide", "index"]
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
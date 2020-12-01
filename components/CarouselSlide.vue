<template>
    <div>
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
    props: ["title", "description", "link", "imageSource", "imageCaption", "imageCredits"]
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

h1 {
    font: $headline;
}
.caption {
    font: $caption;
}
</style>
<template>
    <div class="carousel">
        <nav>
            <div v-for="(slide, i) in slides" :key="i">
                <div v-show="visibleSlide == i" class="box"></div>
                <button v-bind:class="[visibleSlide == i ? 'current' : '']" v-on:click="updateVisibleSlide(i)">{{ slide.for }}</button>
            </div>
        </nav>
        <div class="slides">
            <EventCarouselSlide v-for="(slide, i) in slides" :key="i"
                :index="i"
                :title="slide.title"
                :description="slide.description"
                :buttonLinkText="slide.buttonLinkText"
                :buttonLink="slide.buttonLink"
                :visibleSlide="visibleSlide"
            />
        </div>
    </div>
</template>

<script>
import EventCarouselSlide from "~/components/EventCarouselSlide.vue";

export default {
    name: "EventCarousel",
    components: [
        EventCarouselSlide
    ],
    props: ["visibleSlide", "slides"],
    methods: {
        updateVisibleSlide(index) {
           this.visibleSlide = index;
        }
    }

}
</script>

<style scoped lang="scss">

.carousel {
    @include row;
}
nav {
    margin-right: 1.5rem;
    margin-top: 2.5rem;
    button {
        font: $subheadline;
        margin: 1rem 0 1rem 5rem;
        padding: .5rem 0;
        width: 11.5rem;
        height: 4.5rem;
        display: flex;
        align-items: center;
        text-align: left;
        position: relative;
        z-index: 1;
        outline: none;
        &:hover {
            border-bottom: .0625rem solid $bluish-grey;
            border-radius: $s-corner;
            box-sizing: border-box;
            margin-bottom: .925rem;
        }
    }
    .current {
        z-index: 3;
        font: $subheadline;
        font-weight: bold;
        &:hover {
            border: none;
            cursor: default;
            margin-bottom: 1rem;
        }
    }
    .box {
        z-index: 2;
        width: 24.25rem;
        height: 4.5rem;
        position: absolute;
        background-color: $light-blue;
        opacity: .5;
        left: -3rem;
        border-radius: $s-corner;
    }
}
</style>
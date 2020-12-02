<template>
    <div class="carousel">
        <nav>
            <div v-for="(name, i) in items" :key="i">
                <div v-show="visibleSlide == i" class="box"></div>
                <button v-bind:class="[visibleSlide == i ? 'current' : '']" v-on:click="updateVisibleSlide(i)">{{ name }}</button>
            </div>
        </nav>
        <CarouselSlide v-for="(slide, i) in slides" :key="i"
            :index="i"
            :title="slide.title"
            :description="slide.description"
            :link="slide.link"
            :fileName="slide.fileName"
            :caption="slide.caption"
            :credits="slide.credits"
            :visibleSlide="visibleSlide"
        />
    </div>
</template>

<script>
import CarouselSlide from "~/components/CarouselSlide.vue";

export default {
    name: "Carousel",
    components: [
        CarouselSlide
    ],
    props: ["items", "visibleSlide", "slides"],
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
    margin-right: 6rem;
    margin-top: 2.5rem;
    button {
        font: $subheadline;
        margin: 1rem 0 1rem 5rem;
        padding: .5rem 0;
        width: 10rem;
        text-align: left;
        position: relative;
        z-index: 1;
        outline: none;
        &:hover {
            height: 2.7rem;
            border-bottom: .0625rem solid $bluish-grey;
            border-radius: $s-corner;
            box-sizing: border-box;
        }
    }
    .current {
        z-index: 3;
        font: $subheadline-bold;
        &:hover {
            border: none;
            cursor: default;
        }
    }
    .box {
        z-index: 2;
        width: 24.25rem;
        height: 4.5rem;
        position: absolute;
        background-color: $light-blue;
        opacity: .5;
        left: 0;
        border-radius: $s-corner;
    }
}
</style>
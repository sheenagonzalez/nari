<template>
    <div class="carousel">
        <slot></slot>
        <nav class="item" v-for="(name, i) in items" :key="i">
            <div v-show="visibleSlide == i" class="box"></div>
            <button v-bind:class="[visibleSlide == i ? 'current' : '']" v-on:click="updateVisibleSlide(i)">{{ name }}</button>
        </nav>
        <div class="card">
            <CarouselSlide v-for="(slide, i) in slides" :key="i"
                :index="i"
                :title="slide.title"
                :description="slide.description"
                :link="slide.link"
                :imageSource="slide.fileName"
                :imageCaption="slide.caption"
                :imageCredits="slide.credits"
                :visibleSlide="visibleSlide"
            />
        </div>
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

button {
    font: $subheadline;
    margin: 1.5rem 0;
    width: 10rem;
    text-align: left;
    position: relative;
    z-index: 1;
    position: relative;
    outline: none;
}
.box {
    width: 25rem;
    height: 4.5rem;
    position: absolute;
    background-color: $light-blue;
    opacity: .5;
    z-index: -1;
    left: 0;
    border-radius: $s-corner;
}
.card {
    width: 40rem;
    height: 20rem;
    padding: 1rem;
    background-color: white;
    border-radius: $m-corner;
}
.current {
    font: $subheadline-bold;
}
</style>
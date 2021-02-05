<template>
    <transition name="fade" appear>
        <div class="slide" v-show="visibleSlide == index">
            <slot>
                <div class="left">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <a target="_blank" :href="buttonLink" class="button">{{ buttonLinkText }}</a>
                </div>
                <div class="right">
                    
                </div>
            </slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: "EventCarouselSlide",
    props: ["title", "description", "buttonLinkText", "buttonLink", "visibleSlide", "index"],
    computed: {
        imgLink() {
        // Return nothing for the default empty string
        if (!this.fileName) {
            return;
        }
        const fileName = this.fileName.toLowerCase();
        // Request the image as a webpack module by using `require`
        return require(`~/assets/img/${fileName}`);
        },
        creds() {
        if (!this.credits) {
            return;
        }
        return `Credits: ${this.credits}`;
        }
    },
}
</script>

<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
    transform: translate(0, 0);
    transition: transform .5s, opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translate(-3rem, 0);
    transition: all 0s,
}
.slide {
    white-space: pre-wrap;
    @include row;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 2.5rem 3rem 4rem 6rem;
    background-color: white;
    border-radius: $m-corner;
    .left {
        width: 45%;
        margin-right: 4%;
        h1 {
            font: $headline;
            margin-bottom: 1rem;
        }
        p {
            margin-bottom: 3rem;
        }
        .button {
            @include button;
        }
    }
    .right {
        width: 51%;
        img {
            width: 100%;
        }
        .caption {
            margin-top: .75rem;
            font: $caption;
            line-height: 1.5;
        }
        .credits {
            font-style: italic;
        }
    }
}
</style>
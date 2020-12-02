<template>
    <transition name="fade" appear>
        <div class="slide" v-show="visibleSlide == index">
            <slot>
                <div class="left">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <a :href="link" class="button">Learn more ></a>
                </div>
                <div class="right">
                    <img :src="imgLink" :alt="fileName"/>
                    <p class="caption">
                        {{ caption }}
                        <span class="credits">{{ creds }}</span>
                    </p>
                    
                </div>
            </slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: "CarouselSlide",
    props: ["title", "description", "link", "fileName", "caption", "credits", "visibleSlide", "index"],
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
    transform: translate(3rem, 0);
    transition: all 0s,
}
.slide {
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
            padding: .75rem 1.75rem;
            color: $dark-blue;
            border: .0625rem solid $bluish-grey;
            border-radius: $s-corner;
            &:hover {
                border-color: $med-blue;
                background-color: $med-blue;
                color: white;
                transition: .5s;
            }
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
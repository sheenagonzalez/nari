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
                    <h2>{{ subgroupHeader }}</h2>
                    <div class="subgroup" v-for="(group, i) in subgroups" :key="i">
                        <h2>{{ group.name }}</h2>
                        <p class="groupLead" v-if="group.groupLead">Led by {{ group.groupLead }}</p>
                        <p class="blurb" v-if="group.blurb">{{ group.blurb }}</p>
                    </div>
                    <div v-for="(link, l) in links" :key="l">
                        <a class="link" :href="link.link" target="_blank">
                            <h2>{{ link.name }}</h2>
                            <fa icon="arrow-right" />
                        </a>
                    </div>
                </div>
            </slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: "EventCarouselSlide",
    props: ["title", "description", "buttonLinkText", "buttonLink", "visibleSlide", "index", "subgroups", "subgroupHeader", "links"],
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
            white-space: pre-wrap;
        }
        .button {
            @include button;
        }
    }
    .right {
        @include column;
        margin-top: 1rem;
        width: 38%;
        border-left: solid 1px $bluish-grey;
        padding: 0 2rem;
        h2 {
            font: $subheadline;
        }
        .subgroup {
            margin-top: 1.5rem;
            .groupLead {
                font: $caption;
                margin: .25rem 0;
            }
            .blurb {
                margin-top: .5rem;
                white-space: pre-wrap;
            }
        }
        .link {
            margin-top: 1rem;
            text-decoration: underline;
            position: relative;
            @include row;
            h2 {
                width: 17rem;
                margin-bottom: .5rem;
            }
        }
        .link:hover {
            color: $light-blue;
        }
    }
}
</style>
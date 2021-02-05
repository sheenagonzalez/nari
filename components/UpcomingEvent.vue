<template>
    <div :class="['card', isToggled ? 'toggledCard' : 'thumbnailCard']" v-on:click="isToggled = !isToggled" v-on-clickaway="away">
        <div class="image" v-if="imgFileName">
            <img :src="require(`~/assets/img/${imgFileName}`)" />
        </div>
        <div class="text">
            <div class="button">
                <fa icon="plus-circle" v-show="!isToggled" />
                <fa icon="minus-circle" v-show="isToggled"/>
                <span v-show="!isToggled">EXPAND</span>
                <span v-show="isToggled">MINIMIZE</span>
            </div>
            <div class="title">
                <h2>{{ title }}</h2>
            </div>
            <div class="details">
                <div class="item description" v-if="isToggled && description">
                    <h3>Description</h3>
                    <p>{{ description }}</p>
                </div>
                <div class="wrapper">
                    <div class="item" v-if="speakers">
                        <h3>Speakers</h3>
                        <p>{{ speakers }}</p>
                    </div>
                    <div class="item">
                        <h3>Date</h3>
                        <p v-if="date">{{ date }}</p>
                        <p v-if="!date">TBA</p>
                    </div>
                    <div class="item">
                        <h3>Time</h3>
                        <p v-if="time">{{ time }}</p>
                        <p v-if="!time">TBA</p>
                    </div>
                    <div class="item" v-if="isToggled && links">
                        <h3>Links</h3>
                        <div v-for="(link, l) in links" :key="l">
                            <a class="link" :href="link.link" target="_blank">
                                <h2>{{ link.name }}</h2>
                                <fa icon="arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
    name: "UpcomingEvent",
    props: ["title", "description", "speakers", "date", "time", "links", "imgFileName"],
    mixins: [clickaway],
    data() {
        return {
            isToggled: false,
        }
    },
    methods: {
        away() {
            this.isToggled = false;
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    background-color: white;
    border-radius: $m-corner;
    margin-bottom: 2.25rem;
    cursor: pointer;
    .image img {
        max-height: 10rem;
        width: 100%;
        object-fit: cover;
        border-radius: $m-corner $m-corner 0 0;
    }
    .text {
        padding: 2rem 6rem 1rem 4rem;
        position: relative;
        .button {
            position: absolute;
            cursor: pointer;
            @include column;
            align-items: center;
            top: 2.5rem;
            right: 3rem;
            color: $med-blue;
            svg {
                width: 2rem;
                height: 2rem;
            }
            span {
                font: $caption;
                color: $bluish-grey;
                position: absolute;
                top: 2.5rem;
            }
        }
        .title {
            font: $headline;
            width: 90%;
            margin-bottom: 1rem;
        }
        .details {
            .item {
                margin-bottom: 1rem;
                width: 100%;
                margin-right: 2rem;
                h3 {
                    color: $bluish-grey;
                    margin-bottom: .25rem;
                }
                p {
                    white-space: pre-wrap;
                }
            }
            .wrapper {
                @include row;
            }
        }
    }
}
.thumbnailCard {
    :hover {
        background-color: $med-blue;
        color: white;
        transition: .2s;
        .details {
            .item {
                h3 {
                    color: $grey;
                }
            }
        }
        .button {
            color: white;
            span {
                color: $grey;
            }
        }
    }
}
.toggledCard {
    background-color: white;
    color: $not-so-black;
    cursor: default;
    .image img {
        width: 100%;
        max-height: 20rem;
        object-fit: cover;
        border-radius: $m-corner $m-corner 0 0;
        transition: .5s;
    }
    .text {
        .details {
            .description {
                width: 100%;
                margin-right: 6rem;
                
            }
            @include row;
            .wrapper {
                @include column;
                .item {
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 1rem;
                    .link {
                        font: $subheadline;
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
        }
    }
}
</style>
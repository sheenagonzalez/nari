<template>
    <div v-bind:class="['card', isToggled ? 'toggledCard' : '']" v-on:click="isToggled = !isToggled">
        <div class="header">
            <div class="expand button" v-show="!isToggled">
                <span>EXPAND</span>
                <fa icon="plus-circle" />
            </div>
            <div class="minimize button" v-show="isToggled">
                <span>MINIMIZE</span>
                <fa icon="minus-circle" />
            </div>
            <p class="type">{{ category }}<span v-if="subCategory && category"> • </span>{{ subCategory }}</p>
            <h1>{{ title }}</h1>
            <p class="date">{{ date }}</p>
        </div>
        <transition name="fade" appear>
            <div class="info" v-if="isToggled">
                <div>
                    <div class="item" v-if="description">
                        <h2>Description</h2>
                        <p>{{ description }}</p>
                    </div>
                    <div class="item">
                        <h2>Files & Recordings </h2>
                        <p v-if="!video && !slides">--</p>
                        <div class="attachments">
                            <div class="video">
                                <a v-if="video" :href="video" target="_blank" v-on:click="isToggled = !isToggled">
                                    <div class="wrapper">
                                        <img src="~/assets/img/adobe_connect_logo.png" />
                                        <div class="overlay"></div>
                                        <fa icon="play-circle" />
                                    </div>
                                </a>
                            </div>
                            <div class="pdfs">
                                <a v-if="slides" :href="slides" target="_blank" v-on:click="isToggled = !isToggled">
                                    <div class="wrapper">
                                        <iframe :src="slides + '#view=Fit'"></iframe>
                                        <div class="overlay"></div>
                                        <fa icon="file-pdf" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="item" v-if="speakers">
                        <h2>Speaker(s)</h2>
                        <p>{{ speakers }}</p>
                    </div>
                    <div class="item" v-if="organization">
                        <h2>Organization</h2>
                        <p>{{ organization }}</p>
                        <p>--</p>
                    </div>
                    <div class="item" v-if="tags">
                        <h2>Tags</h2>
                        <p>{{ tags }}</p>
                    </div>
                    <div class="item" v-if="platform">
                        <h2>Platform</h2>
                        <p>{{ platform }}</p>
                    </div>
                    <div class="item" v-if="links">
                        <h2>Links</h2>
                        <a :href="links" target="_blanks" class="more" v-if="links">
                            Learn More
                            <fa icon="arrow-right"/>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Event",
    props: [
        "category", 
        "subCategory", 
        "title", 
        "date",
        "description",
        "slides",
        "video",
        "speakers",
        "organization",
        "platform",
        "links",
        "tags",
    ],
    data() {
        return {
            isToggled: false
        }
    },
    methods: {
        getThumbnailURL() {
            if (this.platform.toLowerCase() == 'adobe connect') {
                return '/_nuxt/assets/img/adobe_connect_logo.png';
            }
            if (this.platform.toLowerCase() == 'youtube') {
                var url = this.video;
                // CODE SNIPPET SOURCE: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                var match = url.match(regExp);
                url = (match&&match[7].length==11)? match[7] : false;
                // end of code snippet
                return 'https://img.youtube.com/vi/' + url + '/0.jpg';
            }
            else {
                return '/_nuxt/assets/img/plane-icon.svg';
            }
        }
    }
}
</script>

<style scoped lang="scss">

.card {
    background-color: white;
    border-radius: $m-corner;
    padding: 1.5rem 1.5rem;
    margin: 1rem 0;
    cursor: pointer;
    h1 {
        font: $subheadline;
        line-height: 1.5;
        margin: .25rem 0;
        max-width: 45rem;
    }
    h2, .type, .date {
        color: $bluish-grey;
    }
    .button {
        text-align: right;
        position: absolute;
        right: 6.5rem;
        color: $med-blue;
        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
        span {
            font: $caption;
            color: $bluish-grey;
            position: absolute;
            top: .4rem;
            right: 2.25rem;
        }
    }
    &:hover {
        background-color: $bluish-grey;
        color: $grey;
        transition: .2s;
        h2, .type, .date, span {
            color: $grey;
            transition: .2s;
        }
        .button {
            color: white;
        }
    }
    .info {
        display: grid;
        grid-template-columns: 50% fit-content(28%);
        grid-gap: 6rem;
        margin-top: 1rem;
        .item {
            margin-bottom: 1rem;
            p {
                white-space: pre-wrap;
            }
            .more {
                @include button-alt;
                position: relative;
                top: 1.5rem;
                svg { 
                    margin-left: .5rem;
                }
            }
            .attachments {
                margin-top: .5rem;
                .video {
                    margin-bottom: 1rem;
                    .wrapper {
                        width: 21rem;
                        height: 15rem;
                        svg {
                            left: 9.25rem;
                            top: 6.25rem;
                        }
                    }
                }
                .pdfs {
                    @include row;
                    .wrapper {
                        width: 10rem;
                        height: 10rem;
                        svg {
                            left: 3.75rem;
                            top: 3.75rem;
                        }
                    }
                }
                .wrapper {
                    position: relative;
                    margin-right: 1rem;
                    img, iframe {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .overlay {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: $med-blue;
                        opacity: 0.5;
                    }
                    svg {
                        position: absolute;
                        font-size: 2.5rem;
                    }
                }
            }
        }
    }
}
.toggledCard {
    background-color: $med-blue;
    border-radius: $l-corner;
    color: white;
    transition: .2s;
    &:hover {
        background-color: $med-blue;
        color: white;
        transition: .2s;
        h2, .type, .date, span {
            color: $bluish-grey;
        }
    }
    .button {
        color: white;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: transform .5s, background-color .1s, color 1s, border-radius 1s;
}
.fade-enter,
.fade-leave-to {
    transform: translate(0rem, -1rem);
    transition: all 0s;
}
</style>
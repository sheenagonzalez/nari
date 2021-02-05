<template>
    <div v-bind:class="['card', isToggled ? 'toggledCard' : '']" v-on:click="isToggled = !isToggled" v-on-clickaway="away">
        <div class="header">
            <div class="expand button" v-show="!isToggled">
                <span>EXPAND</span>
                <fa icon="plus-circle" />
            </div>
            <div class="minimize button" v-show="isToggled">
                <span>MINIMIZE</span>
                <fa icon="minus-circle" />
            </div>
            <p class="type">{{ researchType }} • {{ phase }}</p>
            <h1>{{ title }}</h1>
            <p class="date">{{ startDate }} - {{ endDate }}</p>
        </div>
        <transition name="fade" appear>
            <div class="info" v-if="isToggled">
                <div>
                    <div class="item" v-if="description">
                        <h2>Description</h2>
                        <p>{{ description }}</p>
                    </div>
                    <div class="item">
                        <h2>Attachments </h2>
                        <p v-if="!video && !slides && !report && !additionalAttachment">--</p>
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
                                <a v-if="report" :href="report" target="_blank" v-on:click="isToggled = !isToggled">
                                    <div class="wrapper">
                                        <iframe :src="report + '#view=Fit'"></iframe>
                                        <div class="overlay"></div>
                                        <fa icon="file-pdf" />
                                    </div>
                                </a>
                                <a v-if="additionalAttachment" :href="additionalAttachment" target="_blank" v-on:click="isToggled = !isToggled">
                                    <div class="wrapper">
                                        <iframe :src="additionalAttachment + '#view=Fit'"></iframe>
                                        <div class="overlay"></div>
                                        <fa icon="file-pdf" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="item">
                        <h2>Principal Investigator</h2>
                        <p>{{ principalInvestigator }}</p>
                    </div>
                    <div class="item" v-if="organization">
                        <h2>Organization</h2>
                        <p>{{ organization }}</p>
                    </div>
                    <div class="item" v-if="coInvestigators">
                        <h2>Co-Investigators</h2>
                        <p>{{ coInvestigators }}</p>
                    </div>
                    <div class="item" v-if="tags">
                        <h2>Tags</h2>
                        <p>{{ tags }}</p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
    name: "ResearchCard",
    props: [
        "researchType", 
        "phase", 
        "title", 
        "startDate",
        "endDate",
        "description",
        "video",
        "slides",
        "report",
        "additionalAttachment",
        "principalInvestigator",
        "organization",
        "coInvestigators",
        "tags"
    ],
    data() {
        return {
            isToggled: false
        }
    },
    mixins: [clickaway],
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
        cursor: pointer;
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
    cursor: default;
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
<template>
    <div>
        <section id="welcome">
            <div class="overlay"></div>
            <video loop muted autoplay src="~/assets/videos/naridev-bg-video.mp4" />
            <div class="text">
                <p>NASA Aeronautics Research Institute</p>
                <h1>Meeting future <br><b>aviation needs.</b></h1>
                <div class="mission">
                    <p><fa v-on:click="showMission = !showMission" icon="info-circle" />Our Mission</p>
                    <p v-bind:class="[showMission ? 'description-show' : 'description-hide']" >NARI’s mission is to serve NASA internal and external customers by researching unexplored areas, collaborations, and value-added partnerships.</p>
                </div>
                <div class="continue">
                    <nuxt-link to="#updates"><fa icon="chevron-down" />CONTINUE</nuxt-link>
                </div>
            </div>
        </section>
        <img class="pattern overlay background" id="pattern-one" src="~/assets/img/full-pattern.png"/>
        <section id="updates">
            <div>
                <h2>Latest News</h2>
                <h1>What's <b>Up in the Air?</b></h1>
                <ButtonCard class="button-card" v-for="(article, i) in articles" :key="i"
                    :title="article.title"
                    :date="article.date"
                    :snippet="article.snippet"
                    :link="'https://www.iata.org' + article.link"
                    type="article"
                    :typeInfo="article.readTime"
                />
                <div class="more"><a target="_blank" href="https://www.iata.org/en/programs/ops-infra/air-traffic-management/up-in-the-air-blog/">Explore IATA Blog ></a></div>
            </div>
            <div>
                <h2>Upcoming Events</h2>
                <h1>Steering <b>Ahead</b></h1>
                <div class="wrapper-fill" v-if="events.length > 0">
                    <ButtonCard class="button-card" v-for="(event, i) in events" :key="i"
                        :title="event.title"
                        :date="event.date"
                        :snippet="event.snippet"
                        :link="event.link"
                        type="event"
                        :typeInfo="event.type"
                    />
                </div>
                <div class="wrapper-empty" v-if="events.length == 0">
                    <p>There are no upcoming events.</p>
                </div>
                <!-- TO DO: Put link when events page is done -->
                <!-- <nuxt-link to="~/pages/events">Go to Events ></nuxt-link> -->
                <div class="more"><nuxt-link to="">See All Events ></nuxt-link></div>
            </div>
        </section>
        <img class="pattern background" id="pattern-two" src="~/assets/img/full-pattern.png"/>
        <section id="projects">
        </section>
        <section id="footprint">
        </section>
        <section id="subscribe">
        </section>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'NASA Aeronautics Research Institute',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'NASA Aeronautics Research Institute (NARI) operates at the nexus of industry, government and academia with an outward-facing approach to monitor trends and ...',
                },
            ]
        }
    },
    data() {
        return {
            showMission: false,
            articles:
            [
                {
                    title: "Long Haul to Recovery",
                    readTime: "7 min",
                    date: "Oct. 5, 2020",
                    snippet: "Volume V provides key insights into the socioeconomic externalities that arise due to the impact of COVID-19 on the aviation industry. A fresh outlook that promotes tech advancement and digital transformation will be key to overcoming the challenges on the road to recovery.",
                    link: "/en/programs/ops-infra/air-traffic-management/up-in-the-air-blog/long-haul-to-recovery/",
                },
                {
                    title: "A Better Future for ATM",
                    readTime: "7 min",
                    date: "Sep. 18, 2020",
                    snippet: "The fourth edition provides a futuristic perspective on opportunities to transform the current ATM system. We discuss the critical need for new thinking and technological innovation as we look to evolve beyond the constraints of legacy systems.",
                    link: "/en/programs/ops-infra/air-traffic-management/up-in-the-air-blog/a-better-future-for-atm/",
                },
                {
                    title: "Recalibrating Capacity",
                    readTime: "7 min",
                    date: "Sep. 2, 2020",
                    snippet: "Volume III focuses on the importance of recalibrating aviation system capacities due to the emergence of COVID-19, including the importance of accommodating new stressors and envisioning future capacity requirements.",
                    link: "/en/programs/ops-infra/air-traffic-management/up-in-the-air-blog/recalibrating-capacity/",
                },
            ],
            events: [
                {
                    title: "Human Factors",
                    type: "AAM Event",
                    date: "Dec. 17, 2020",
                    snippet: "In this virtual live event for Aircraft Working Groups, participants will be discussing ...",
                    link: "",
                },
            ]
        }
    },
}
</script>

<style scoped lang="scss">
.background {
    position: absolute;
    z-index: -1;
}
#pattern-one {
    left: -13rem;
    transform: rotate(180deg);
    top: 27rem;
    z-index: 2;
}
#pattern-two {
    left: -13rem;
    transform: rotate(180deg);
    top: 67.75rem;
}
#welcome {
    width: 100%;
    height: 38rem;
    overflow: hidden;
    position: relative;
    video {
        filter: grayscale(90%);
        z-index: 1;
    }
    .overlay {
        background-color: $med-blue;
        width: 100%;
        height: 100%;
        opacity: 50%;
        position: absolute;
        z-index: 2;
    }
    .text {
        position: absolute;
        top: 10rem;
        left: 8.5rem;
        color: white;
        z-index: 3;
        width: 23rem;
        h1 {
            font: $headline;
            margin-top: .5rem;
        }
        .mission {
            margin-top: 4rem;
            .description {
                &-hide {
                    visibility: hidden;
                    margin-top: 1rem;
                }
                &-show {
                    visibility: show;
                    margin-top: 1rem;
                    transform: translateX(3rem);
                    transition: transform .5s;
                }
            }
            svg {
                font-size: 2rem;
                margin-right: 1rem;
                cursor: pointer;
            }
        }
        .continue {
            margin-top: 2rem;
            svg {
                font-size: 1.25rem;
                margin-left: .4rem;
                margin-right: 1.5rem;
            }
        }
    }
}
#updates {
    margin: 5rem 8.5rem;
    display: grid;
    grid-template-columns: 27.5rem 27.5rem;
    grid-gap: 6.25rem;
    h2 {
        font: $subheadline;
    }
    h1 {
        font: $headline;
        margin-top: .25rem;
        margin-bottom: 2rem;
    }
    .button-card {
        margin: 1rem 0;
    }
    .more {
        color: $med-blue;
        text-align: right;
    }
    .wrapper-empty p {
        color: $bluish-grey;
        margin-bottom: 3rem;
    }
}
</style>
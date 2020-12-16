<template>
    <div>
        <section id="welcome">
            <div class="overlay"></div>
            <video loop muted autoplay src="~/assets/videos/naridev-bg-video.mp4" />
            <div class="text">
                <div class="card">
                    <p>NASA Aeronautics Research Institute</p>
                    <h1>Meeting future <br><b>aviation needs</b>.</h1>
                    <nuxt-link class="about-button" to="/">About NARI ></nuxt-link>
                </div>
                <!-- <div class="mission">
                    <p><fa v-on:click="showMission = !showMission" icon="info-circle" />Our Mission</p>
                    <p v-bind:class="[showMission ? 'description-show' : 'description-hide']" >NARI’s mission is to serve NASA's internal and external customers by researching unexplored areas, collaborations, and value-added partnerships.</p>
                </div> -->
                <div class="continue">
                    <nuxt-link to="#updates"><fa icon="chevron-down" />CONTINUE</nuxt-link>
                </div>
            </div>
        </section>
        <div class="pattern pattern-one overlay background">
            <img src="~/assets/img/city-grid-pattern.svg"/>
        </div>
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
                <div class="more"><nuxt-link to="">Read More ></nuxt-link></div>
            </div>
            <div class="logo-pattern logo-pattern-one background">
                <img src="~/assets/img/logo-pattern.svg"/>
            </div>
            <div>
                <h2>Upcoming Events</h2>
                <h1>Steering <b>Forward</b></h1>
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
                <div class="more"><nuxt-link to="">View Calendar ></nuxt-link></div>
            </div>
        </section>
        <div class="pattern pattern-two background">
            <img src="~/assets/img/city-grid-pattern.svg"/>
        </div>
        <section id="projects">
            <div class="text">
                <h2>Projects & Initiatives</h2>
                <h1>Explore our current projects and initiatives.</h1>
                <nuxt-link class="more" to="">Learn more ></nuxt-link>
            </div>
            <div class="graphic">
                <img class="graphic-main" src="~/assets/img/boeingBlendedWingBody-plane-illustration.svg" />
                <img class="graphic-reflection" src="~/assets/img/boeingBlendedWingBody-plane-illustration.svg" />
            </div>
        </section>
        <div class="logo-pattern logo-pattern-two background">
            <img src="~/assets/img/logo-pattern.svg"/>
        </div>
        <section id="footprint">
            <h2>Our Footprint</h2>
            <h1>Landing <b>Impact</b></h1>
            <div class="wrapper">
                <IconCard v-for="(footprint, i) in footprints" :key="i" 
                    :icon="footprint.icon"
                    :headline="footprint.statNum"
                    :subheadline="footprint.statType"
                    :body="footprint.description"
                />
            </div>
        </section>
        <div class="pattern pattern-three background">
            <img src="~/assets/img/city-grid-pattern.svg"/>
        </div>
        <div class="pattern pattern-four background">
            <img src="~/assets/img/city-grid-pattern.svg"/>
        </div>
    </div>
</template>

<script>
import ButtonCard from '~/components/ButtonCard.vue';
import ShowcaseCard from '~/components/ShowcaseCard.vue';
import IconCard from '~/components/IconCard.vue';

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
    components: {
        ButtonCard,
        ShowcaseCard,
        IconCard
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
            ],
            projects: [
                {
                    title: "Advanced Air Mobility (AAM) Working Groups",
                    description: "The working groups aim to accelerate the development of safe, high-volume AAM flight operations by bringing together the broad community involved in developing this new capability. Participation in our virtual forums and gatherings offers the opportunity to closely collaborate with NASA and other government organizations towards developing the standards, policies, and operationalization of AAM.",
                    link: "https://nari.arc.nasa.gov/aam-portal/",
                    fileName: "plane-1.png",
                },
                {
                    title: "International Forum for Aviation Research (IFAR)",
                    description: "IFAR is the world's only aviation research establishment network. Our team is working with IFAR to create capabilities and events to support IFAR virtual events to enhance international collaboration in aeronautics research and connect the future leaders of the aviation industry.",
                    link: "https://ifarlink.aero/",
                    fileName: "plane-2.png",
                },
                {
                    title: "University Leadership Initiative (ULI)",
                    description: "This initiative allows universities and university-led partnerships to provide strategic leadership that advances ARMD’s research objectives and promotes education of the next generation of engineers.",
                    link: "https://uli-v4.netlify.app/",
                    fileName: "plane-3.png",
                },
            ],
            footprints: [
                {
                    icon: "video",
                    statNum: "76,000+",
                    statType: "Virtual viewership since 2020",
                    description: "NARI-produced videos and event recordings have seen over 650% increase in views since 2019."
                },
                {
                    icon: "users",
                    statNum: "1,000+",
                    statType: "Community members",
                    description: "NARI-supported groups see significant growth within the aeronautics and aviation industries."
                },
                {
                    icon: "award",
                    statNum: "51",
                    statType: "Patents awarded in the U.S.",
                    description: "Our teams and supported projects innovate and facilitate the aviation demands of the future."
                },
                {
                    icon: "handshake",
                    statNum: "2/5",
                    statType: "NASA employees collaborated",
                    description: "We prioritize value-added partnerships within the government and private industry leaders."
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
.pattern {
    transform: rotate(180deg);
    img {
        width: 3.5rem;
        height: 35rem;
        object-fit: cover;
    }
    &-one, &-two {
        left: 0;
        top: 28rem;
        img {
            object-position: 0;
        }
    }
    &-two {
        top: 64.75rem;
    }
    &-three, &-four {
        top: 135.5rem;
        right: 0;
        img {
            object-position: 100%;
        }
    }
    &-four {
        top: 172.25rem;
    }
}
.logo-pattern {
    width: 89.5%;
    &-one {
        top: 5.5rem;
        right: 0rem;
    }
    &-two {
        top: 100rem;
        transform: scaleX(-1);
        left: -.125rem;
        width: 89.5%;
        object-fit: cover;
        object-position: 2rem -1rem;
    }
}
h2 {
    font: $subheadline;
}
h1 {
    font: $headline;
}
#welcome {
    width: 100%;
    height: 42rem;
    overflow: hidden;
    position: relative;
    video {
        filter: grayscale(90%);
        z-index: 1;
        display: block;
        width: 100%;
    }
    .overlay {
        background-color: $med-blue;
        width: 100%;
        height: 100%;
        opacity: .5;
        position: absolute;
        z-index: 2;
    }
    .text {
        .card {
            background-color: white;
            width: 40.5rem;
            z-index: 3;
            position: absolute;
            top: 35%;
            left: 0;
            padding: 3rem 1rem 3.5rem 9.75rem;
            border-radius: 0 $m-corner $m-corner 0;
            h1 {
                margin-top: .25rem;
                margin-bottom: 2.5rem;
            }
            p {
                font: $subheadline;
            }
            .about-button {
                @include button;
            }
        }
        // .mission {
        //     margin-top: 4rem;
        //     .description {
        //         &-hide {
        //             visibility: hidden;
        //             margin-top: 1rem;
        //         }
        //         &-show {
        //             visibility: show;
        //             margin-top: 1rem;
        //             transform: translateX(3rem);
        //             transition: transform .5s;
        //         }
        //     }
        //     svg {
        //         font-size: 2rem;
        //         margin-right: 1rem;
        //         cursor: pointer;
        //     }
        // }
        .continue {
            position: absolute;
            top: 92%;
            left: 6.75rem;
            color: white;
            z-index: 3;
            svg {
                font-size: 1.25rem;
                margin-left: .4rem;
                margin-right: 1.5rem;
            }
        }
    }
}
#updates {
    margin: 7rem 9.75rem 11rem;
    display: grid;
    grid-template-columns: 27.5rem 27.5rem;
    grid-gap: 3.25rem;
    h1 {
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
#projects {
    @include row;
    height: 41rem;
    background-color: $med-blue;
    color: white;
    margin: 5rem 0;
    padding: 6rem 3.5rem;
    .text {
        width: 22rem;
        margin-top: 3.5rem;
        margin-left: 6.25rem;
        h2 {
            margin-bottom: 1rem;
        }
        h1 {
            margin-bottom: 5rem;
        }
        .more {
            @include button;
            color: white;
            border-color: $bluish-grey;
            &:hover {
                background-color: white;
                color: $med-blue;
            }
        }
    }
    .graphic {
        position: absolute;
        right: 3.5rem;
        width: 62%;
        &-reflection {
            transform: scaleY(-1);
            opacity: .2;
        }
    }
}
#footprint {
    margin: 7rem 3.5rem 8rem 9.75rem;
    .wrapper {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
    }
}
</style>
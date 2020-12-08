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
                    <p><fa icon="chevron-down" />CONTINUE</p>
                </div>
            </div>
        </section>
        <section id="updates">
        </section>
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
        }
    },
}
</script>

<style scoped lang="scss">
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
</style>
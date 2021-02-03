<template>
    <div>
        <section id="header">
            <div class="main">
                <img src="~/assets/img/about-bg.svg" />
                <h1><b>NASA Aeronautics Research Institute</b></h1>
            </div>
            <div class="sub">
                <div class="mission">
                    <h1>Our <b>Mission</b></h1>
                    <p>Through aeronautical collaborative research
                    agreements and the application of virtual meeting
                    collaborative tools, we promote innovation across 
                    a broad spectrum of aeronautical challenges in the 
                    nation’s air transportation system.</p>
                    <div class="contact">
                        <nuxt-link to="#contact" class="contact-scroll">
                            <fa icon="chevron-down" />
                            <p>CONTACT US</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="about-nari">
                    <div class="shown">
                        <h1>About <b>NARI</b></h1>
                        <img src="~/assets/img/about-placeholder.png" />
                        <div class="overlay"></div>
                    </div>
                    <div class="hidden">
                        <div class="info">
                            <h1>What is <b>NARI</b>?</h1>
                            <p>
                                NARI, part of NASA’s Aeronautics Research Mission Directorate (ARMD), 
                                fosters deliberate investments in innovative, early-stage, and potentially 
                                revolutionary aviation concepts and technologies that will be essential to 
                                America’s economic competitiveness and protection of national security. 
                            </p>
                            <p>
                                The Institute provides ARMD an avenue to introduce fresh lines of research 
                                into existing programs and projects. Through funding from the Transformative 
                                Aeronautics Concepts (TAC) Program, NARI complements other efforts in early-stage 
                                innovative concepts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="team">
            <div class="logo-pattern background">
                <img src="~/assets/img/logo-pattern.svg"/>
            </div>
            <div class="wrapper">
                <div class="title">
                    <h1>Meet the <b>Team</b></h1>
                </div>
                <div class="card main">
                    <img src="~/assets/img/team_pk.jpg" />
                    <div class="right">
                        <h2>Parimal Kopardekar, Ph.D.</h2>
                        <p><b>Acting Director</b></p>
                        <p class="body">As NARI’s Acting Director, Parimal Kopardekar (PK) is responsible for exploring new trends and needs related to aviation in the areas of autonomy, aeronautics manufacturing, and advanced air mobility. PK enjoys initiating new concepts and technology ideas that increase airspace capacity and throughput, reduce delays, and reduce the total cost of air transportation. </p>
                        <p class="body">At NASA, he has initiated many innovative research projects including reduced crew operations, net-enabled air traffic management, and autonomy for airspace operations. He was named among the 25 most influential people in commercial drone industry in 2017, and he won the 2018 Samuel J. Heyman Service to America Medals in the "Promising Innovations" category in 2018. With more than 15 keynote talks at national and international conferences, over 50 conference and journal papers, and three best paper awards, PK participates as a media expert on topics related to unmanned aircraft systems, urban air mobility, and autonomy.</p>
                    </div>
                </div>
                <div class="card sub">
                    <div class="img-container">
                        <img class="img" src="~/assets/img/team_ricky.jpg" />
                    </div>
                    <h2>Ricky Guest</h2>
                    <p><b>Collaborative Technologies Specialist</b></p>
                </div>
                <div class="card sub">
                    <div class="img-container">
                        <img class="img" src="~/assets/img/team_cecelia.jpg" />
                    </div>
                    <h2>Cecelia Town</h2>
                    <p><b>Program Analyst / Resource Manager</b></p>
                </div>
                <div class="card sub">
                    <div class="img-container">
                        <div class="img"></div>
                        <fa icon="user" />
                    </div>
                    <h2>Michael A. Tsairides</h2>
                    <p><b>Special Projects Manager / Task Lead & Website Editor</b></p>
                </div>
                <div class="card sub">
                    <div class="img-container">
                        <div class="img"></div>
                        <fa icon="user" />
                    </div>
                    <h2>Alina Eskridge</h2>
                    <p><b>Project Coordinator</b></p>
                </div>
            </div>
        </section>
        <section id="faqs">
            <div class="title">
                <h1>Frequently Asked <b>Questions</b></h1>
                <p>Here are the most frequently asked questions about NARI.</p>
            </div>
            <div class="content">
                <div class="card" v-for="(q, i) in questions" :key="i">
                    <h2>{{ q.question }}</h2>
                    <p>{{ q.answer }}</p>
                </div>
            </div>
            <div class="pattern background">
                <img src="~/assets/img/city-grid-pattern.svg"/>
            </div>
        </section>
        <section id="contact">
            <div class="title">
                <h1>Get <b>in touch</b>.</h1>
            </div>
            <div class="content">
                <div class="social">
                    <div class="background wrapper"></div>
                    <img src="~/assets/img/plane-icon.svg" />
                    <div class="links">
                        <h2><b>Connect</b></h2>
                        <p>Follow us on social media.</p>
                        <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'twitter']" /></nuxt-link>
                        <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'facebook']" /></nuxt-link>
                        <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'instagram']" /></nuxt-link>
                    </div>
                </div>
                <form class="form" netlify-honeypot="bot-field" name="contact" action="" method="post" netlify>
                    <p>Interested in learning more or exploring opportunities with us? Reach out to our team and we’ll be happy to help.</p>
                    <input type="hidden" name="form-name" value="contact" />
                    <p class="bot-detector">     
                        <label>Don’t fill this out: <input name="bot-field"></label>   
                    </p>
                    <label for="fname">First name
                        <input type="text" id="fname" name="fname" placeholder="First name" />
                    </label>
                    <label for="lname">Last name
                        <input type="text" id="lname" name="lname" placeholder="Last name" />
                    </label>
                    <label for="email">E-mail address
                        <input type="text" id="email" name="email" placeholder="E-mail" />
                    </label>
                    <label for="phone">Phone number
                        <input type="text" id="phone" name="phone" placeholder="(XXX) XXX-XXXX" />
                    </label>
                    <label for="message">Message
                        <textarea id="message" name="message" rows="3" placeholder="Enter your message here..." />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About NARI',
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
            hovered: false,
            questions: [
                {
                    question: 'When was NARI created?', 
                    answer: 'NARI began in 2012 as the first Aeronautics Virtual Institute at NASA.'
                },
                {
                    question: 'Who funds NARI?', 
                    answer: "NARI is funded primarily out of NASA's Aeronautics Research Mission Directorate (ARMD)."
                },
                {
                    question: "What are NARI's primary areas of focus?", 
                    answer: "Anything that can fly in our airspace: from today's drones and commercial airplanes to tomorrow's eVTOL aircrafts."
                },
                {
                    question: 'Who does NARI partner with?', 
                    answer: 'NARI partners with industry, government, academia, and international organizations.'
                },
                {
                    question: 'Who can I talk to about partnerships?', 
                    answer: 'Reach out to our partnerships team to learn more about current and future opportunities via our contact form.'
                },
                {
                    question: "I have a question that wasn't answered.", 
                    answer: "We'll be delighted to help! Fill out our contact form below in order to reach out to our team."
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
h1 {
    font: $headline;
}
h2 {
    font: $subheadline;
}
.background {
    position: absolute;
    z-index: -1;
}
#header {
    .main {
        height: 43rem;
        position: relative;
        overflow: hidden;
        top: -5.5rem;
        z-index: -1;
        img {
            z-index: -1;
            min-width: 100%;
            height: 120%;
        }
        h1 {
            color: $med-blue;
            position: absolute;
            height: 40rem;
            top: 19rem;
            width: 30rem;
            left: 38%;
        }
    }
    .sub {
        min-height: 26.5rem;
        display: grid;
        grid-template-columns: 1fr 8fr;
        grid-gap: 1rem;
        position: relative;
        top: -8.75rem;
        .mission {
            height: 100%;
            width: 33.25rem;
            background-color: $med-blue;
            color: white;
            padding: 2.5rem 1rem 2rem 3.5rem;
            border-radius: $m-corner;
            p {
                width: 24rem;
                margin-top: 1.5rem;
            }
            .contact {
                margin-top: 6rem;
                position: absolute;
                bottom: 3.5rem;
                &-scroll {
                    @include row;
                    p {
                        margin: 0;
                    }
                    svg {
                        font-size: 1.25rem;
                        margin: 0;
                        margin-right: 1.25rem;
                    }
                }
            }
        }
        .about-nari {
            .shown {
                position: relative;
                visibility: visible;
                opacity: 1;
                height: 26.5rem;
                width: 100%;
                overflow: hidden;
                border-radius: $m-corner;
                h1 {
                    color: white;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    top: 11rem;
                    z-index: 3;
                }
                img {
                    z-index: 1;
                    height: 100%;
                    width: 100%;
                }
                .overlay {
                    background-color: $med-blue;
                    width: 100%;
                    height: 100%;
                    opacity: .5;
                    position: absolute;
                    z-index: 2;
                    top: 0;
                }
            }
            .hidden {
                visibility: hidden;
                opacity: 0;
                display: grid;
                position: absolute;
                top: 0;
                background-color: white;
                border-radius: $m-corner;
                padding: 2.5rem 3.5rem 2rem 3.5rem;
                max-width: 100%;
                height: 100%;
                .info {
                    max-width: 100%;
                    max-height: 100%;
                    margin-bottom: 1rem;
                    p {
                        margin-top: 1.5rem;
                    }
                }
            }
            &:hover {
                .shown {
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity .5s linear;
                }
                .hidden {
                    visibility: visible;
                    opacity: 1;
                    transition: visibility 0s, opacity .5s linear;
                }
            }
        }
    }
}
#team {
    position: relative;
    top: -4rem;
    img {
        filter: grayscale(40%);
    }
    h2 {
        color: $med-blue;
    }
    .logo-pattern {
        top: -20rem;
        width: 87.5%;
        img {
            width: 100%;
            height: 100%;
            left: -9.75rem;
            transform: scaleX(-1);
        }
    }
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: .175fr 1.25fr 1fr;
        grid-gap: 2rem;
        margin: 0 9.75rem;
        .card {
            background-color: white;
            padding: 1.25rem;
            border-radius: $s-corner;
        }
        .title {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 1;
            h1 {
                text-align: center;
            }
        }
        .main {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 2;
            @include row;
            padding: 2rem 3rem 2rem 1.25rem;
            img {
                width: 13.5rem;
                height: 13.5rem;
                margin-right: 1.25rem;
            }
            .right {
                width: 100%;
                .body {
                    margin-top: 1rem;
                }
            }
        }
        .sub {
            .img-container {
                width: 100%;
                height: 14.5vw;
                object-fit: cover;
                position: relative;
                margin-bottom: 1rem;
                .img {
                    width: 100%;
                    height: 100%;
                    background-color: $bluish-grey;
                }
                svg {
                    position: absolute;
                    font-size: 5rem;
                    width: 100%;
                    top: 25%;
                    color: $grey;
                }
            }
        }
    }
}
#faqs {
    position: relative;
    .pattern {
        right: 0;
        top: 8rem;
        width: 3.5rem;
        height: 32.5rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .title {
        margin: 3.5rem 9.75rem 2rem 9.75rem;
        p {
            margin-top: .5rem;
        }
    }
    .content {
        margin: 1rem 9.75rem 3.5rem 9.75rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        .card {
            background-color: white;
            border-radius: $m-corner;
            padding: 2rem 1.5rem;
            h2 {
                color: $med-blue;
                margin-bottom: 1rem;
            }
        }
    }
}
#contact {
    margin: 0 9.75rem;
    display: grid;
    grid-template-rows: 1fr 7fr;
    .title {
        width: 100%;
        height: 100%;
        padding: .75rem 1rem .25rem;
        text-align: center;
        background-color: $dark-blue;
        color: white;
        border-radius: $m-corner;
        z-index: 3;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 2.25fr;
        .social {
            position: relative;
            .wrapper {
                position: absolute;
                width: 100%;
                height: 100%;
                background: $light-blue;
                opacity: .5;
            }
            .links {
                position: relative;
                margin: 1.5rem;
                top: -1.5rem;
                p {
                    margin-top: .5rem;
                    margin-bottom: 1rem;
                }
                svg {
                    margin-right: 2rem;
                    width: 2rem;
                    height: 2rem;
                    color: $med-blue;
                    &:hover {
                        color: $bluish-grey;
                    }
                }
            }
        }
        .form {
            margin: 5rem 0 8rem 6rem;
            margin-top: 5rem;
            width: 30rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            .bot-detector {
                display: none;
            }
            p {
                grid-column: 1 / 3;
            }
            label {
                font: $caption;
                @include column;
                input[type=text], textarea {
                    font: $body;
                    padding: .75rem 1rem;
                    border-radius: $s-corner;
                    background-color: white;
                }
                ::placeholder {
                    font: $caption;
                    color: $bluish-grey;
                }
            }
            label[for=message] {
                grid-column: 1 / 3;
            }
            input[type=submit] {
                padding: 1rem 1rem;
                max-width: 11.25rem;
                @include button;
            }
        }
    }
}
</style>
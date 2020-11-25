<template>
    <footer>
        <div class="left-container">
            <nav class="links">
                <div class="resources">
                    <h1>Resources for</h1>
                    <ul class="menu">
                        <li class="menu-item" v-for="(item, i) in resources" :key="i">
                            <nuxt-link :to=item.path>
                                {{ item.sublink }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="partners">
                    <h1>Partners</h1>
                    <ul class="menu">
                        <li class="menu-item" v-for="(item, i) in partners" :key="i">
                            <nuxt-link :to=item.path>
                                {{ item.sublink }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="events">
                    <h1>Events</h1>
                    <ul class="menu">
                        <li class="menu-item" v-for="(item, i) in events" :key="i">
                            <nuxt-link :to=item.path>
                                {{ item.sublink }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="support">
                    <h1>Support</h1>
                    <ul class="menu">
                        <li class="menu-item" v-for="(item, i) in support" :key="i">
                            <nuxt-link :to=item.path>
                                {{ item.sublink }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="subscribe">
                <h1>Subscribe for updates.</h1>
                <p>We send the latest news, opportunities and resources directly to your inbox when you sign up to our newsletter.</p>
                <form>
                    <div class="field">
                        <fa icon="envelope" />
                        <input type="text" placeholder="Enter your e-mail address" name="mail" required />
                    </div>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
        <div class="right-container">
            <div class="social">
                <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'twitter']" /></nuxt-link>
                <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'facebook']" /></nuxt-link>
                <nuxt-link class="social-item" to="/"><fa :icon="['fab', 'instagram']" /></nuxt-link>
            </div>
            <hr>
            <div class="headquarters">
                <p class="bold">NASA Aeronautics Research Institute</p>
                <p>NASA Ames Research Center <br>Moffet Field, CA 94035</p>
            </div>
            <div class="copyright">
                <p>NASA Official, Parimal Kopardekar.</p>
                <p>Copyright© 2020, NARI.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
    props: ["resources", "partners", "events", "support"],
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

footer {
    @include row;
    align-items: initial;
    width: 100%;
    height: 27rem;
    background: $med-blue;
    color: $bluish-grey;
    padding: 2.5rem 0 1rem;
    position: relative;
    bottom: 0;
}
.left-container {
    position: absolute;
    left: 3rem;
    h1 {
        font: $subheadline-bold;
    }
    nav {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 11rem 8rem 7rem 10rem;
        margin-bottom: 2rem;
        .menu-item {
            color: white;
        }
    }
    .subscribe {
        width: 28rem;
        padding-top: .5rem;
        p {
            padding-bottom: 1rem;
        }
        form {
            @include row;
            .field {
                @include input-field;
                margin-top: .5rem;
                svg {
                    height: 1.5rem;
                    width: 1.5rem;
                }
                input[type=text] {
                    width: 21rem;
                    height: 2.5rem;
                    padding-left: 2.5rem;
                }
            }
            input[value="Subscribe"] {
                margin-top: .5rem;
                margin-left: 1rem;
                padding: .58rem 1.5rem .42rem;
                border-radius: $s-corner;
                color: $med-blue;
                background-color: $bluish-grey;
            }
        }
    }
    h1, li, .subscribe p, .subscribe form {
        padding: .5rem 0;
    }
}
.right-container {
    width: 19.5rem;
    position: absolute;
    right: 3rem;
    .social {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: 2rem 2rem 2rem;
        padding-bottom: .5rem;
        svg {
            width: 2rem;
            height: 2rem;
        }
    }
    hr {
        border-color: $bluish-grey;
        margin: 1rem 0;
    }
    .headquarters {
        margin-top: 1.5rem;
        .bold {
            margin-bottom: .4rem;
            font: $body-bold;
        }
    }
    .copyright {
        margin-top: 10.825rem;
        text-align: right;
    }
}
</style>
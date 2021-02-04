<template>
    <footer :class="view">
        <div class="left-container">
            <nav class="links" v-if="view != 'mobile'">
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
                <div class="programs">
                    <h1>Programs</h1>
                    <ul class="menu">
                        <li class="menu-item" v-for="(item, i) in programs" :key="i">
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
                <form netlify-honeypot="bot-field" name="subscribe" action="" method="post" netlify>
                    <input type="hidden" name="form-name" value="contact" />
                    <p class="bot-detector">     
                        <label>Don’t fill this out: <input name="bot-field"></label>   
                    </p>
                    <div class="field">
                        <fa class="field-icon" icon="envelope" />
                        <input class="field-input" type="text" placeholder="Enter your e-mail address" name="mail" required />
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
    props: ["view", "resources", "programs", "events", "support"],
}
</script>

<style scoped lang="scss">

footer {
    @include row;
    width: 100%;
    height: 27rem;
    background: $med-blue;
    color: $bluish-grey;
    padding: 2.5rem 3rem 1rem;
    position: relative;
    bottom: 0;
}
.left-container {
    position: absolute;
    left: 3rem;
    h1 {
        font: $subheadline;
        font-weight: bold;
    }
    nav {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 10rem 8rem 7rem 12rem;
        margin-bottom: 2rem;
        .menu-item {
            color: white;
            &:hover {
                background: $bluish-grey;
                border-radius: $s-corner;
                position:relative;
                padding-left: 1rem;
                padding-right: 1rem;
                left: -1rem;
            }
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
            .bot-detector {
                display: none;
            }
            .field {
                @include field-wrapper;
                margin-top: .5rem;
                &-icon {
                    @include field-icon;
                    height: 1.5rem;
                    width: 1.5rem;
                }
                &-input {
                    @include field-input;
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
                cursor: pointer;
                &:hover {
                    background-color: $light-blue;
                }
            }
        }
    }
    h1, li, .subscribe p, .subscribe form {
        padding: .5rem 0;
    }
}
.right-container {
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
            &:hover {
                color: $light-blue;
            }
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
            font: $body;
            font-weight: bold;
        }
    }
    .copyright {
        margin-top: 10.825rem;
        text-align: right;
    }
}
</style>
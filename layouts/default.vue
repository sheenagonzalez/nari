<template>
	<div>
        <AppHeader :events="eventsNavItems" :aam="aamNavItems" />
        <Breadcrumbs />
        <Nuxt :view="view" />
        <AppFooter :resources="resources" :programs="programs" :events="events" :support="support" />
		<!-- <AppHeader v-if="view != 'mobile'" :events="eventsNavItems" :aam="aamNavItems" /> -->
        <!-- <AppHeaderMobile v-if="view == 'mobile'" :events="eventsNavItems" :aam="aamNavItems" /> -->
		<!-- <Nuxt :view="view" /> -->
		<!-- <AppFooter v-if="view != 'mobile'" :view="view" :resources="resources" :programs="programs" :events="events" :support="support"/> -->
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppHeaderMobile from '~/components/AppHeaderMobile.vue'
import AppFooter from '~/components/AppFooter.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

export default {
	components: {
		AppHeader,
        AppFooter,
        AppHeaderMobile,
	},
	head() {
		return {
			meta: [
				{
					hid: 'viewport',
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0',
				}
			]
		}
	},
	data() {
        return {
            view: 'desktop',
            eventsNavItems: [
                {
                    sublink: 'Upcoming Events',
                    path: '/events/upcoming-events'
                },
                {
                    sublink: 'Recent Highlights',
                    path: '/events/recent-highlights'
                },
                {
                    sublink: 'All Archives',
                    path: '/events'
                },
                {
                    sublink: 'Calendar',
                    path: '/events/calendar'
                },
            ],
            aamNavItems: [
                {
                    sublink: 'Ecosystem Working Groups',
                    path: ''
                },
                {
                    sublink: 'Supply Chain Working Groups',
                    path: ''
                },
            ],
            programs: [
                {
                    sublink: 'Projects',
                    path: '/projects'
                },
                {
                    sublink: 'Research',
                    path: '/research'
                },
                {
                    sublink: 'News',
                    path: ''
                }
            ],
            events: [
                {
                    sublink: 'AAM',
                    path: ''
                },
                {
                    sublink: 'IFAR',
                    path: ''
                },
                {
                    sublink: 'Database',
                    path: '/events/all_archives'
                },
			],
			resources: [
                {
                    sublink: 'Community',
                    path: ''
                },
                {
                    sublink: 'Students',
                    path: ''
                },
                {
                    sublink: 'Researchers',
                    path: ''
                },
			],
			support: [
                {
                    sublink: 'NASA Privacy Policy',
                    path: ''
                },
                {
                    sublink: 'Web Support',
                    path: ''
                },
                {
                    sublink: 'Contact Us',
                    path: '/about#contact'
                },
            ],
        }
    },
    mounted() {
        if (window.innerWidth <= 640) {
            this.view = 'mobile';
        } else if (window.innerWidth > 641 && window.innerWidth <= 1007) {
            this.view = 'tablet';
        } else {
            this.view = 'desktop';
        }
        window.onresize = () => {
            if (window.innerWidth <= 640) {
                this.view = 'mobile';
            } else if (window.innerWidth > 641 && window.innerWidth <= 1007) {
                this.view = 'tablet';
            } else {
                this.view = 'desktop'
            }
        }
    }
}
</script>

<style lang="scss">

html {
	font: $body;
	color: $not-so-black;
	background-color: $grey;
	line-height: 1.5;
	letter-spacing: .01rem;
    scroll-behavior: smooth;
}
/* Mobile */
@media screen and (max-width: 420px) {
		html {
			font-size: 5px;
	}
}
/* Portrait Tablets */
@media screen and (min-width: 421px) {
		html {
			font-size: 8px;
	}
}
/* Landscape Tablets */
@media screen and (min-width: 768px) {
		html {
			font-size: 12px;
	}
}
/* Desktop */
@media screen and (min-width: 992px) {
	html {
			font-size: 16px;
	}
}
</style>

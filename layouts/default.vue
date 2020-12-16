<template>
	<div>
		<AppHeader :events="eventsNavItems" :aam="aamNavItems"/>
		<Nuxt />
		<AppFooter :resources="resources" :programs="programs" :events="events" :support="support"/>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
export default {
	components: {
		AppHeader,
		AppFooter
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
            eventsNavItems: [
                {
                    sublink: 'Calendar',
                    path: '/'
                },
                {
                    sublink: 'Highlights',
                    path: '/'
                },
                {
                    sublink: 'Files',
                    path: '/'
                },
                {
                    sublink: 'Recordings',
                    path: '/'
                },
            ],
            aamNavItems: [
                {
                    sublink: 'Ecosystem Working Groups',
                    path: '/'
                },
                {
                    sublink: 'Supply Chain Working Groups',
                    path: '/'
                },
            ],
            programs: [
                {
                    sublink: 'Initiatives',
                    path: '/'
                },
                {
                    sublink: 'Research',
                    path: '/'
                },
                {
                    sublink: 'News',
                    path: '/'
                }
            ],
            events: [
                {
                    sublink: 'AAM',
                    path: '/'
                },
                {
                    sublink: 'IFAR',
                    path: '/'
                },
                {
                    sublink: 'Database',
                    path: '/'
                },
			],
			resources: [
                {
                    sublink: 'Community',
                    path: '/'
                },
                {
                    sublink: 'Students',
                    path: '/'
                },
                {
                    sublink: 'Researchers',
                    path: '/'
                },
			],
			support: [
                {
                    sublink: 'NASA Privacy Policy',
                    path: '/'
                },
                {
                    sublink: 'Web Support',
                    path: '/'
                },
                {
                    sublink: 'Contact Us',
                    path: '/'
                },
            ],
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
@media screen and (min-width: 420px) {
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

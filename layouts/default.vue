<template>
	<div>
		<AppHeader :projects="projects" :partners="partners" :events="events"/>
		<Nuxt />
		<AppFooter :resources="resources" :partners="partners" :events="events" :support="support"/>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
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
            projects: [
                {
                    sublink: 'The LEARN Project',
                    path: '/'
                },
                {
                    sublink: 'Seedling Fund',
                    path: '/'
                },
                {
                    sublink: 'Archived Projects',
                    path: '/projects'
                },
            ],
            partners: [
                {
                    sublink: 'Investigators',
                    path: '/'
                },
                {
                    sublink: 'Collaborators',
                    path: '/'
                },
                {
                    sublink: 'IATA',
                    path: '/'
                },
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
                    sublink: 'Educators',
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Rubik:wght@300;400;600&display=swap');
@import "@/assets/styles/_variables.scss";
html {
	font: $body;
	color: $not-so-black;
	background-color: $grey;
	line-height: 1.5;
	letter-spacing: .01rem;
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

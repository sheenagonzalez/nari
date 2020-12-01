<template>
    <div>
        <img class="polygon background" src="~/assets/img/polygon.png"/>
        <div class="main">
            <section id="projects">
                <!-- Advanced Search (Side bar) -->
                <div class="side-wrapper">
                    <nav class="sticky-nav">
                        <img class="pattern background" src="~/assets/img/pattern.png"/>
                        <div class="browse">
                            <h2>Search</h2>
                            <div class="search">
                                <fa icon="search" />
                                <input type="text" placeholder="Enter keywords here.." />
                            </div>
                        </div>
                        <div class="filter">
                            <h2>Filters</h2>
                            <div>
                                <p class="filter-title">Programs</p>
                                <Checkbox :options="programList" :checkedOptions="programList" />
                            </div>
                            <div>
                                <p class="filter-title">Discipline Area</p>
                                <multiselect v-model="selectedTags" 
                                    :options="tagList" 
                                    :multiple="true" 
                                    :close-on-select="false" 
                                    :clear-on-select="false" 
                                    :preserve-search="true"
                                    :max-height="150"
                                    :show-labels="false"
                                    :limit="3"
                                    placeholder="Select">
                                </multiselect>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- List of Collapsible Projects -->
                <div class="list">
                    <h1>Projects</h1>
                    <Project v-for="(data, i) in visibleProjects" :key="i"
                        :projectType="data.projecttype"
                        :phase="data.phase"
                        :title="data.title"
                        :startDate="data.startDate"
                        :endDate="data.endDate"
                        :description="data.description"
                        :principalInvestigator="data.principalinvestigator"
                        :organization="data.organization"
                        :coInvestigators="data.coinvestigators"
                        :tags="data.tags"
                    />
                    <Pagination v-on:page:update="updatePage"
                        v-bind:items="projectsData"
                        v-bind:currentPage="currentPage"
                        v-bind:pageSize="pageSize"
                        v-bind:limit="5"
                    />
                </div>
            </section>
            <section id="resources">
                <div>
                    <h1>Additional Resources</h1>
                    <Carousel 
                        :items="['For Educators', 'For Students', 'For Researchers']"
                        :visibleSlide="visibleSlide"
                        :slides="slides"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Project from "~/components/Project.vue";
import Checkbox from "~/components/Checkbox.vue";
import Multiselect from "vue-multiselect";
import projectsJson from "~/json/projects.json";
import Pagination from "~/components/Pagination.vue";
import Carousel from "~/components/Carousel.vue";

export default {
    head() {
        return {
            title: 'Projects',
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
        Project, 
        Checkbox,
        Multiselect,
        Pagination,
        Carousel,
    },
    methods: {
        // Update the page number
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleProjects();
        },
        // Update which projects to show according to current page number
        updateVisibleProjects() {
            this.visibleProjects = this.projectsData.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // Go back a page if we have 0 visible projects
            if (this.visibleProjects.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        }
    },
    // Show first page of projects upon page load
    async created() {
        try {
            this.updateVisibleProjects();
            console.log(this.visibleProjects);
        } catch (err) {
            console.log(err);
        }
    },
    data() {
        return {
            programList: [
                "The LEARN Project", 
                "Seedling Fund"
            ],
            projectsData: projectsJson,
            pageSize: 7,
            currentPage: 0,
            visibleProjects: [],
            selectedTags: [],
            // Discipline Area tags
            tagList: [
                "Aeroacoustics",
                "Aeroacoustics/Materials",
                "Aerodynamics",
                "Aeroelasticity",
                "Aerothermal",
                "Air Traffic Management",
                "Aircraft Design",
                "Aircraft Dynamics",
                "Airframe Materials",
                "Avionics",
                "Ceramic Matertials and Processing",
                "Combustion",
                "Controls",
                "Data Mining",
                "Design Safety",
                "Electric Propulsion",
                "Energy Storage",
                "Flight Controls",
                "Flight Trajectory Management",
                "Guidance & Control",
                "Icing Mitigation",
                "Manufacturing",
                "Materials",
                "MDAO",
                "Measurement Technology",
                "Metroplex Traffic Scheduling",
                "Modeling & Simulation",
                "N+3 Concept MDO",
                "Next Gen",
                "Prognostics",
                "Propulsion",
                "Radar",
                "Rotorcraft",
                "Safety",
                "Sensor Fusion",
                "Software",
                "Solid Mechanics",
                "Structures",
                "Testing",
                "Transition to Low-Carbon Propulsion",
                "Turbulence Modeling",
                "UAS",
                "UAS Autonomy Testbed",
                "Ultra-Efficient Commercial Vehicles",
                "Other"
            ],
            slides: {
                0: {
                    for: "educators",
                    title: "Lorem ipsum dolor est",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    link: "",
                    fileName: "plane-2.png",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    credits: ""
                },
                1: {
                    for: "students",
                    title: "University Leadership Initiative",
                    description: "This initiative allows universities and university-led partnerships to provide strategic leadership that advances ARMD’s research objectives and promotes education of the next generation of engineers.",
                    link: "",
                    fileName: "uli.png",
                    caption: "ULI students from Carnegie Mellon University stands in front of a sophisticated 3D printer they will use to explore new methods for manufacturing aircraft components.",
                    credits: ""
                },
                2: {
                    for: "researchers",
                    title: "Lorem ipsum dolor est",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    link: "",
                    fileName: "plane-2.png",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    credits: ""
                }
            },
            visibleSlide: 1,
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> 
/* Imports default vue-multiselect style */
</style>
<style lang="scss"> /* Customizes vue-multiselect style */

.multiselect {
    max-width: 12rem;
    font: $caption;
    &__option {
        &--highlight, &--highlight:after {
            background: $grey;
            color: $not-so-black;
        }
        &--selected.multiselect__option {
            background: $med-blue;
            color: white;
            &:hover {
                background: $bluish-grey;
            }
        }
    }
    &__tag {
        background: $med-blue;
        font: $caption;
        &:focus, &:hover {
            cursor: default;
        }
        &-icon {
            &:after {
                color: white;
            }
            &:focus, &:hover {
                background: $bluish-grey;
            }
        }
    }
    &__strong {
        font: $caption;
    }
    &__input::placeholder, &__placeholder {
        font: $caption;
        color: $bluish-grey;
    }
    &__placeholder {
        margin-top: .125rem;
        margin-left: .31rem;
        letter-spacing: 0;
    }
}
</style>

<style scoped lang="scss">

.background {
    z-index: -1;
    position: absolute;
    margin-top: -8rem;
}
.main {
    margin: 3rem 5rem 6rem;
    h1 {
    font: $headline-bold;
    }
    h2 {
        font: $subheadline-bold;
        margin-bottom: 1rem;
    }
    h3, .project-title {
        font: $subheadline;
    }
    #projects {
        display: flex;
        .sticky-nav {
            position: -webkit-sticky;
            position: sticky;
            margin-top: 6rem;
            top: 2rem;
            margin-bottom: 9.5rem;
            display: grid;
            grid-template-rows: 5rem 15rem;
            grid-gap: 3rem;
            .pattern {
                height: 33rem;
                margin: 0 -5.25rem;
            }
            .search {
                @include input-field;
                svg {
                    height: 1.5rem;
                    width: 1rem;
                }
                input[type=text] {
                    width: 12rem;
                    height: 2.5rem;
                    padding-left: 2rem;
                    &::placeholder {
                        color: $bluish-grey;
                    }
                }
            }
            .filter {
                & > div {
                    margin-bottom: 1.5rem;
                }
                &-title {
                    margin-bottom: 1rem;
                    color: $bluish-grey;
                }
            }
        }
        .list {
            height: 100%;
            margin-top: 1.5rem;
            margin-left: 4rem;
            width: 100%;
        }
        .pagination {
            @include row;
        }
    }
    #resources {
        h1 {
            margin-left: 16rem;
        }
    }
}
</style>
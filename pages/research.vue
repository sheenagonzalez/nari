<template>
    <div>
        <div class="background polygon">
            <img src="~/assets/img/polygon.svg"/>
        </div>
        <div class="main">
            <section id="researchNodes">
                <!-- Advanced Search (Side bar) -->
                <div class="side-wrapper">
                    <nav class="sticky-nav">
                        <img class="pattern background" src="~/assets/img/city-grid-pattern.svg"/>
                        <div class="browse">
                            <h2>Search</h2>
                            <div class="search">
                                <fa class="search-icon" icon="search" />
                                <input class="search-input" type="text" v-model="search" placeholder="Enter keywords here.." @input="updateVisibleResearchCards" />
                            </div>
                        </div>
                        <div class="filter">
                            <h2>Filters</h2>
                            <div>
                                <p class="filter-title">Programs</p>
                                <Checkbox :options="programList" :checkedOptions="checkedPrograms" v-model="checkedPrograms" @input="updateVisibleResearchCards" />
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
                                    @input="updateVisibleResearchCards"
                                    placeholder="Select">
                                </multiselect>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- List of Collapsible ResearchCards -->
                <div class="list">
                    <h1>Past <b>Research</b></h1>
                    <ResearchCard v-for="(data, i) in visibleResearchCards" :key="i"
                        :researchType="data.researchtype"
                        :phase="data.phase"
                        :title="data.title"
                        :startDate="data.startdate"
                        :endDate="data.enddate"
                        :principalInvestigator="data.principalinvestigator"
                        :organization="data.organization"
                        :coInvestigators="data.coinvestigators"
                        :tags="data.tags"
                        :description="data.description"
                        :video="data.video"
                        :slides="data.slides"
                        :report="data.report"
                        :additionalAttachment="data.additionalattachment"
                    />
                    <Pagination v-on:page:update="updatePage"
                        :items="researchData"
                        :currentPage="currentPage"
                        :pageSize="pageSize"
                        :limit="5"
                    />
                </div>
            </section>
            <section id="research-programs">
                <img class="rectangle background" />
                <img class="pattern-two background" src="~/assets/img/city-grid-pattern.svg"/>
                <div>
                    <h1>Research <b>Programs</b></h1>
                    <Carousel
                        :visibleSlide="visibleSlide"
                        :slides="slides"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ResearchCard from "~/components/ResearchCard.vue";
import Checkbox from "~/components/Checkbox.vue";
import Multiselect from "vue-multiselect";
import researchDataJson from "~/json/researchData.json";
import Pagination from "~/components/Pagination.vue";
import Carousel from "~/components/Carousel.vue";

export default {
    head() {
        return {
            title: 'Past Research',
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
        ResearchCard, 
        Checkbox,
        Multiselect,
        Pagination,
        Carousel,
    },
    methods: {
        // Update the page number
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleResearchCards();
        },
        // Update which research to show according to current page number
        updateVisibleResearchCards() {
            this.filterResearchCards();
            this.visibleResearchCards = this.filteredResearchCards.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // Go back a page if we have 0 visible research
            if (this.visibleResearchCards.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        },
        filterResearchCards() {
            var results = this.researchData.filter((research) => {
                var tagMatched = this.selectedTags.length == 0;
                if (!tagMatched && research.tags) {
                    for (var selectedTagIndex in this.selectedTags) {
                        tagMatched = this.selectedTags[selectedTagIndex].match(research.tags);
                        if (tagMatched) {
                            break;
                        }
                    }
                }
                // Show research that match checked programs
                var programMatched = this.checkedPrograms.includes(research.researchtype);
                // Show research that match search keywords
                var searchMatched = true;
                if (this.search) {
                    searchMatched = false;
                    var principalInvestigatorMatched, coInvestigatorsMatched, organizationMatched, descriptionMatched = false;
                    var lSearch = this.search.toLowerCase();
                    if (research.principalinvestigator) {
                        principalInvestigatorMatched = (research.principalinvestigator.match(this.search) || research.principalinvestigator.toLowerCase().match(lSearch));
                    } if (research.coinvestigators) {
                        coInvestigatorsMatched = (research.coinvestigators.match(this.search) || research.coinvestigators.toLowerCase().match(lSearch)); 
                    } if (research.organization) {
                        organizationMatched = (research.organization.match(this.search) || research.organization.toLowerCase().match(lSearch));
                    } if (research.description) {
                        descriptionMatched = (research.description.match(this.search) || research.description.toLowerCase().match(lSearch));
                    }
                    searchMatched = ((research.title.toLowerCase().match(lSearch)) || coInvestigatorsMatched || principalInvestigatorMatched || organizationMatched || descriptionMatched);
                }
                return tagMatched && programMatched && searchMatched;
            });
            this.filteredResearchCards = results;
        }
    },
    // Show first page of research items upon page load
    async created() {
        try {
            this.checkedPrograms = this.programList.flat();
            this.updateVisibleResearchCards();
        } catch (err) {
            console.log(err);
        }
    },
    data() {
        return {
            search: '',
            programList: [
                "The LEARN Project", 
                "Seedling Fund"
            ],
            researchData: researchDataJson,
            pageSize: 7,
            currentPage: 0,
            visibleResearchCards: [],
            checkedPrograms: [],
            selectedTags: [],
            filteredResearchCards: [],
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
            slides: [
                {
                    for: "The LEARN Project",
                    title: "The LEARN Project",
                    description: "The LEARN Project provided opportunities for innovators from outside NASA to perform research, analysis, and proof-of-concept development of their novel ideas that have the potential to meet national aeronautics needs. The ResearchItem provided resources for early-stage efforts not supported by NASA Aeronautics Research Mission Directorate (ARMD) Programs and Projects, with the goal of infusing promising concepts into the ARMD research portfolio or into NASA's Small Business Innovation Research (SBIR) program for further development. After eight rounds of awards, the LEARN Project has been phased out. There will be no new LEARN solicitations and awards.",
                    link: "",
                    fileName: "",
                    caption: "",
                    credits: ""
                },
                {
                    for: "Seedling Fund",
                    title: "Seedling Fund",
                    description: "The Seedling Fund annually provided NASA civil servants the opportunity to perform research, analysis, and proof-of-concept development of their novel ideas that had the potential to meet national aeronautics needs. The Fund provided resources for early-stage efforts not currently supported by ARMD Programs and Projects, with the goal of infusing promising concepts into the ARMD research portfolio or into NASA's Small Business Innovation Research (SBIR) program for further development. After eight rounds of awards, the Seedling Fund was phased out.",
                    link: "",
                    fileName: "",
                    caption: "",
                    credits: ""
                },
            ],
            visibleSlide: 0,
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
    cursor: pointer;
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
.polygon {
    width: 90rem;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
        object-position: 0rem -6.75rem;
    }
}
.main {
    h1 {
    font: $headline;
    }
    h2 {
        font: $subheadline;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    h3 {
        font: $subheadline;
        font-weight: bold;
    }
    #researchNodes {
        margin: 0 5rem;
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
                margin: 0 -15rem;
            }
            .search {
                @include field-wrapper;
                &-icon {
                    @include field-icon;
                    height: 1.5rem;
                    width: 1rem;
                }
                &-input {
                    @include field-input;
                    width: 12rem;
                    height: 2.5rem;
                    padding-left: 2rem;
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
    #research-programs {
        margin: 6rem 0 6rem 3rem;
        min-height: 36rem;
        position: relative;
        h1 {
            margin-left: 18rem;
            margin-bottom: 1rem;
        }
        .pattern-two {
            top: 31rem;
            left: 9rem;
            height: 32rem;
        }
        .rectangle {
            background-color: $dark-blue;
            left: -3rem;
            top: -6rem;
            width: 5rem;
            height: 40rem;
        }
    }
}
</style>
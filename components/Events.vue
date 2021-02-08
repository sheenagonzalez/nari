<template>
    <div>
        <div class="main">
            <div class="background polygon">
                <div class="poly-dark">
                    <img src="~/assets/img/polygon-dark.svg"/>
                </div>
                <div class="poly-light" v-if="!onHighlights">
                    <img src="~/assets/img/polygon.svg"/>
                </div>
            </div>
            <section id="events">
                <!-- Advanced Search (Side bar) -->
                <div class="side-wrapper">
                    <nav class="sticky-nav">
                        <div :class="['switch', onHighlights ? 'on-highlights' : 'on-all']">
                            <nuxt-link to="/events/recent-highlights" class="highlights" v-on:click="onHighlights = true">
                                <fa icon="star" />
                                <p>HIGHLIGHTS</p>
                            </nuxt-link>
                            <nuxt-link to="/events" class="all" v-on:click="onHighlights = false">
                                <p><b>ALL</b></p>
                            </nuxt-link>
                        </div>
                        <div class="browse">
                            <h2>Search</h2>
                            <div class="search">
                                <fa class="search-icon" icon="search" />
                                <input class="search-input" type="text" v-model="search" placeholder="Enter keywords here.." @input="updateVisibleEvents" />
                            </div>
                        </div>
                        <div class="filter" v-if="!onHighlights">
                            <h2>Filters</h2>
                            <div>
                                <p class="filter-title">
                                    File Type
                                </p>
                                <Checkbox :options="fileTypesList" :checkedOptions="checkedFileTypes" v-model="checkedFileTypes" @input="updateVisibleEvents" />
                            </div>
                            <div>
                                <p class="filter-title">Event Category</p>
                                <multiselect v-model="selectedCategories" 
                                    :options="categoryList" 
                                    :multiple="true" 
                                    :close-on-select="false" 
                                    :clear-on-select="false" 
                                    :preserve-search="true"
                                    :max-height="150"
                                    :show-labels="false"
                                    :limit="3"
                                    @input="updateVisibleEvents"
                                    placeholder="Select">
                                </multiselect>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- List of Collapsible Events -->
                <div class="list">
                    <h1><b>Events</b> 
                        <span v-if="!onHighlights">/ All Archives</span>
                        <span v-if="onHighlights">/ Recent Highlights</span>
                    </h1>
                    <Event v-for="(data, i) in visibleEvents" :key="i"
                        :category="data.category"
                        :subCategory="data.subcategory"
                        :title="data.title"
                        :date="data.date"
                        :time="data.time"
                        :description="data.description"
                        :speakers="data.speakers"
                        :organization="data.organization"
                        :platform="data.platform"
                        :links="data.links"
                        :video="data.video"
                        :slides="data.slides"
                        :tags="data.tags"
                        :isHighlight="data.isHighlight"
                    />
                    <Pagination v-on:page:update="updatePage"
                        :items="eventsData"
                        :currentPage="currentPage"
                        :pageSize="pageSize"
                        :limit="5"
                    />
                </div>
            </section>
            <section id="collaborators">
                <img class="rectangle background" />
                <img class="pattern-two background" src="~/assets/img/city-grid-pattern.svg"/>
                <EventCarousel :slides="slides" :visibleSlide="visibleSlide" />
            </section>
        </div>
    </div>
</template>

<script>
import Event from "~/components/Event.vue";
import Checkbox from "~/components/Checkbox.vue";
import Multiselect from "vue-multiselect";
import eventsJson from "~/json/events.json";
import highlightsJson from "~/json/highlights.json";
import Pagination from "~/components/Pagination.vue";
import EventCarousel from "~/components/EventCarousel.vue";

export default {
    name: "Events",
    props: ["onHighlights"],
    components: {
        Event, 
        Checkbox,
        Multiselect,
        Pagination,
        EventCarousel,
    },
    methods: {
        // Update the page number
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleEvents();
        },
        // Update which events to show according to current page number
        updateVisibleEvents() {
            this.filterEvents();
            this.visibleEvents = this.filteredEvents.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // Go back a page if we have 0 visible events
            if (this.visibleEvents.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        },
        filterEvents() {
            /** TODO: Filter Recent Highlights and All Archives separately */
            var results = this.eventsData.filter((event) => {
                // var tagMatched = this.selectedTags.length == 0;
                // if (!tagMatched && event.tags) {
                //     for (var selectedTagIndex in this.selectedTags) {
                //         tagMatched = this.selectedTags[selectedTagIndex].match(event.tags);
                //         if (tagMatched) {
                //             break;
                //         }
                //     }
                // }

                // Show events that match checked fileTypes
                var fileTypeMatched = false ;
                if (event.video || event.slides) {
                    var includesRecording, includesFile = false;
                    if (event.video) {
                        includesRecording = this.checkedFileTypes.includes("Recordings");
                    } if (event.slides) {
                        includesFile = this.checkedFileTypes.includes("Files");
                    }
                    fileTypeMatched =  includesRecording || includesFile;
                }

                // Show events that match selected categories
                var categoryMatched = this.selectedCategories.length == 0;
                if (!categoryMatched && event.category) {
                    categoryMatched = this.selectedCategories.includes(event.category);
                }
                
                // Show events that match search keywords
                var searchMatched = true;
                if (this.search) {
                    searchMatched = false;
                    var speakersMatched, organizationMatched, descriptionMatched, searchCategoryMatched, subCategoryMatched, dateMatched, platformMatched = false;
                    const lSearch = this.search.toLowerCase();
                    if (event.speakers) {
                        speakersMatched = event.speakers.toLowerCase().match(lSearch);
                    } if (event.organization) {
                        organizationMatched = event.organization.toLowerCase().match(lSearch);
                    } if (event.description) {
                        descriptionMatched = event.description.toLowerCase().match(lSearch);
                    } if (event.category) {
                        searchCategoryMatched = event.category.toLowerCase().match(lSearch);
                    } if (event.subCategory) {
                        subCategoryMatched = event.subCategory.toLowerCase().match(lSearch);
                    } if (event.date) {
                        dateMatched = event.date.toLowerCase().match(lSearch);
                    } if (event.platform) {
                        platformMatched = event.platform.toLowerCase().match(lSearch);
                    }
                    searchMatched = ((event.title.toLowerCase().match(lSearch)) || speakersMatched || organizationMatched || descriptionMatched || searchCategoryMatched || subCategoryMatched || dateMatched || platformMatched);
                }
                if (this.onHighlights) {
                    return searchMatched;
                } else {
                    return fileTypeMatched && categoryMatched && searchMatched;
                }
                // return tagMatched && fileTypeMatched && categoryMatched && searchMatched;
            });
            this.filteredEvents = results;
        }
    },
    // Show first page of events upon page load
    async created() {
        try {
            this.checkedFileTypes = this.fileTypesList.flat();
            this.updateVisibleEvents();
        } catch (err) {
            console.log(err);
        }
    },
    data() {
        return {
            search: '',
            fileTypesList: [
                "Files",
                "Recordings",
            ],
            pageSize: 7,
            currentPage: 0,
            visibleEvents: [],
            checkedFileTypes: [],
            selectedTags: [],
            selectedCategories: [],
            filteredEvents: [],
            // List of event categories
            categoryList: [
                "IFAR",
                "Transformative Vertical Flight",
                "Airspace Technology Demonstration",
                "Autonomy and the Next Generation Flight Deck Symposium",
                "NASA",
                "OpenVSP Workshop",
                "University Leadership Initiative (ULI)",
                "The LEARN Project",
                "Seedling Fund",
                "Talks",
            ],
            slides: [
                {
                    for: "Transformative Vertical Flight WG",
                    title: "Transformative Vertical Flight Working Groups",
                    description: "Over the past four years a community of aerospace professionals that includes technical, regulatory, and business elements have been exploring the potential for new forms of air transportation systems.  Their focus has been on systems that embody combinations of on-demand, distributed electric propulsion, and vertiport capabilities. This community has been pursuing their interest through a series of Transformative Vertical Flight (TVF) workshops and working groups.\n\nThe objective of the Working Groups is to establish a formal means of continually refining current versions of the Transformative Vertical Flight Roadmap to create an increasingly compelling argument for pursuing this capability.\n\n This website serves as a portal to assist in the establishment, membership recruitment, and continued effective operation of TVF Roadmap Working Groups.  Individuals with an interest in contributing to the advancement and realization of Transformative Vertical Flight as a new form of air transportation are encouraged to volunteer as a TVF Working Group member.",
                    subgroupHeader: "4 Primary Groups",
                    subgroups: [
                        {
                            name: "Private/Recreational Vehicles",
                            groupLead: "Charles Drew",
                            blurb: "Short-range personal and recreational on-demand air transportation",

                        },
                        {
                            name: "Commercial Intra-city",
                            groupLead: "Yolanka Wulff and Darrell Swanson",
                            blurb: "Short-range urban air-taxi, local package delivery, and air-crane lift systems",

                        },
                        {
                            name: "Commercial Inter-city",
                            groupLead: "Seren Weber",
                            blurb: "Longer-range suburban and regional air transit systems, and regional air-transport package distribution",

                        },
                        {
                            name: "Public Services",
                            groupLead: "Johnny Doo",
                            blurb: "TVF-enabled search and rescue, law enforcement, medical transport, emergency/humanitarian response, and military operations",

                        },
                    ],
                    links: [
                        {
                            name: "Introduction Video",
                            link: "https://ac.arc.nasa.gov/p8dwe0bz61qi/"
                        },
                        {
                            name: "Introduction Slides",
                            link: "https://nari.arc.nasa.gov/sites/default/files/attachments/TVF%2BWG%2BIntro.pdf"
                        },
                        {
                            name: "Membership Roster",
                            link: "https://nari.arc.nasa.gov/tvf_wgmembers"
                        }
                    ],
                    buttonLinkText: "Become A Member",
                    buttonLink: "mailto:michael.a.tsairides@nasa.gov?subject=Transformative%20Vertical%20Flight%20Roadmap%20Development%20Working%20Group%20Membership%20Request%20&body=Transformative%20Vertical%20Flight%20Roadmap%20Development%20Working%20Group%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Membership%20Request%0A%0AYour%20Name%3A%0AEmail%3A%0AAffiliation%3A%0APhone%3A%0AWorking%20Group%20name%3A",
                },
                {
                    for: "IFAR",
                    title: "IFAR",
                    description: "IFAR, the International Forum for Aviation Research, is the world's only aviation research establishment network. IFAR is established on a voluntary, non- binding basis. IFAR aims to connect research organisations worldwide, to enable the information exchange and communication on aviation research activities and to develop among its members a shared understanding on challenges faced by the global aviation research community. Our team is working with IFAR to create capabilities and events to support IFAR virtual events to enhance international collaboration in aeronautics research and connect the future leaders of the aviation industry.",
                    buttonLinkText: "Visit Website",
                    buttonLink: "https://ifarlink.aero/",
                    subgroups: [
                        {
                            name: "Early Career Network (ECN)",
                            blurb: "ECN aims to support the growth of young researchers with high potential for national and international leadership.",

                        },
                        {
                            name: "IFAR Virtual Xchange (IVX)",
                            blurb: "IFAR hosts virtual gatherings and conference talks to discuss contemporary topics surrounding aviation.",

                        },
                    ],
                    links: [
                        {
                            name: "Join ECN",
                            link: "https://ifarlink.aero/ecn"
                        }
                    ]
                }
            ],
            visibleSlide: 0
        }
    },
    computed: {
        eventsData: function() {
            if (this.onHighlights) {
                return highlightsJson;
            } else {
                return eventsJson;
            }
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
    .poly-dark {
        object-fit: cover;
        img {
            object-position: 57rem;
        }
    }
    .poly-light {
        transform: rotate(90deg) translateY(75%);
        object-fit: cover;
        width: 50rem;
        margin-top: 10rem;
        img {
            width: 100%;
            height: 100%;
        }
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
    #events {
        margin: 0rem 5rem;
        display: flex;
        .sticky-nav {
            position: -webkit-sticky;
            position: sticky;
            margin-top: 6.5rem;
            top: 2rem;
            margin-bottom: 9.5rem;
            display: grid;
            grid-template-rows: 5rem 5rem 15rem;
            grid-gap: 3rem;
            .switch {
                @include row;
                cursor: pointer;
                text-align: center;
                color: $bluish-grey;
                .highlights {
                    font: $caption;
                    width: 100%;
                    height: 100%;
                    padding: .285rem 0;
                    border-radius: $s-corner;
                    svg {
                        font-size: 2rem;
                        margin: .5rem;
                        color: $light-blue;
                    }
                    &:hover {
                        background-color: $bluish-grey;
                        color: white;
                        transition: .2s;
                    }
                }
                .all {
                    padding: 1.75rem 0;
                    width: 100%;
                    height: 100%;
                    border-radius: $s-corner;
                    &:hover {
                        background-color: $bluish-grey;
                        color: white;
                        transition: .2s;
                    }
                }
            }
            .on-all {
                .highlights {
                    width: 43%;
                    background-color: white;
                }
                .all {
                    width: 57%;
                    background-color: $med-blue;
                }
            }
            .on-highlights {
                .highlights {
                    width: 57%;
                    background-color: $med-blue;
                }
                .all {
                    width: 43%;
                    background-color: white;
                }
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
    #collaborators {
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
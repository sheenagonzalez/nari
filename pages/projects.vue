<template>
    <div>
        <section id="projects">
            <nav>
                <div class="browse">
                    <h2>Browse</h2>
                    <div class="search">
                        <fa icon="search" />
                        <input type="text" placeholder="Search ..." />
                    </div>
                </div>
                <div class="filter">
                    <h2>Filters</h2>
                    <p class="filter-title">Projects</p>
                    <Checkbox :options="projectList" :checkedOptions="projectList" />
                    <p class="filter-title">Discipline Area</p>
                    <multiselect v-model="selectedTags" 
                        :options="tagList" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="false" 
                        :preserve-search="true"
                        placeholder="Select">
                    </multiselect>
                </div>
            </nav>
            <h1>Projects</h1>
            <Project />
        </section>
        <section id="resources">
        </section>
    </div>
</template>

<script>
import Project from "~/components/Project.vue";
import Checkbox from "~/components/Checkbox.vue";
import Multiselect from "vue-multiselect";

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
        Multiselect
    },
    data() {
        return {
            projectList: [
                "The LEARN Project", 
                "Seedling Fund"
            ].sort(),
            selectedTags: [],
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
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";
h1 {
    font: $headline-bold;
}
h2 {
    font: $subheadline-bold;
}
h3, .project-title {
    font: $subheadline;
}
#projects {
    .search {
        @include input-field;
        svg {
            height: 1rem;
            width: 1rem;
        }
        input[type=text] {
            width: 10rem;
            height: 2rem;
            padding-left: 2rem;
        }
    }
}
</style>
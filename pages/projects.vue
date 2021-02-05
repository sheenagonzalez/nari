<template>
  <div>
      <div class="header">
            <div class="bg">
                <div class="strip" id="part-1">
                    <img src="../assets/img/city-grid-pattern.svg" />
                </div>
                <div class="strip" id="part-2">
                    <img src="../assets/img/city-grid-pattern.svg" />
                </div>
                <div class="strip" id="part-3">
                    <img src="../assets/img/city-grid-pattern.svg" />
                </div>
            </div>
          <h1>Projects</h1>
      </div>
      <ShowcaseCard class="card" v-for="(project, i) in projects" :key="i"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :fileName ="project.fileName"
        :alignment="[i % 2 == 0 ? 'left' : 'right']"
      />
  </div>
</template>

<script>
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
    data() {
        return {
            projects: [
                {
                    title: "Advanced Air Mobility (AAM) Working Groups",
                    description: "Through the input and contributions of multiple stakeholders, each possessing the necessary authority, expertise, and/or resources to fulfill a critical role, the working groups provide a forum for those stakeholders to impact AAM’s development and implementation.",
                    link: "https://nari.arc.nasa.gov/aam-portal/",
                    fileName: "aam.png",
                },
                {
                    title: "Space Traffic Management",
                    description: "In order to guarantee scalable, safe and efficient operations in our airspace, NARI is strategizing technical and regulatory provisions for reducing safety risks, developing real-time safety monitoring and assurance system, and developing high-impact aviation autonomy applications.",
                    link: "",
                    fileName: "space-traffic-management.png",
                },
                {
                    title: "University Leadership Initiative (ULI)",
                    description: "ULI provides the opportunity for university teams to exercise technical and organizational leadership in proposing unique technical challenges, defining interdisciplinary solutions, establishing peer review mechanisms, and applying innovative teaming strategies to strengthen the research impact.",
                    link: "https://uli-v4.netlify.app/",
                    fileName: "uli.png",
                },
                {
                    title: "Intern Projects: CalSD Marketplace",
                    description: "In times of the coronavirus pandemic and recent natural disasters, the current economic crisis has exasperated food insecurity in America. NASA interns are working with NARI and Angel Flights in developing CalSD Marketplace, a website which connects farmers and food banks to deliver surplus food to those in need.",
                    link: "https://calsd.marqui.tech/",
                    fileName: "calsd-marketplace.png",
                },
                {
                    title: "International Forum for Aviation Research (IFAR)",
                    description: "IFAR is the world's only aviation research establishment network. Our team is working with IFAR to create capabilities and events to support IFAR virtual events to enhance international collaboration in aeronautics research and connect the future leaders of the aviation industry.",
                    link: "https://ifarlink.aero/",
                    fileName: "ifar.png",
                },
                {
                    title: "Regional Modeling",
                    description: "No information available yet. Check back soon.",
                    link: "",
                    fileName: "regional-modeling.png",
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    position: relative;
    width: 100%;
    height: 14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    h1 {
        font: $headline;
        font-weight: bold;
    }
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        .strip {
            img {
                position: absolute;
                top: 0;
            }
        }
        #part-1 {
            img {
                transform: rotate(90deg) translate(-75%, 0);
            }
        }
        #part-2 {
            img {
                transform: rotate(90deg) translate(-75%, -105%);
            }
        }
        #part-3 {
            img {
                transform: rotate(90deg) translate(-75%, -210%);
            }
        }
    }
}
.card {
    padding: 3rem 0;
    margin: 0 3.5rem;
}
</style>
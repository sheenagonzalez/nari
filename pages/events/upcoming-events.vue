<template>
    <div>
        <div class="header">
            <h1><b>Upcoming</b> Events</h1>
        </div>
        <div class="updated">
            <p class="label">Last Updated</p>
            <p>{{ lastUpdated }}</p>
        </div>
        <div class="eventsList">
            <UpcomingEvent class="eventCard" v-for="(event, i) in upcomingEvents" :key="i"
            :title="event.title"
            :description="event.description"
            :speakers="event.speakers"
            :date="event.date"
            :time="event.time"
            :links="event.links"
            :imgFileName="event.image" />
        </div>
        <add-to-calendar title="VueConf" 
            location="WROCŁAW, POLAND" 
            :start="new Date()"
            :end="new Date((new Date).setDate((new Date).getDate() + 1))"
            details="The first Official Vue.js Conference in the world!" 
            inline-template>
            <div>
            
                <google-calendar id="google-calendar">
                <i class="fa fa-google"></i> Add to Google calendar
                </google-calendar>
                
                <microsoft-calendar id="microsoft-calendar">
                <i class="fa fa-windows"></i> Add to Microsoft live calendar
                </microsoft-calendar>
                
                <office365-calendar id="office365-calendar">
                <i class="fa fa-windows"></i> Add to Office365 outlook calendar
                </office365-calendar>
            </div>
        </add-to-calendar>
    </div>
</template>
<script src="/dist/vue-add-to-calendar.min.js"></script>
<script>
import UpcomingEvent from "~/components/UpcomingEvent.vue";
var AddToCalendar = require('vue-add-to-calendar');

Vue.use(AddToCalendar);
export default {
    data() {
        return {
            lastUpdated: "January 27, 2021",
            upcomingEvents: [
                {
                    title: "2021 TACP Showcase",
                    description: "Join us for the first ever integrated Transformative Aeronautics Concepts Program (TACP) Showcase.\n\nThis virtual event will provide the aerospace community an opportunity to experience projects by University Innovation, Convergent Aeronautics Solutions, and the Transformational Tools and Technologies. Live Q&A and panel sessions will dive into new developments, focusing on innovation and strategy, drawing on resources from traditional and emerging aviation industries, Venture Capital, and non-traditional industries in convergent technology areas. A special topic area will be announced during registration to strengthen innovation diversity throughout the event.\n\nWe hope to see you there, virtually.",
                    speakers: "Multiple Speakers",
                    date: "February 2-4, 2021",
                    image: "tacp.png",
                    links: [
                        {
                            name: "TACP Website",
                            link: "https://nari.arc.nasa.gov/tacp2021showcase/",
                        },
                        {
                            name: "Agenda",
                            link: "https://nari.arc.nasa.gov/tacp2021showcase/agenda",
                        },
                        {
                            name: "Registration",
                            link: "https://nari.arc.nasa.gov/tacp2021showcase/registration/",
                        },
                        {
                            name: "Posters",
                            link: "https://nari.arc.nasa.gov/tacp2021showcase/posters",
                        },
                        {
                            name: "Watch Live",
                            link: "https://nari.arc.nasa.gov/tacp2021showcase/live"
                        }
                    ],
                },
                {
                    title: "UTM Project TIM",
                    description: "A one-day Technical Interchange Meeting (TIM) is being held to provide an opportunity to share insights into the research conducted, lessons learned, and next steps toward the future of UTM.\n\nOn Tuesday (2/23), simply return to this webpage for the YouTube Live Stream link. It will be linked above where it says \"YouTube Live Stream\" 15 minutes prior to the start of the event (9:45AM ET / 6:45AM PT).\n\nFor Q&A, we will be utilizing conferences.io. You will enter your questions into the conferences.io platform and the speakers will respond one of two ways:\n\n1. Share the question and answer verbally with everyone through the YouTube live stream; or\n\n2.Provide a written answer through conferences.io for everyone to reference throughout the event.\n\nWe will not be taking verbal or written questions from the audience through Youtube. However, you will need to use the YouTube Live Stream link to see the presentation materials and hear the discussion.",
                    speakers: "Multiple Speakers",
                    date: "Tuesday, February 23, 2021",
                    time: "10:00AM - 7:30PM ET (7:00AM - 4:30PM PT)",
                    image: "utm2021tim.jpg",
                    links: [
                        {
                            name: "UTM Website",
                            link: "https://utm.arc.nasa.gov/index.shtml",
                        },
                        {
                            name: "Registration",
                            link: "https://nari.arc.nasa.gov/utm2021tim",
                        },
                        {
                            name: "Q&A Forum",
                            link: "https://arc.cnf.io/sessions/qw2n/#!/dashboard"
                        }
                    ]
                },
                {
                    title: "Transformative Vertical Flight Group #3",
                    description: "The TVF Roadmap “Commercial Inter-city Working Group” is tasked with defining activities in appropriate timeframes that would lead to the creation of a national capability for longer-range suburban and regional air transit systems, and regional air-transport package distribution. These activities need to be defined, sequenced, integrated, and explained with sufficient clarity to make a compelling case for pursuing this capability.\n\nWorking Groups (WGs) will document their recommendations by proposing updates to the current version of the TVF Roadmap Activity Name Spreadsheet (TRANS) for the “Commercial Inter-city” Mission Element. As each activity is updated the WG will develop Activity Textual Descriptions (ATDs) that expand on the limited information provided by activity names displayed on the TRANS. The Working Group Leaders (WGL) will be expected to participate in monthly virtual meetings with their WGL counterparts to review and concur on accepting proposed updates. Accepted updates forwarded to NASA Aeronautics will be incorporated into the TVF Roadmap to generate a new reference version.",
                    speakers: "Multiple Speakers",
                    date: "Every Tuesday",
                    time: "11:00-12:00pm PT",
                    image: "tvf.jpg",
                    links: [
                        {
                            name: "Join Conference",
                            link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODExZGNhYWYtMDg4Mi00MGQyLWE1NTgtZGY2Mjc5ZTUzZWFm%40thread.v2/0?context=%7b%22Tid%22%3a%227005d458-45be-48ae-8140-d43da96dd17b%22%2c%22Oid%22%3a%2260010935-4d60-4a49-8f2d-e616536efe8b%22%7d",
                        },
                        {
                            name: "Member Registration",
                            link: "mailto:michael.a.tsairides@nasa.gov?subject=Transformative%20Vertical%20Flight%20Roadmap%20Development%20Working%20Group%20Membership%20Request%20&body=Transformative%20Vertical%20Flight%20Roadmap%20Development%20Working%20Group%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Membership%20Request%0A%0AYour%20Name%3A%0AEmail%3A%0AAffiliation%3A%0APhone%3A%0AWorking%20Group%20name%3A",
                        },
                    ]
                },
                {
                    title: "AAM Ecosystem Working Groups",
                    description: "",
                    speakers: "Multiple Speakers",
                    date: "Various Dates",
                    time: "Various Times",
                    image: "aam2.jpg",
                    links: [
                        {
                            name: "More Details",
                            link: "https://nari.arc.nasa.gov/aam-portal/",
                        }
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    h1 {
        font: $headline;
    }
}
.updated {
    .label {
        color: $bluish-grey;
    }
}
.eventsList {
    margin-bottom: 1rem;
}
.eventsList, .updated, .header {
    margin: 0 8.75rem;
}
</style>
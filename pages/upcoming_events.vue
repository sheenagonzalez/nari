<template>
    <div>
        <div class="header">
            <h1><b>Upcoming</b> Events</h1>
        </div>
        <div class="updated">
            <p>Last Updated</p>
            <p>January 15, 2020</p>
        </div>
        <CollapsibleCard v-for="(event, i) in upcomingEvents" :key="i"
        :title="event.title"
        :description="event.description"
        :speakers="event.speakers"
        :date="event.date"
        :time="event.time"
        :links="event.links" />
    </div>
</template>

<script>
import CollapsibleCard from "~/components/CollapsibleCard.vue";
import eventsJson from "~/json/events.json";
export default {
// FILTER: if date of event is on or after today's date, then include it on the list
}
</script>

<style scoped lang="scss">

</style>
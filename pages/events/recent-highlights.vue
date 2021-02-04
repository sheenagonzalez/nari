<template>
    <div>
        <Events :onHighlights="true" />
    </div>
</template>

<script>
import Events from "~/components/Events.vue";
export default {
    head() {
        return {
            title: 'Events - Recent Highlights',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'NASA Aeronautics Research Institute (NARI) operates at the nexus of industry, government and academia with an outward-facing approach to monitor trends and ...',
                },
            ]
        }
    },
}
</script>

<style scoped lang="scss">

</style>
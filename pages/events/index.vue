<template>
    <div>
        <Events :onHighlights="false" />
    </div>
</template>

<script>
import Events from "~/components/Events.vue";
export default {
    head() {
        return {
            title: 'Events - All Archives',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'NASA Aeronautics Research Institute (NARI) operates at the nexus of industry, government and academia with an outward-facing approach to monitor trends and ...',
                },
            ],
        }
    }
}
</script>

<style scoped lang="scss">

</style>
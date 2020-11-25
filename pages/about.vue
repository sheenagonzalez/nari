<template>
    <div>
        About
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About NARI',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'NASA Aeronautics Research Institute (NARI) operates at the nexus of industry, government and academia with an outward-facing approach to monitor trends and ...',
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

div {
    height: 30rem;
}
</style>
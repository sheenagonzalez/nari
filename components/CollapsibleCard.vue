<template>
    <div class="card">
        <div class="image" v-if="toggled">
            <img src="imgFileName"/>
        </div>
        <div class="text">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
            <div class="details">
                <div class="item" v-if="toggled">
                    <h3>Description</h3>
                    <p>{{ description }}</p>
                </div>
                <div class="item">
                    <h3>Speakers</h3>
                    <p>{{ speakers }}</p>
                </div>
                <div class="item">
                    <h3>Date</h3>
                    <p>{{ date }}</p>
                </div>
                <div class="item">
                    <h3>Time</h3>
                    <p>{{ time }}</p>
                </div>
                <div class="item" v-if="toggled">
                    <h3>Links</h3>
                    <h2></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollapsibleCard",
    props: ["title", "description", "speakers", "date", "time", "links", "imgFileName"],
    data() {
        return {
            toggled: false,
        }
    }
}
</script>

<style scoped lang="scss">

</style>
<template>
    <div class="card">
        <fa :icon="icon" />
        <h1>{{ headline }}</h1>
        <h2>{{ subheadline }}</h2>
        <p>{{ body }}</p>
    </div>
</template>

<script>
export default {
    name: "IconCard",
    props: ["icon", "headline", "subheadline", "body"],
}
</script>

<style scoped lang="scss">
.card {
    width: 100%;
    background-color: white;
    border-radius: $m-corner;
    padding: 1.75rem 2rem;
    svg {
        width: 100%;
        font-size: 5rem;
        text-align: center;
        color: $light-blue;
        margin: 1rem 0;
    }
    h1 {
        font: $headline;
        font-weight: bold;
    }
    h2 {
        font: $subheadline;
        margin-bottom: .5rem;
    }
    p {
        color: $bluish-grey;
        width: 105%;
    }
}
</style>
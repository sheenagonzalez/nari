<template>
    <div>
        <label class="container" v-for="(option, o) in options" :key="o"> {{ option }}
            <input type="checkbox" :id="o" :value="option" v-model="checkedOptions">
            <fa class="checked" icon="check-square" />
            <fa class="unchecked" icon="square" />
        </label>
        <!-- <br>
        <p>Checked: {{ checkedOptions }}</p> -->
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: ["options", "checkedOptions"],
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

/* The container */
.container {
    display: block;
    position: relative;
    padding-left: 2rem;
    margin-bottom: .5rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
svg {
    position: absolute;
    top: .2rem;
    left: 0;
    height: 1rem;
    width: 1rem;
    color: white;
}
.checked {
    display: none;
}
/* On hover, add a bluish grey background color */
.container:hover input ~ .unchecked {
    color: $bluish-grey;
}

/* Show checkmark when the checkbox is checked */
.container input:checked ~ .checked {
    display: block;
    color: $med-blue;
}
/* Hide checkmark when the checkbox is unchecked */
.container input:checked ~ .unchecked {
    display: none;
}
</style>
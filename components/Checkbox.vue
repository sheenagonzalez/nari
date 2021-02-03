<template>
    <div>
        <label class="container" v-for="(option, o) in options" :key="o">
            <input type="checkbox" :id="o" :value="option" v-model="model" />
            <div class="checked"><fa icon="check-square" />{{ option }}</div>
            <div class="unchecked"><fa icon="square" />{{ option }}</div>
        </label>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: ["options", "checkedOptions", "value"],
    data() {
        return {
            model: this.value
        }
    },
    watch: {
        model: function(val) {
            this.$emit("input", val)
        }
    }

}
</script>

<style scoped lang="scss">

/* The container */
.container {
    display: block;
    max-width: 12rem;
    position: relative;
    padding: 0 0 0 2rem;
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
    svg {
        color: $med-blue;
    }
    &:hover {
        color: $bluish-grey;
    }
}
/* Hide checkmark when the checkbox is unchecked */
.container input:checked ~ .unchecked {
    display: none;
}
</style>
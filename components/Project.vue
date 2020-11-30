<template>
    <div v-bind:class="['card', isToggled ? 'toggledCard' : '']" v-on:click="isToggled = !isToggled">
        <div class="header">
            <div class="expand button" v-show="!isToggled">
                <span>EXPAND</span>
                <fa icon="plus-circle" />
            </div>
            <div class="minimize button" v-show="isToggled">
                <span>MINIMIZE</span>
                <fa icon="minus-circle" />
            </div>
            <p class="type">{{ projectType }} • {{ phase }}</p>
            <h1>{{ title }}</h1>
            <p class="date">{{ startDate }} - {{ endDate }}</p>
        </div>
        <transition name="fade" appear>
            <div class="info" v-if="isToggled">
                <div>
                    <div class="item">
                        <h2>Description</h2>
                        <p>{{ description }} </p>
                    </div>
                    <div class="item">
                        <h2>Attachments</h2>
                        <div>{{ attachments }}</div>
                    </div>
                </div>
                <div>
                    <div class="item">
                        <h2>Principal Investigator</h2>
                        <p>{{ principalInvestigator }} </p>
                    </div>
                    <div class="item">
                        <h2>Organization</h2>
                        <p>{{ organization }} </p>
                    </div>
                    <div class="item">
                        <h2>Co-Investigators</h2>
                        <p>{{ coInvestigators }} </p>
                    </div>
                    <div class="item">
                        <h2>Tags</h2>
                        <p>{{ tags }} </p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: [
        "projectType", 
        "phase", 
        "title", 
        "startDate",
        "endDate",
        "description",
        "attachments",
        "principalInvestigator",
        "organization",
        "coInvestigators",
        "tags"
    ],
    data() {
        return {
            isToggled: false
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.card {
    background-color: white;
    border-radius: $m-corner;
    padding: 1.5rem 2rem;
    margin: 1rem 0;
    cursor: pointer;
    h1 {
        font: $subheadline;
        line-height: 1.5;
        margin: .25rem 0;
        max-width: 45rem;
    }
    h2, .type, .date {
        color: $bluish-grey;
    }
    .button {
        text-align: right;
        position: absolute;
        right: 7rem;
        color: $med-blue;
        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
        span {
            font: $caption;
            color: $bluish-grey;
            position: absolute;
            top: .4rem;
            right: 2.25rem;
        }
    }
    &:hover {
        background-color: $bluish-grey;
        color: $grey;
        transition: .2s;
        h2, .type, .date, span {
            color: $grey;
            transition: .2s;
        }
        .button {
            color: white;
        }
    }
    .info {
        display: grid;
        grid-template-columns: fit-content(50%) fit-content(28%);
        grid-gap: 6rem;
        margin-top: 1rem;
        .item {
            margin-bottom: 1rem;
        }
    }
}
.toggledCard {
    background-color: $med-blue;
    border-radius: $l-corner;
    color: white;
    transition: .2s;
    &:hover {
        background-color: $med-blue;
        color: white;
        transition: .2s;
        h2, .type, .date, span {
            color: $bluish-grey;
        }
    }
    .button {
        color: white;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: transform .5s, background-color .1s, color 1s, border-radius 1s;
}
.fade-enter,
.fade-leave-to {
    transform: translate(0rem, -1rem);
    transition: all 0s;
}
</style>
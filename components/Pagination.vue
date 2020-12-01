<template>
    <div v-if="totalPages() > 0" class="wrapper">
        <span class="label">Page</span>
        <span v-if="activePrevButton()" class="prev button" v-on:click="updatePage(currentPage - 1)"><</span>
        <span v-if="!activePrevButton()" class="disabled prev button"><</span>

        <span v-if="showPrevPage(4)" class="pagenum button" v-on:click="updatePage(currentPage - 4)">{{ currentPage - 3 }}</span>
        <span v-if="showPrevPage(3)" class="pagenum button" v-on:click="updatePage(currentPage - 3)">{{ currentPage - 2 }}</span>
        <span v-if="showPrevPage(2)" class="pagenum button" v-on:click="updatePage(currentPage - 2)">{{ currentPage - 1 }}</span>
        <span v-if="showPrevPage(1)" class="pagenum button" v-on:click="updatePage(currentPage - 1)">{{ currentPage }}</span>
        <span class="current button">{{ currentPage + 1}}</span>
        <span v-if="showNextPage(1)" class="pagenum button" v-on:click="updatePage(currentPage + 1)">{{ currentPage + 2 }}</span>
        <span v-if="showNextPage(2)" class="pagenum button" v-on:click="updatePage(currentPage + 2)">{{ currentPage + 3 }}</span>
        <span v-if="showNextPage(3)" class="pagenum button" v-on:click="updatePage(currentPage + 3)">{{ currentPage + 4 }}</span>
        <span v-if="showNextPage(4)" class="pagenum button" v-on:click="updatePage(currentPage + 4)">{{ currentPage + 5 }}</span>

        <span v-if="activeNextButton()" class="next button" v-on:click="updatePage(currentPage + 1)">></span>
        <span v-if="!activeNextButton()" class="disabled next button">></span>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["items", "currentPage", "pageSize", "limit"],
    methods: {
        updatePage(pageNumber) {
            this.$emit("page:update", pageNumber);
        },
        totalPages() {
            return Math.ceil(this.items.length / this.pageSize);
        },
        activePrevButton() {
            return this.currentPage > 0;
        },
        activeNextButton() {
            return this.currentPage < (this.totalPages() - 1);
        },
        showPrevPage(backwardAmt) {
            return (this.currentPage > backwardAmt - 1) 
            && ( this.withinRange(backwardAmt) ? true : false );
        },
        showNextPage(forwardAmt) {
            return (this.currentPage < (this.totalPages() - forwardAmt))
            && ( this.withinRange(forwardAmt) ? true : (forwardAmt + 1 <= Math.floor(this.limit/2)) );
        },
        withinRange(amt) {
            return (amt - 1 < Math.floor(this.limit/2));
        }
    },
}
</script>

<style scoped lang="scss">

.wrapper {
    text-align: right;
    margin-top: 2.5rem;
    cursor: default;
    .label {
        margin-right: 1rem;
    }
    .button {
        cursor: pointer;
        padding: .75rem;
        color: $bluish-grey;
        &:hover {
            color: $not-so-black;
        }
    }
    .current {
        color: white;
        background-color: $med-blue;
        padding: .75rem 1rem;
        border-radius: $s-corner;
        cursor: default;
        &:hover {
            color: white;
        }
    }
    .disabled {
        display: none;
    }
}
</style>
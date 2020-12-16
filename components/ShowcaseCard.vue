<template>
    <div :class="['card', alignment == 'left' ? 'left' : 'right']">
        <div class="background">
            <div class="solid"></div>
            <img class="pattern" src="~/assets/img/city-grid-pattern.svg"/>
        </div>
        <div class="content">
            <div class="image">
                <img :src="imgLink" :alt="fileName"/>
            </div>
            <div class="info">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <a :href="link" class="button">Learn more ></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowcaseCard",
    props: ["title", "description", "link", "fileName", "alignment"],
    computed: {
        imgLink() {
            // Return nothing for the default empty string
            if (!this.fileName) {
                return;
            }
            const fileName = this.fileName.toLowerCase();
            // Request the image as a webpack module by using `require`
            console.log(`~/assets/img/${fileName}`);
            return require(`~/assets/img/${fileName}`);
        },
    }
}
</script>

<style scoped lang="scss">
.card {
    z-index: 1;
    background-color: white;
    border-radius: $l-corner;
    width: 93.5%;
    position: relative;
    right: 0;
    .background {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 4rem;
        .pattern {
            transform: rotate(-90deg);
        }
    }
    .content {
        display: grid;
        grid-template-columns: 1.115fr .885fr;
        grid-gap: 4.25rem;
        padding: 4rem 2.25rem;
        .image {
            z-index: 3;
        }
        .info {
            z-index: 3;
            h1 {
                font: $headline;
                margin-bottom: 1rem;
            }
            p {
                margin-bottom: 4.25rem;
            }
            .button {
                @include button;
            }
        }
    }
}
.left {
    .content {
        padding-left: 0;
    }
}
.right {
    .content {
        padding-right: 0;
        .image {
            grid-column: 2;
            grid-row: 1;
        }
        .info {
            grid-column: 1;
            grid-row: 1;
        }
    }
}
</style>
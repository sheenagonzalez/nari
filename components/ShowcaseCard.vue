<template>
    <div>
        <div v-if="alignment == 'left'" class="left wrapper">
            <div class="image">
                <img :src="imgLink" :alt="fileName"/>
            </div>
            <div class="info">
                <div class="text">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <a :href="link" class="button">Learn more ></a>
                </div>
            </div>
        </div>
        <div v-if="alignment == 'right'" class="right wrapper">
            <div class="info">
                <div class="text">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <a :href="link" class="button">Learn more ></a>
                </div>
            </div>
            <div class="image">
                <img :src="imgLink" :alt="fileName"/>
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
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.25rem;
    .image {
        border-radius: $m-corner;
        width: 100%;
        object-fit: cover;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        border-radius: $m-corner;
        .text {
            h1 {
                font: $headline;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
            p {
                margin-bottom: 4.5rem;
            }
            width: 100%;
            padding: 3.5rem 13%;
        }
    }
}
.left {
    .image {
        grid-column: 1 / 2;
    }
    .info {
        grid-column: 2 / 3;
        background-color: $med-blue;
        color: white;
        .button {
            @include button-alt;
        }
    }
}
.right {
    .info {
        grid-column: 1 / 2;
        background-color: white;
        .button {
            @include button;
        }
    }
    .image {
        grid-column: 2 / 3;
    }
}
</style>
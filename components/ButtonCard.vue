<template>
  <div class="card">
    <a class="wrapper-link" v-if="type == 'article'" target="_blank" :href="link">
        <div class="text">
            <p class="meta">{{ date }}<span v-if="typeInfo != ''"> • Article ({{ typeInfo }} read)</span></p>
            <h1>{{ title }}</h1>
            <p class="snippet">{{ snippet }}</p>
        </div>
        <div class="arrow"><fa icon="arrow-right" /></div>
    </a>
    <nuxt-link class="wrapper-link" v-if="type == 'event'" :to="link">
        <div class="text">
            <p class="meta">{{ date }}<span v-if="typeInfo != ''"> • {{ typeInfo }}</span></p>
            <h1>{{ title }}</h1>
            <p class="snippet">{{ snippet }}</p>
        </div>
        <div class="arrow"><fa icon="arrow-right" /></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "ButtonCard",
    props: ["title", "date", "snippet", "type", "typeInfo", "link"],
}
</script>

<style scoped lang="scss">
.card {
    background-color: white;
    border-radius: $m-corner;
    width: 100%;
    .wrapper-link {
        @include row;
        padding: 1.25rem 1.75rem;
        position: relative;
        .text {
            width: 80%;
            .meta {
                font: $caption;
                color: $med-blue;
            }
            h1 {
                font: $subheadline;
                margin: .25rem 0;
            }
            .snippet {
                color: $bluish-grey;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        .arrow {
            position: absolute;
            right: 1.25rem;
            color: $med-blue;
            svg {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
    }
    :hover {
        background-color: $med-blue;
        transition: .2s;
        .text {
            .meta {
                color: $light-blue;
                transition: .2s;
            }
            h1 {
                color: white;
                transition: .2s;
            }
            .snippet {
                color: $bluish-grey;
                transition: .2s;
            }
        }
        .arrow {
            color: white;
            transition: .2s;
        }
    }
}
</style>
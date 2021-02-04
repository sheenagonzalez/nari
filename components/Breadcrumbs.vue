<template>
<!-- BREADCRUMB COMPONENT on top of the page for easier navigation and understanding of sitemap, SEO optimization -->
    <!-- Hide breadcrumbs at Home page -->
    <div :class="this.$route.name == 'index' ? 'hidden' : '' ">
        <v-breadcrumbs :items="crumbs" />
    </div>
</template>

<script>
export default {
    name: "Breadcrumbs",
    computed: {
        crumbs() {
            const fullPath = this.$route.fullPath;
            const params = fullPath.substring(1).split('/');
            const crumbs = [];

            let path = '';
            let title = '';
            let isCurrent = false;

            // Home is always the first item on Breadcrumb
            crumbs.push ({
                text: "Home",
                disabled: false,
                href: "/",
            });

            // Process each page path in the current URL and add to Breadcrumb
            // isCurrent: returns a boolean if the page path is the current page
            // path: recursive way of finding each page path as we iterate through the URL
            // title: transforms the page path name to readable text (title case and change hyphens to spaces)
            params.forEach((param, index) => {
                path = `${path}/${param}`;
                isCurrent = path == this.$route.path;
                title = `${param}`.replace(/-/g, ' ').replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());

                crumbs.push({
                    text: title,
                    disabled: isCurrent,
                    href: path,
                });
            });

            return crumbs;
        }
    }
}
</script>

<style scoped lang="scss">
div {
    margin-left: 3.5rem;
    font: $body;
    z-index: 10000;
}
.hidden {
    display: none;
}
</style>
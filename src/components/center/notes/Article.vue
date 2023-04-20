<template>
    <div class="article-mk">
        <iframe :src="'/testHtml/' + aid + '.html'" class="article-iframe"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: ['aid']
}
</script>

<style scoped>
.article-iframe {
    width: 770px;
    height: 536px;
    border: 0;
}
</style>
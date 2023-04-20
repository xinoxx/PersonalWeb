<template>
    <div class="backTop"></div>
</template>

<script>
export default {
    name: 'BackTop',
}
</script>

<style scoped>
.backTop {
    width: 25px;
    height: 25px;
    background-color: pink;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.5s;
}

.backTop:hover{
    opacity: 1;
}
</style>
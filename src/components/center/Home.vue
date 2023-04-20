<template>
    <div class="banner">
        <div class="wrapper">
            <div class="line1"></div>
            <ul>
                <li>
                    <router-link to="/arts"></router-link>
                </li>
                <li>
                    <router-link to="/games"></router-link>
                </li>
                <li>
                    <router-link to="/notes"></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped>
/* 局部引入css文件 一定要加; */
@import '@/assets/css/center/home.css';
</style>
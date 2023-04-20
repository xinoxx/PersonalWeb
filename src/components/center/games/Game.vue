<template>
    <div class="game">
        <div class="wrapper">
            <ScreenBox></ScreenBox>
            <SideBar></SideBar>
        </div>
    </div>
</template>

<script>
import ScreenBox from './ScreenBox.vue'
import SideBar from './SideBar.vue'

export default {
    name: 'Game',
    components: {
        ScreenBox,
        SideBar
    }
}
</script>

<style scoped>
.game {
    height: 85%;
}

.game .wrapper {
    margin: 15px auto;
    display: flex;
    width: 80%;
    height: 100%;
}
</style>
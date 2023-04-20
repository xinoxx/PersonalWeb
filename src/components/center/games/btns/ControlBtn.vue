<template>
    <div class="controlBtn" ref="controlBtnRef">
        <button></button>
    </div>
</template>

<script>
export default {
    name: 'ControlBtn',
    methods: {
        inactiveStyle() {
            this.$refs.controlBtnRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.controlBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 33px;
    background: url(@/assets/images/game_page.png) -874px -522px;
    cursor: pointer;
}

.controlBtn:hover,
.controlBtn.active {
    background: url(@/assets/images/game_page.png) -874px -558px;
}

.controlBtn button {
    margin: auto auto;
    width: 96px;
    height: 21px;
    background: url(@/assets/images/game_page.png) -882px -594px;
}
</style>
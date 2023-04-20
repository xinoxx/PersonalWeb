<template>
    <div class="infoBtn" ref="infoBtnRef">
        <button></button>
    </div>
</template>

<script>
export default {
    name: 'InfoBtn',
    mounted() {
        this.$refs.infoBtnRef.classList.add('active')
    },
    methods: {
        inactiveStyle() {
            this.$refs.infoBtnRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.infoBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 33px;
    background: url(@/assets/images/game_page.png) -796px -522px;
    cursor: pointer;
}

.infoBtn:hover,
.infoBtn.active {
    background: url(@/assets/images/game_page.png) -796px -558px;
}

.infoBtn button {
    margin: auto auto;
    width: 57px;
    height: 21px;
    background: url(@/assets/images/game_page.png) -804px -594px;
}
</style>
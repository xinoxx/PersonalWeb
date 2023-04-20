<template>
    <div class="noticeBtn" ref="noticeBtnRef">
        <button></button>
    </div>
</template>

<script>
export default {
    name: 'NoticeBtn',
    methods: {
        inactiveStyle() {
            this.$refs.noticeBtnRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.noticeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99px;
    height: 33px;
    background: url(@/assets/images/game_page.png) -991px -522px;
    cursor: pointer;
}

.noticeBtn:hover,
.noticeBtn.active {
    background: url(@/assets/images/game_page.png) -991px -558px;
}

.noticeBtn button {
    margin: auto auto;
    width: 81px;
    height: 21px;
    background: url(@/assets/images/game_page.png) -999px -594px;
}
</style>
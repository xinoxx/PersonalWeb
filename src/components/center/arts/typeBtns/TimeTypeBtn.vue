<template>
    <div class="timeBtn" ref="timeBtnRef">
        <button>
            <span ref="timeSpanRef"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TimeBtn',
    mounted() {
            this.$refs.timeBtnRef.classList.add('active')
            this.$refs.timeSpanRef.classList.add('active')
    },
    methods: {
        inactiveStyle() {
            this.$refs.timeBtnRef.classList.remove('active')
            this.$refs.timeSpanRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.timeBtn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 45px;
    background: url(@/assets/images/art_page.png) -470px -35px;
}

.timeBtn:hover,
.timeBtn.active {
    background: url(@/assets/images/art_page.png) -470px -85px;
}

.timeBtn button {
    width: 105px;
    height: 25px;
    background: url(@/assets/images/art_page.png) -480px 0;
}

.timeBtn button span {
    display: none;
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 15px;
    background-image: url(@/assets/images/tag_choosed.png);
}

.timeBtn button span.active {
    display: block;
}
</style>
<template>
    <div class="totBtn" ref="totBtnRef">
        <button>
            <span ref="totSpanRef"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TotBtn',
    methods: {
        inactiveStyle() {
            this.$refs.totBtnRef.classList.remove('active')
            this.$refs.totSpanRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.totBtn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 45px;
    background: url(@/assets/images/art_page.png) -578px -211px;
}

.totBtn:hover,
.totBtn.active {
    background: url(@/assets/images/art_page.png) -578px -259px;
}

.totBtn button {
    width: 76px;
    height: 25px;
    background: url(@/assets/images/art_page.png) -588px -183px;
}

.totBtn button span {
    display: none;
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 15px;
    background-image: url(@/assets/images/tag_choosed.png);
}

.totBtn button span.active {
    display: block;
}
</style>
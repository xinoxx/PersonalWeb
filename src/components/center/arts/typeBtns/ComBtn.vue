<template>
    <div class="comBtn" ref="comBtnRef">
        <button>
            <span ref="comSpanRef"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ComBtn',
    methods: {
        inactiveStyle() {
            this.$refs.comBtnRef.classList.remove('active')
            this.$refs.comSpanRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.comBtn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 45px;
    background: url(@/assets/images/art_page.png) -464px -211px;
}

.comBtn:hover,
.comBtn.active {
    background: url(@/assets/images/art_page.png) -464px -259px;
}

.comBtn button {
    width: 85px;
    height: 25px;
    background: url(@/assets/images/art_page.png) -474px -183px;
}

.comBtn button span {
    display: none;
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 15px;
    background-image: url(@/assets/images/tag_choosed.png);
}

.comBtn button span.active {
    display: block;
}
</style>
<template>
    <div class="plBtn" ref="plBtnRef">
        <button>
            <span ref="plSpanRef"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'PlBtn',
    methods: {
        inactiveStyle() {
            this.$refs.plBtnRef.classList.remove('active')
            this.$refs.plSpanRef.classList.remove('active')
        }
    }
}
</script>

<style scoped>
.plBtn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 45px;
    background: url(@/assets/images/art_page.png) -605px -85px;
}

.plBtn:hover,
.plBtn.active {
    background: url(@/assets/images/art_page.png) -605px -35px;
}

.plBtn button {
    width: 50px;
    height: 25px;
    background: url(@/assets/images/art_page.png) -615px 0;
}

.plBtn button span {
    display: none;
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 15px;
    background-image: url(@/assets/images/tag_choosed.png);
}

.plBtn button span.active {
    display: block;
}
</style>
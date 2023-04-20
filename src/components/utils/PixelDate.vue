<template>
    <div class="dateCreator">
        <ul ref="ulRef">
            <li v-for="i in 10"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PixelDate",
    props: {
        date: {
            default: "19990925",
            type: String
        }
    },
    mounted() {
        this.updateStyle()
    },
    methods: {
        updateStyle() {
            let index = 0
            for (let i = 0; i < 8; i++) {
                let num = parseInt(this.date[i])
                let imgMoveX = -12 * num
                if (i < 4) index = i
                else if (i >= 4 && i < 6) index = i + 1
                else if (i >= 6 && i < 8) index = i + 2
                this.$refs.ulRef.childNodes[index].style.backgroundPosition = `${imgMoveX}px 0`
            }
        }
    }
}
</script>

<style scoped>
.dateCreator {
    position: absolute;
    top: 35px;
    left: 42px;
    width: 141px;
    height: 21px;
}

.dateCreator ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dateCreator ul li {
    width: 12px;
    height: 21px;
    background-image: url(@/assets/images/number.png);
}

.dateCreator ul li:nth-child(5),
.dateCreator ul li:nth-child(8) {
    width: 9px;
    height: 3px;
    background-image: url(@/assets/images/number.png);
    background-position: -120px -8px;
}
</style>
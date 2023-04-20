<template>
    <div class="artList" ref="artListRef">
        <ul>
            <li v-for="(pic, index) in picList" :key="pic.pid">
                <div class="thumbnail" @click="clickThumbnail(pic, index)">
                    <img :src="pic.thumbnail">
                    <span class="timeMask">{{ pic.date }}</span>
                </div>
            </li>
        </ul>
        <BackTop v-show="backTopOn" @click.native="clickBackTop"></BackTop>
    </div>
</template>

<script>
import BackTop from '@/components/btns/BackTop.vue'

export default {
    name: "PicList",
    props: ['picList'],
    components: {
        BackTop
    },
    data() {
        return {
            picObj: {
                pic: {
                    "pid": 0,
                    "src": "",
                    "thumbnail": "",
                    "type": [],
                    "date": ""
                },
                index: 0
            },
            backTopOn: false
        }
    },
    mounted() {
        this.$refs.artListRef.addEventListener('scroll', () => {
            this.$nextTick(() => {
                let scrollTop = this.$refs.artListRef.scrollTop
                let listHeight = this.$refs.artListRef.clientHeight
                let scrollHeightOff = this.$refs.artListRef.scrollHeight - 20
                if (scrollTop + listHeight >= scrollHeightOff) {
                    this.backTopOn = true
                } else {
                    this.backTopOn = false
                }
            })
        })
    },
    methods: {
        clickThumbnail(pic, index) {
            this.picObj.pic = pic
            this.picObj.index = index
            this.$emit('sendDisplayPic', this.picObj)
        },
        clickBackTop() {
            this.$refs.artListRef.scrollTop = 0
            this.backTopOn = false
        }
    }
}
</script>

<style lang="less" scoped>
.artList { 
    float: right;
    margin: 20px 30px 0 0;
    width: 820px;
    height: 460px;
    overflow: auto;
}

.artList::-webkit-scrollbar {
    width: 5px;
    background-color: black;
}

.artList::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: yellow;
}

.artList::-webkit-scrollbar-button {
    display: none;
}

.artList ul {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
}

.artList ul li {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 150px;
    height: 200px;
    transition: all 0.5s;
}
.artList ul li:nth-child(5n) {
    margin-right: 0;
}

.artList ul li:hover {
    transform: scale(1.1);
}

.artList ul li:hover .thumbnail {
    background: url(@/assets/images/art_page.png) -305px -268px;
}

.artList ul li .thumbnail {
    position: relative;
    width: 150px;
    height: 180px;
    background: url(@/assets/images/art_page.png) -305px 0;
    cursor: pointer;
}

.artList ul li .thumbnail img {
    position: absolute;
    top: 15px;
    left: 15px;
    object-fit: cover;
    width: 120px;
    height: 155px;
}

.artList ul li .thumbnail .timeMask {
    position: absolute;
    right: 0;
    bottom: -15px;
    font-size: 12px;
    text-align: center;
    height: 15px;
    width: 60px;
    opacity: 0.5;
}

/deep/ .backTop{
    position: absolute;
    bottom: 10px;
    right: 50px;
    background: url(@/assets/images/art_page.png) -560px -135px;
}
</style>
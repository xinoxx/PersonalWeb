<template>
    <div class="art">
        <div class="wrapper">
            <!-- 分类导航 -->
            <div class="nav">
                <ul>
                    <li>
                        <TimeTypeBtn @click.native="clickTag(TIME_TAG, $event)" ref="timeBtnRef"></TimeTypeBtn>
                    </li>
                    <li>
                        <ComBtn @click.native="clickTag(COM_TAG, $event)" ref="comBtnRef"></ComBtn>
                    </li>
                    <li>
                        <PlBtn @click.native="clickTag(PL_TAG, $event)" ref="plBtnRef"></PlBtn>
                    </li>
                    <li>
                        <TotBtn @click.native="clickTag(TOT_TAG, $event)" ref="totBtnRef"></TotBtn>
                    </li>
                </ul>
                <div class="tagText">
                    <div v-show="isTimeTag">
                        <p class="title">Order by Time.</p>
                        <p class="info">按时间排序...</p>
                    </div>
                    <div v-show="isComTag">
                        <p class="title">Commission</p>
                        <p class="info">搬的一些砖（禁用w</p>
                    </div>
                    <div v-show="isPlTag">
                        <p class="title">Paradox Live</p>
                        <p class="info">PL偶尔摸摸ww</p>
                    </div>
                    <div v-show="isTotTag">
                        <p class="title">Tears of Themis</p>
                        <p class="info">浅涂涂未定www</p>
                    </div>
                </div>
            </div>
            <!-- 图片list显示区域 -->
            <div class="box">
                <div class="display">
                    <div class="display_bg"></div>
                    <img :src="picObj.pic.src" >
                    <div class="toggle">
                        <button class="left" @click="prevPic"></button>
                        <button class="right" @click="nextPic"></button>
                    </div>
                </div>
                <PicList :picList="pics" @sendDisplayPic="displayPicFun"></PicList>
            </div>
        </div>
    </div>
</template>

<script>
import TimeTypeBtn from './typeBtns/TimeTypeBtn.vue'
import PlBtn from './typeBtns/PlBtn.vue'
import ComBtn from './typeBtns/ComBtn.vue'
import TotBtn from './typeBtns/TotBtn.vue'
import PicList from './PicList.vue'

export default {
    name: "Art",
    components: {
        TimeTypeBtn,
        PlBtn,
        ComBtn,
        TotBtn,
        PicList,
    },
    data() {
        return {
            TIME_TAG: "Time",
            PL_TAG: "Pl",
            COM_TAG: "Commission",
            TOT_TAG: "Tears of Themis",
            isTimeTag: true,
            isPlTag: false,
            isComTag: false,
            isTotTag: false,
            pics: [],
            picObj: {
                pic: {
                    "pid": 0,
                    "src": "#",
                    "thumbnail": "#",
                    "type": ['none'],
                    "date": "19990925"
                },
                index: 0
            },
            picIndex: 0
        }
    },
    created() {
        // 获取默认内容图片列表
        this.getPicsByTime()
    },
    methods: {
        clickTag(tagName, e) {
            // 更新样式
            this.updateTagBtn(tagName)
            // 此时的e.currentTarget是组件最外层div
            e.currentTarget.classList.add('active')
            e.currentTarget.childNodes[0].childNodes[0].classList.add('active')
            
            // 获取对应数据
            if (tagName == this.TIME_TAG) {
                this.getPicsByTime()
            }else if (tagName == this.PL_TAG) {
                this.getPicsByPl()
            }else if (tagName == this.COM_TAG) {
                this.getPicsByCom()
            }else if (tagName == this.TOT_TAG) {
                this.getPicsByTot()
            }
        },
        async getPicsByTime() {
            const { data : res } = await this.$http({
                method: 'GET',
                url: '/testData/json/artData.json',
                params: {
                    // 传递给后台的参数，需要Time Order的数据
                }
            })
            this.pics = res.picList

            // 在展示框中显示获取列表的第一张图片
            this.$nextTick(function() {
                this.picObj.index = 0
                this.picObj.pic.src = this.pics[0].src
            })
        },
        // FIX：复用不同类型的访问，总不能每次都写一个方法好吧　怒
        async getPicsByPl() {
            const { data : res } = await this.$http({
                method: 'GET',
                url: '/testData/json/artData1.json',
                params: {
                    // 传递给后台的参数，需要PL Order的数据
                }
            })
            this.pics = res.picList

            // 在展示框中显示获取列表的第一张图片
            this.$nextTick(function() {
                this.picObj.index = 0
                this.picObj.pic.src = this.pics[0].src
            })
        },
        // FIX：复用不同类型的访问，总不能每次都写一个方法好吧　怒
        async getPicsByCom() {
            const { data : res } = await this.$http({
                method: 'GET',
                url: '/testData/json/artData2.json',
                params: {
                    // 传递给后台的参数，需要PL Order的数据
                }
            })
            this.pics = res.picList

            // 在展示框中显示获取列表的第一张图片
            this.$nextTick(function() {
                this.picObj.index = 0
                this.picObj.pic.src = this.pics[0].src
            })
        },
        // FIX：复用不同类型的访问，总不能每次都写一个方法好吧　怒
        async getPicsByTot() {
            const { data : res } = await this.$http({
                method: 'GET',
                url: '/testData/json/artData3.json',
                params: {
                    // 传递给后台的参数，需要PL Order的数据
                }
            })
            this.pics = res.picList

            // 在展示框中显示获取列表的第一张图片
            this.$nextTick(function() {
                this.picObj.index = 0
                this.picObj.pic.src = this.pics[0].src
            })
        },
        updateTagBtn(choosedTag) {
            // 更新选中Btn状态，且撤回原选中Btn组件的active样式
            if (this.isTimeTag && choosedTag != this.TIME_TAG) {
                this.isTimeTag = false
                this.$refs.timeBtnRef.inactiveStyle()
            }
            else if(choosedTag === this.TIME_TAG) {
                this.isTimeTag = true
            }

            if (this.isPlTag && choosedTag != this.PL_TAG) {
                this.isPlTag = false
                this.$refs.plBtnRef.inactiveStyle()
            }
            else if(choosedTag === this.PL_TAG) {
                this.isPlTag = true
            }

            if (this.isComTag && choosedTag != this.COM_TAG) {
                this.isComTag = false
                this.$refs.comBtnRef.inactiveStyle()
            }
            else if(choosedTag === this.COM_TAG) {
                this.isComTag = true
            }

            if (this.isTotTag && choosedTag != this.TOT_TAG) {
                this.isTotTag = false
                this.$refs.totBtnRef.inactiveStyle()
            }
            else if(choosedTag === this.TOT_TAG) {
                this.isTotTag = true
            }
        },
        // 更新当前displayFrame显示区域的图像
        displayPicFun(displayPic) {
            this.picObj = displayPic
        },
        prevPic() {
            let index = this.picObj.index
            if(index == 0) index = this.pics.length - 1
            else index--
            this.picObj.pic = this.pics[index]
            this.picObj.index = index
        },
        nextPic() {
            let index = this.picObj.index
            if(index == this.pics.length - 1) index = 0
            else index++
            this.picObj.pic = this.pics[index]
            this.picObj.index = index
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/center/art.css';
</style>
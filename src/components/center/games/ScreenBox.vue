<template>
    <div class="screen">
        <div class="boxBg">
            <div class="box">
                <ul ref="boxUlRef">
                    <li v-for="(img, index) in picList" :key="img.gpid">
                        <img :src="img.src">
                    </li>
                    <li v-for="(video, index) in videoList" :key="video.gvid">
                        <video :src="video.src" controls></video>
                    </li>
                </ul>
            </div>
            <button class="left" @click="clickDisplayLeft"></button>
            <button class="right" @click="clickDisplayRight"></button>
            <span class="leftTag" v-show="leftNoMore"></span>
            <span class="rightTag" v-show="rightNoMore"></span>
        </div>
        <div class="bottom">
            <div class="time">
                <PixelDate :date="gameDate" ref="pixelDateRef"></PixelDate>
            </div>
            <div class="control">
                <button class="left" @click="clickGameLeft"></button>
                <button class="right" @click="clickGameRight"></button>
                <span class="leftTag" v-show="gameLeftNoMore"></span>
                <span class="rightTag" v-show="gameRightNoMore"></span>
            </div>
        </div>
    </div>
</template>

<script>
import PixelDate from '@/components/utils/PixelDate.vue'
import bus from '@/components/eventBus.js'

export default {
    name: 'ScreenBox',
    components: {
        PixelDate
    },
    data() {
        return {
            gameDate: "00000000",
            games: [],
            picList: [],
            videoList: [],
            gameObj: {
                game: {},
                // 当前显示内容（图片/视频）的索引
                index: 0
            },
            // 当前选择游戏的索引
            gameIndex: 0,
            leftNoMore: false,
            rightNoMore: false,
            gameLeftNoMore: false,
            gameRightNoMore: false
        }
    },
    created() {
        // 获取游戏列表
        this.getGameInfo()
    },
    updated() {
        // 更新时间
        this.$nextTick(function() {
            this.$refs.pixelDateRef.updateStyle()
        })
    },
    methods: {
        clickGameLeft() {
            if (this.gameIndex - 1 >= 0) {
                this.gameIndex--
                this.updateGame(this.gameIndex)
            } else {
                this.gameLeftNoMore = true
                setTimeout(() => {
                    this.gameLeftNoMore = false
                }, 1000)
            }
        },
        clickGameRight() {
            if (this.gameIndex + 1 < this.games.length) {
                this.gameIndex++
                this.updateGame(this.gameIndex)
            } else {
                this.gameRightNoMore = true
                setTimeout(() => {
                    this.gameRightNoMore = false
                }, 1000)
            }
        },
        clickDisplayLeft() {
            this.pauseVideo()
            if (this.gameObj.index - 1 >= 0) {
                this.gameObj.index--
                this.$refs.boxUlRef.style.transform = `translate(${-768 * this.gameObj.index}px)`
            } else {
                this.leftNoMore = true
                setTimeout(() => {
                    this.leftNoMore = false
                }, 800)
            }
        },
        clickDisplayRight() {
            this.pauseVideo()
            // 走马灯式轮播图片以及视频
            let len = this.picList.length + this.videoList.length
            if (this.gameObj.index + 1 < len) {
                this.gameObj.index++
                this.$refs.boxUlRef.style.transform = `translate(${-768 * this.gameObj.index}px)`
            } else {
                this.rightNoMore = true
                setTimeout(() => {
                    this.rightNoMore = false
                }, 800)
            }
        },
        pauseVideo(){
            // 如果当前播放的是视频，则需要停止视频播放
            let index = this.gameObj.index
            let picLen = this.picList.length
            let videoLen = this.videoList.length
            if (index >= picLen && index < picLen + videoLen) {
                // 说明此时在播放视频，该视频暂停
                this.$refs.boxUlRef.childNodes[index].childNodes[0].pause()
            }
        },
        async getGameInfo() {
            const { data : res } = await this.$http({
                methods: 'GET',
                url: '/testData/json/gameData.json',
                params: {
                    // 传递给后台的数据
                }
            })
            this.games = res.gameList

            // 默认显示第一个游戏的相关图片和视频
            this.$nextTick(function() {
                this.updateGame(0)
            })
        },
        updateGame(index) {
            this.gameIndex = index
            this.gameObj.index = 0
            this.gameObj.game = this.games[index]
            this.picList = this.games[index].pics
            this.videoList = this.games[index].videos
            this.gameDate = this.games[index].date
            this.$refs.boxUlRef.style.transform = 'translate(0px)'

            // 传递数据给SideBar.vue
            bus.$emit('gameObj', this.gameObj.game)
        }
    }
}
</script>

<style scoped>
.screen {
    display: block;
    padding-left: 40px;
    width: 860px;
    height: 578px;
}

.screen .boxBg {
    position: relative;
    padding: 34px 6px 12px;
    width: 780px;
    height: 478px;
    background: url(@/assets/images/game_page.png);
}

.screen .boxBg .box {
    width: 768px;
    height: 432px;
    background-color: #141414;
    overflow: hidden;
}

.screen .boxBg .box ul {
    display: flex;
    justify-content: left;
    transition: all 0.5s;
}

.screen .boxBg .box ul li img,
.screen .boxBg .box ul li video {
    width: 768px;
    height: 432px;
    object-fit: contain;
}

.screen .boxBg .left {
    position: absolute;
    top: 50%;
    left: 10px;
    background: url(@/assets/images/game_page.png) -64px -533px;
}

.screen .boxBg .right {
    position: absolute;
    top: 50%;
    right: 10px;
    background: url(@/assets/images/game_page.png) -114px -533px;
}

.screen .boxBg .left,
.screen .boxBg .right {
    width: 47px;
    height: 60px;
    transform: translateY(-50%);
    transition: all 0.5s;
    opacity: 0.3;
}

.screen .boxBg .left:hover,
.screen .boxBg .right:hover {
    opacity: 1;
}

.screen .boxBg .leftTag,
.screen .boxBg .rightTag {
    position: absolute;
    top: 285px;
    width: 90px;
    height: 12px;
    background: url(@/assets/images/game_page.png) -164px -533px;
    opacity: 0;
    animation: alertMove 0.5s 1 forwards;
}

.screen .boxBg .leftTag {
    left: 10px;
}

.screen .boxBg .rightTag {
    right: 10px;
}

@keyframes alertMove {
    to {
        transform: translateY(-12px);
        opacity: 1;
    }
}

.screen .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    width: 780px;
    height: 100px;
}

.screen .bottom .time {
    position: relative;
    width: 330px;
    height: 48px;
    background: url(@/assets/images/game_page.png) 0 -482px;
}

.screen .bottom .control {
    position: relative;
    width: 305px;
    height: 93px;
    background: url(@/assets/images/game_page.png) -476px -485px;
}

.screen .bottom .control .left {
    position: absolute;
    top: 22px;
    left: 168px;
    width: 54px;
    height: 42px;
    background: url(@/assets/images/game_page.png) -336px -534px;
    transform: all 0.5s;
}

.screen .bottom .control .right {
    position: absolute;
    top: 22px;
    left: 242px;
    width: 54px;
    height: 42px;
    background: url(@/assets/images/game_page.png) -412px -534px;
    transform: all 0.5s;
}

.screen .bottom .control .left:hover {
    transform: scale(1.1);
    background: url(@/assets/images/game_page.png) -336px -486px;
}

.screen .bottom .control .right:hover {
    transform: scale(1.1);
    background: url(@/assets/images/game_page.png) -412px -486px;
}

.screen .bottom .control .leftTag,
.screen .bottom .control .rightTag {
    position: absolute;
    top: 3px;
    width: 51px;
    height: 26px;
    background: url(@/assets/images/game_page.png) -168px -550px;
    animation: gameAlertMove 0.5s 1 forwards;
}

.screen .bottom .control .leftTag {
    right: 100px;
}

.screen .bottom .control .rightTag {
    right: -5px;
}

@keyframes gameAlertMove {
    to {
        transform: translateY(-12px);
    }
}
</style>
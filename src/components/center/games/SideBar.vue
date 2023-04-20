<template>
    <div class="sideBar">
        <div class="title">
            <div class="logo">
                <img :src="gameObj.gameLogo" alt="logo">
            </div>
            <div class="titleImg">
                <img :src="gameObj.gameTitle" alt="title">
            </div>
        </div>
        <div class="box">
            <div class="nav">
                <InfoBtn @click.native = "clickBtn(INFO_TAG, $event)" ref="infoBtnRef"></InfoBtn>
                <ControlBtn @click.native = "clickBtn(CONTROL_TAG, $event)" ref="controlBtnRef"></ControlBtn>
                <NoticeBtn @click.native = "clickBtn(NOTICE_TAG, $event)" ref="noticeBtnRef"></NoticeBtn>
            </div>
            <div class="info" v-show="isInfoTag">
                <p v-for="str in gameObj.gameInfo" v-html="str"></p>
            </div>
            <div class="control" v-show="isControlTag">
                <ul>
                    <li v-for="(item, index) in gameObj.gameControlText">
                        <img :src="gameObj.gameControl[index]">
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
            <div class="notice" v-show="isNoticeTag">
                <p v-for="str in gameObj.gameNotice" v-html="str"></p>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/components/eventBus.js'
import InfoBtn from './btns/InfoBtn.vue'
import ControlBtn from './btns/ControlBtn.vue'
import NoticeBtn from './btns/NoticeBtn.vue'

export default {
    name: 'SideBar',
    components: {
        InfoBtn,
        ControlBtn,
        NoticeBtn
    },
    data() {
        return {
            INFO_TAG: 'Info',
            CONTROL_TAG: 'Control',
            NOTICE_TAG: 'Notice',
            isInfoTag: true,
            isControlTag: false,
            isNoticeTag: false,
            gameObj: {
                "gameInfo": []
            },
        }
    },
    created() {
        // 接收ScreenBox.vue的数据
        bus.$on('gameObj', val => {
            this.gameObj = val
        })
    },
    methods: {
        clickBtn(tagName, e) {
            // 更新样式
            this.updateTagBtn(tagName)
            e.currentTarget.classList.add('active')
        },
        updateTagBtn(choosedTag) {
            // 更新选中Btn状态，且撤回原选中btn组件的active样式
            if (this.isInfoTag && choosedTag != this.INFO_TAG) {
                this.isInfoTag = false
                this.$refs.infoBtnRef.inactiveStyle()
            }else if (choosedTag === this.INFO_TAG) {
                this.isInfoTag = true
            }

            if (this.isControlTag && choosedTag != this.CONTROL_TAG) {
                this.isControlTag = false
                this.$refs.controlBtnRef.inactiveStyle()
            }else if (choosedTag === this.CONTROL_TAG) {
                this.isControlTag = true
            }

            if (this.isNoticeTag && choosedTag != this.NOTICE_TAG) {
                this.isNoticeTag = false
                this.$refs.noticeBtnRef.inactiveStyle()
            }else if (choosedTag === this.NOTICE_TAG) {
                this.isNoticeTag = true
            }
        }
    }
}
</script>

<style scoped>
.sideBar {
    padding-top: 20px;
    width: 320px;
    height: 578px;
}

.sideBar .title {
    display: flex;
    justify-content: space-between;
}

.sideBar .title .logo {
    position: relative;
    width: 76px;
    height: 76px;
    background: url(@/assets/images/game_page.png) -784px 0;
}

.sideBar .title .logo img {
    display: block;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 64px;
    height: 64px;
    object-fit: contain;
}

.sideBar .title .titleImg {
    padding: 10px;
    width: 240px;
    height: 76px;
}

.sideBar .title .titleImg img {
    display: block;
    width: 220px;
    height: 56px;
    object-fit: contain;
}

.sideBar .box {
    position: relative;
    margin-top: 10px;
    width: 320px;
    height: 430px;
    background: url(@/assets/images/game_page.png) -784px -84px;
}

.sideBar .box .nav {
    position: absolute;
    top: 15px;
    left: 12px;
    display: flex;
    justify-content: space-between;
    width: 294px;
    height: 33px;
}

.sideBar .box .info,
.sideBar .box .control,
.sideBar .box .notice {
    position: absolute;
    top: 60px;
    left: 12px;
    width: 294px;
    height: 355px;
    color: #fff;
}

.sideBar .box .info,
.sideBar .box .notice {
    overflow: auto;
}

.sideBar .box .info::-webkit-scrollbar,
.sideBar .box .notice::-webkit-scrollbar {
    width: 5px;
    background-color: #141414;
}

.sideBar .box .info::-webkit-scrollbar-thumb,
.sideBar .box .notice::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: #fc6254;
}

.sideBar .box .info::-webkit-scrollbar-button,
.sideBar .box .notice::-webkit-scrollbar-button {
    display: none;
}

.sideBar .box .control ul {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.sideBar .box .control ul li {
    display: flex;
    justify-content: center;
    height: 100px;
}

.sideBar .box .control ul li img {
    width: 30%;
    object-fit: contain;
}

.sideBar .box .control ul li p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    width: 70%;
    height: 100px;
}

.sideBar .box .notice {
    text-indent: 2em;
}
</style>
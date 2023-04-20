<template>
    <div class="note">
        <div class="wrapper">
            <div class="article-box">
                <div class="article-content">
                    <router-view></router-view>
                </div>
            </div>
            <div class="note-list-box">
                <div class="note-list" ref="noteListRef">
                    <ul ref="listUlRef">
                        <li v-for="note in notes" @click="clickArticle(note, $event)" :key="note.nid">
                            <span class="choosed" ref="choosedRef"></span>
                            <div class="article-block">        
                                <h3>{{ note.ntitle }}</h3>
                                <p>{{ note.info }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <BackTop v-show="backTopOn" @click.native="clickBackTop"></BackTop>
            </div>
        </div>
    </div>
</template>

<script>
import BackTop from '@/components/btns/BackTop.vue'

export default {
    name: 'Note',
    components: {
        BackTop
    },
    data() {
        return {
            backTopOn: false,
            notes: [],
        }
    },
    created() {
        this.getNoteInfo()
    },
    mounted() {
        // 计算当前滚动距离，是否显示backTop按钮
        this.$refs.noteListRef.addEventListener('scroll', () => {
            this.$nextTick(() => {
                let scrollTop = this.$refs.noteListRef.scrollTop
                let listHeight = this.$refs.noteListRef.clientHeight
                let scrollHeightOff = this.$refs.noteListRef.scrollHeight - 20
                if (scrollTop + listHeight >= scrollHeightOff) {
                    this.backTopOn = true
                } else {
                    this.backTopOn = false
                }
            })
        })

        // 初始化显示
        this.$nextTick(() => {
            setTimeout(() => {
                this.$refs.noteListRef.childNodes[0].childNodes[0].childNodes[0].classList.add('active')
                this.$refs.listUlRef.childNodes[0].childNodes[1].classList.add('active')
            }, 100)
        })
    },
    methods: {
        clickBackTop() {
            this.$refs.noteListRef.scrollTop = 0
            this.backTopOn = false
        },
        clickArticle(note, e) {
            // 移除上一次选中的箭头
            const lastChoosed = document.querySelector('.note-list ul li .choosed.active')
            if (lastChoosed) {
                lastChoosed.classList.remove('active')
                lastChoosed.parentNode.childNodes[1].classList.remove('active')
            }
            e.currentTarget.childNodes[0].classList.add('active')
            e.currentTarget.childNodes[1].classList.add('active')

            // 路由跳转
            let link = '/notes/' + note.ntitle
            if (this.$route.path != link) {
                this.$router.push(link)
            }
        },
        async getNoteInfo() {
            const { data : res } = await this.$http({
                methods: 'GET',
                url: '/testData/json/noteData.json',
                params: {
                    // 传递给后台的数据
                }
            })
            this.notes = res.notesList
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/center/note.css';
/deep/ .backTop {
    position: absolute;
    right: -30px;
    bottom: 0px;
    background: url(@/assets/images/note_page.png) -755px -580px;
}
</style>
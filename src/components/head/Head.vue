<template>
     <!-- 快捷导航 -->
     <div class="shortcut">
        <div class="logo">
            <h1><a href="/">Karlo</a></h1>
        </div>
        <div class="postern" @click="clickPostern"></div>
        <div class="wrapper">
            <ul ref="tagRef">
                <li>
                    <router-link to="/info">
                        <span class="choose"></span>
                    </router-link>
                    <span class="new"></span>
                </li>
                <li>
                    <router-link to="/arts">
                        <span class="choose"></span>
                    </router-link>
                    <span class="new"></span>
                </li>
                <li>
                    <router-link to="/games">
                        <span class="choose"></span>
                    </router-link>
                    <span class="new"></span>
                </li>
                <li>
                    <router-link to="/notes">
                        <span class="choose"></span>
                    </router-link>
                    <span class="new"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Head",
    data() {
        return {
            posternState: false,
            mainLink: '/link'
        }
    },
    mounted() {
        // 确定当前所在的界面，更新顶部导航Tag的选中状态
        const path = this.$route.path
        this.updateTagStateByPath(path)
    },
    watch: {
        // 监听当前链接是否变化，如果变化更新tag显示状态
        '$route.path'(newVal) {
            if (!newVal.includes(this.mainLink)) {
                this.updateTagStateByPath(newVal)
            }
        }
    },
    methods: {
        // 传递数据给App.vue，显示后台窗口
        clickPostern() {
            this.$emit('posternOn', true)
        },
        // 通过当前路径来更新tag状态
        updateTagStateByPath(path) {
            let activeNode
            if(path.includes("/info")){
                activeNode = this.$refs.tagRef.childNodes[0].childNodes[0]
                this.mainLink = '/info'
            }else if(path.includes("/arts")){
                activeNode = this.$refs.tagRef.childNodes[1].childNodes[0]
                this.mainLink = '/arts'
            }else if(path.includes("/games")){
                activeNode = this.$refs.tagRef.childNodes[2].childNodes[0]
                this.mainLink = '/games'
            }else if(path.includes("/notes")){
                activeNode = this.$refs.tagRef.childNodes[3].childNodes[0]
                this.mainLink = '/notes'
            }
            
            // 移除上一次顶部导航选中的tag
            const lastChoosed = document.querySelector('.shortcut .wrapper ul li a.active')
            if(lastChoosed) {
                lastChoosed.classList.remove('active')
                lastChoosed.childNodes[0].classList.remove('active')
            }
            
            if(activeNode) {
                // 设置延时是为了等待监听后页面组件渲染成功后再更新样式状态
                setTimeout(function() {
                    activeNode.classList.add('active')
                    activeNode.childNodes[0].classList.add('active')
                })
            }
        }
    }
}
</script>

<style scoped>
/* 局部引入css文件 一定要加; */
@import '../../assets/css/head/head.css';
</style>
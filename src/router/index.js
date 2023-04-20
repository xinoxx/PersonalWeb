import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/center/Home.vue'
import Postern from '@/components/head/PosternPopWindow.vue'
import Info from '@/components/center/info/Info.vue'
import Art from '@/components/center/arts/Art.vue'
import Game from '@/components/center/games/Game.vue'
import Note from '@/components/center/notes/Note.vue'
import Article from '@/components/center/notes/Article.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/admin', component: Postern},
        { path: '/info' , component: Info},
        { path: '/arts' , component: Art},
        { path: '/games' , component: Game},
        { 
            path: '/notes' , 
            component: Note,
            redirect: '/notes/Java-Bug',
            children: [
                { path: ":aid", component: Article, props: true}
            ]
        }
    ]
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Infos from '../views/Infos.vue'
import Intro from '../views/Intro.vue'
import Reveil from '../views/Reveil.vue'
import SeLever from '../views/SeLever.vue'
import Snooze from '../views/Snooze.vue'
import NePasSeDoucher from '../views/NePasSeDoucher.vue'
import SeDoucher from '../views/SeDoucher.vue'
import Pieds from '../views/Pieds.vue'
import Metro from '../views/Metro.vue'
import BonChemin from '../views/BonChemin.vue'
import Manif from '../views/Manif.vue'
import Constat from '../views/Constat.vue'
import Fin from '../views/Fin.vue'
import Stat from '../views/Stat.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Infos',
        component: Infos
    },
    {
        path: '/1',
        name: 'Intro',
        component: Intro
    },
    {
        path: '/2',
        name: 'Reveil',
        component: Reveil
    },
    {
        path: '/3',
        name: 'SeLever',
        component: SeLever
    },
    {
        path: '/3bis',
        name: 'Snooze',
        component: Snooze
    },
    {
        path: '/4',
        name: 'NePasSeDoucher',
        component: NePasSeDoucher
    },
    {
        path: '/4bis',
        name: 'SeDoucher',
        component: SeDoucher
    },
    {
        path: '/5',
        name: 'Pieds',
        component: Pieds
    },
    {
        path: '/5bis',
        name: 'Metro',
        component: Metro
    },
    {
        path: '/6',
        name: 'BonChemin',
        component: BonChemin
    },
    {
        path: '/6bis',
        name: 'Manif',
        component: Manif
    },
    {

        path: '/7',
        name: 'Constat',
        component: Constat
    },
    {

        path: '/8',
        name: 'Fin',
        component: Fin
    },
    {

        path: '/9',
        name: 'Stat',
        component: Stat
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
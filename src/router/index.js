import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexComponent from '@/components/Index'
import SearchComponent from '@/components/Search'
import SearchListComponent from '@/components/SearchList'
import HistoryComponent from '@/components/History'
import MsglistComponent from '@/components/Msglist'
import CategoryComponent from '@/components/Category'
import UserComponent from '@/components/User'
import DetailComponent from '@/components/Detail'
import PlayComponent from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/search',
      name: 'search',
      component: SearchComponent
    },
    {
      path: '/search/:keyword',
      name: 'searchList',
      component: SearchListComponent
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryComponent
    },
    {
      path: '/msglist',
      name: 'msglist',
      component: MsglistComponent
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryComponent
    },
    {
      path: '/user',
      name: 'user',
      component: UserComponent
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailComponent
    },
    {
      path: '/play/:id',
      name: 'play',
      component: PlayComponent
    }


  ]
})


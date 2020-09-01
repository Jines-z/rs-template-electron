/*eslint-disable*/
import Loadable from 'react-loadable'
import DelayLoading from '@/components/DelayLoading'

const Home         = Loadable({loader: () => import(/* webpackChunkName: "Home" */ '@/pages/Home'), loading: DelayLoading})
const EmployeesList= Loadable({loader: () => import(/* webpackChunkName: "EmployeesList" */ '@/pages/Employees/EmployeesList'), loading: DelayLoading})
const UserList     = Loadable({loader: () => import(/* webpackChunkName: "UserList" */ '@/pages/User/UserList'), loading: DelayLoading})
const UserOrder    = Loadable({loader: () => import(/* webpackChunkName: "UserOrder" */ '@/pages/User/UserOrder'), loading: DelayLoading})
const UserManager  = Loadable({loader: () => import(/* webpackChunkName: "UserManager" */ '@/pages/User/UserManager'), loading: DelayLoading})
const EndOrder     = Loadable({loader: () => import(/* webpackChunkName: "EndOrder" */ '@/pages/User/EndOrder'), loading: DelayLoading})
const VisualList   = Loadable({loader: () => import(/* webpackChunkName: "VisualList" */ '@/pages/Visual/VisualList'), loading: DelayLoading})
const PriceConfig  = Loadable({loader: () => import(/* webpackChunkName: "PriceConfig" */ '@/pages/Price/PriceConfig'), loading: DelayLoading})

export default [{
    name: '首页',
    path: '/home',
    icon: 'home',
    component: Home
}, {
    name: '员工管理',
    path: '/employees',
    icon: 'yuangongguanli',
    subRoute: [{
        name: '员工列表',
        path: '/list',
        component: EmployeesList
    }]
}, {
    name: '用户管理',
    path: '/user',
    icon: 'yonghu',
    subRoute: [{
        name: '用户列表',
        path: '/list',
        component: UserList
    }, {
        name: '用户订单',
        path: '/order',
        component: UserOrder
    }, {
        name: '用户管理',
        path: '/manager',
        component: UserManager
    }, {
        name: '结束订单',
        path: '/e-order',
        component: EndOrder
    }]
}, {
    name: '可视化管理',
    path: '/visual',
    icon: 'yanjing',
    subRoute: [{
        name: '可视化列表',
        path: '/list',
        component: VisualList
    }]
}, {
    name: '价格配置管理',
    path: '/price',
    icon: 'wuliaojiageleixing',
    subRoute: [{
        name: '价格配置',
        path: '/config',
        component: PriceConfig
    }]
}]

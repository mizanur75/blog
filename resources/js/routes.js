
import adminhome from './components/admin/AdminHome.vue'
import adminpost from './components/admin/AdminPost.vue'
import adminprofile from './components/admin/AdminProfile.vue'
export const routes = [
    {
        path: '/admin/home',
        component: adminhome
    },
    {
        path: '/admin/post',
        component: adminpost
    },
    {
        path: '/admin/show-profile',
        component: adminprofile
    }
]
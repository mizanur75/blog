
import adminhome from './components/admin/AdminHome.vue'
import adminpost from './components/admin/AdminPost.vue'
import adminprofile from './components/admin/AdminProfile.vue'
import allcategory from './components/admin/category/all.vue'
import addcategory from './components/admin/category/new.vue'
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
    },
    {
        path: '/admin/all-category',
        component: allcategory
    },
    {
        path: '/admin/add-category',
        component: addcategory
    }
    
]
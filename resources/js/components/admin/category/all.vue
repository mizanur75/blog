
<template>
    <div>
        <div class="row mb-2">
            <div class="col-md-9"><h3>All Category</h3></div>
            <div class="col-md-3">
                <router-link to="/admin/add-category" class="btn btn-sm btn-success pull-right mb-2"><i class="fa fa-plus"></i> Add Category</router-link>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-sm table-bordered text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>created_at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td>{{category.created_at}}</td>
                        <td>
                            <router-link to="/admin/edit-category" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></router-link>
                            <router-link to="/admin/delete-category" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></router-link>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            categories: []
        }
    },

    mounted(){
        this.allCategory()
        this.$snotify.success("Success")
    },

    methods:{

        allCategory () {
            axios.get('/admin/all-category')
            .then( response => {
                
                this.categories = response.data.data
                if(this.form.success){
                    this.$snotify.success("Success")
                }
            })
            .catch( e => {
                console.log(e)
            })
        }

    }
}
</script>

<style>

</style>

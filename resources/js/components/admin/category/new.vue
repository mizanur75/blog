<template>
    <div>
        <form @click="addCategory()">
            <div class="row">
                <div class="col-md-2">
                    Name
                </div>
                <div class="col-md-10">
                    <input type="text" v-model="form.name" name="name" class="form-control form-control-sm" placeholder="Type a Category Here">
                </div>
            </div>
            <div class="pull-right mt-1">
                <router-link to="/" class="btn btn-sm btn-success"><i class="fa fa-plus"></i> Add</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: new Form({
            name: ''
            }),
        }
    },
    mounted(){
        
    },

    methods:{
        addCategory(){
            this.form.post('/admin/store-category')
            .then(response =>{
                console.log(response.data)
                //this.form.name = response.form.data
            }).catch(e=>{
                console.log('Error')
            })
        }
    }
}
</script>

<style>

</style>

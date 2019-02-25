<template>
    <div>
        <form @click.prevent="addCategory()">
            <div class="row">
                <div class="col-md-2">
                    Name
                </div>
                <div class="col-md-10">
                    <input type="text" v-model="form.name" name="name" class="form-control form-control-sm" placeholder="Type a Category Here" :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>
            </div>
            <div class="pull-right mt-1">
                <button type="submit" class="btn btn-sm btn-success"><i class="fa fa-plus"></i> Add</button>
            </div>
        </form>
        <vue-snotify></vue-snotify>
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
            this.form.busy = true
            this.form.post('/admin/store-category')
            .then(response =>{
                this.$router.push('/admin/all-category')
                if(this.form.successfull){
                    this.$Snotify.success("Success")
                }
            }).catch(e=>{
            })
        }
    }
}
</script>

<style>

</style>

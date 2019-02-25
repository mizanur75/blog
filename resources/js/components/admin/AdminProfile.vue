<template>
    <div>
        <h1 @click="getAlert">This is Profile</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        getAlert(){
            Toast.fire({
                type: 'success',
                title: 'Data Inserted successfully'
            })
            //this.$snotify.success("Data Inserted Successfully!", "Success"
        }
    }
}
</script>

<style>

</style>

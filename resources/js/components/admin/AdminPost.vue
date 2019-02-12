<template>

<div>
    <div class="table-responsive">
        <table class="table table-sm table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.description}}</td>
                    <td>{{post.created_at}}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</div>
    
</template>

<script>
export default {
    data(){

        return {
            posts: []
        }

    },
    mounted() {
        // console.log('Component mounted.')
        this.allPosts()
    },

    methods: {
        allPosts () {
            // console.log('Ok');
            axios.get('/admin/post')
            .then( response => {
                this.posts = response.data.data
            })
            .catch( e => {
                console.log(e);
            });
        }
    }
}
</script>

<style>

</style>

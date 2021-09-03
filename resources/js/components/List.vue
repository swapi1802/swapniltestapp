<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"Create"}' class="btn btn-primary">Create</router-link>
            <input class="btn btn-primary" type="button" value="Refresh" @click="getDevelopers()">
            <input class="btn btn-primary" type="button" value="Delete" @click="deleteAlldeveloper()"> 
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Developer</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="lstdevelopers.length > 0">
                                <tr v-for="(developer,key) in lstdevelopers" :key="key">
                                    <td>
                                        <input type="checkbox" :value="developer.Id" @change="onChecked(developer.Id)"> 
                                    </td>
                                    <td>{{ developer.Id }}</td>
                                    <td>{{ developer.First_Name }}</td>
                                    <td>{{ developer.Last_Name }}</td>
                                    <td>{{ developer.Email }}</td>
                                    <td>
                                        <router-link :to='{name:"Edit",params:{id:developer.Id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deletedeveloper(developer.Id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No lstdevelopers Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"lstdevelopers",
    data(){
        return {
            lstdevelopers:[],
            lstDeleteId:[]
        }
    },
    mounted(){
        this.getDevelopers()
    },
    methods:{
        async getDevelopers(){
            await this.axios.get('/api/Developers').then(response=>{
                this.lstdevelopers = response.data.data             
            }).catch(error=>{
                console.log(error)
                this.lstdevelopers = []
            })
        },
        deleteAlldeveloper(){
            if(confirm("Are you sure to delete selected Developer(s) ?")){
                var that = this;
                var Axios = this.axios;
                var Count = 0;
                $.each(this.lstDeleteId, function(key, value) {
                    Axios.delete('/api/Developers/' + value).then(response=>{
                        Count++;
                        if(Count == that.lstDeleteId.length){
                            that.getDevelopers()
                        }                        
                    }).catch(error=>{
                        console.log(error)
                    })
                });                
            }
        },
        deletedeveloper(id){
            if(confirm("Are you sure to delete this Developer ?")){
                this.axios.delete('/api/Developers/' + id).then(response=>{
                    this.getDevelopers()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        onChecked(id){
            if(!this.lstDeleteId.includes(id)){
                this.lstDeleteId.push(id)
            } else {
                this.lstDeleteId.splice(this.lstDeleteId.indexOf(id),1)
            }
        }
    }
}
</script>
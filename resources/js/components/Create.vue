<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Developer</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row justify-content-center">
<div class="row col-12" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul class="list-inline">
      <li class="list-inline-item" style="color:red;margin-left:10px;" v-for="error in errors">•&nbsp {{ error }} </li>
    </ul>
  </div>
                        <div>
                            <div class="row col justify-content-center">
                            <img :src="developer.Avatar" class="rounded-circle" alt="Avatar" width="100" height="100">
                            </div>
                            <div class="d-flex justify-content-center">
                            <div class="btn btn-mdb-color btn-rounded float-left">
                                <span>Add photo</span>
                                <input @change="uploadImage" type="file" name="photo" accept="image/*">
                            </div>
                            </div>
                        </div>
                                               
                        </div>
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="developer.First_Name">
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" v-model="developer.Last_Name">
                                </div>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="Email" class="form-control" v-model="developer.Email">
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control" v-model="developer.Address">
                                </div>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="number" class="form-control" v-model="developer.Phone">
                                </div>
                            </div>                         
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-developer",
    data:function () {
        return {
            developer : {
                First_Name:"",
                Last_Name:"",
                Email:"",
                Address:"",
                Phone:"",
                Avatar:""
            },
          errors : []
        }        
    },
    methods:{
        async create(){
            this.errors = [];
            var IsValidate = true;
            if (this.developer.First_Name == '') {
                this.errors.push("First Name required.");
                IsValidate = false;
            }
            if (this.developer.Last_Name == '') {
                this.errors.push("Last Name required.");
                IsValidate = false;
            }
            if (this.developer.Email == '') {
                this.errors.push("Email required.");
                IsValidate = false;
            }
            else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!filter.test(this.developer.Email)) {
                    this.errors.push("Invalid Email.");
                    IsValidate = false;
                }
            }
            if (this.developer.Address == '') {
                this.errors.push("Address required.");
                IsValidate = false;
            }
            if (this.developer.Phone == '') {
                this.errors.push("Phone required.");
                IsValidate = false;
            }
            else{                
                var filter = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                if (!filter.test(this.developer.Phone)) {
                    this.errors.push("Invalid Phone.");
                    IsValidate = false;
                }
            }
            if (this.developer.Avatar == '') {
                this.errors.push("Avatar required.");
                IsValidate = false;
            }
            if(!IsValidate){
                return IsValidate;
            }
            await this.axios.post('/api/Developers',this.developer).then(response=>{
                this.$router.push('/List')
            }).catch(error=>{
                console.log(error)
            })
        },
        uploadImage: function() {    
            var file = document
                .querySelector('input[type=file]')
                .files[0];
            var reader = new FileReader();
            reader.onload =(e) => {
                console.log(e.target.result)
                this.developer.Avatar = e.target.result             
            };
            reader.onerror = function(error) {
                alert(error);
            };
            reader.readAsDataURL(file);      
        }
    }
}
</script>
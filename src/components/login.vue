<template>
<!-- Section 1 -->
<section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
    <a id="login_"></a>
    <form @submit.prevent="login" id="form2">

            <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    {{$t('form.why')}}
                </h2>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">Sign in</h3>
                    <input v-model="user.email" type="text" name="email" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="example@mail.ru">
                    <input v-model="user.password" type="password" name="password" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="*********">
                    <div class="block">
                        <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Log Me In</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </form>

</section>
</template>

<script>
import app from '../assets/firebaseconf'
export default {
    name:'login',
    data(){
        return{
            user:{}
        }
    },
    methods:{
        login(){
                 if(document.querySelector("#form2").reportValidity()){
            
                     // eslint-disable-next-line no-unused-vars
                     app.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then((done)=>{
                         alert("Signed in");
                         window.location.reload();
                     }).catch((error) => {
            //  var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            alert(errorMessage);
          });
        }
        }
    }
}
</script>

<style>

</style>
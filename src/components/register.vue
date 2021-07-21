<template>
  <section class="w-full bg-white">

    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div class="relative">
                            <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl"> {{$t('form.action')}} </h2>
                        </div>
                        <!-- <p class="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p> -->
                        <!-- <a href="#_" class="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a> -->
                    </div>
                </div>
            </div>

            <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    <h4 class="w-full text-3xl font-bold">{{$t('form.register')}}</h4>
                  <div class="relative w-full mt-10 space-y-8">
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.fname')}}</label>
                            <input v-model="user.fname" required type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Alexander">
                        </div>                     
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.lname')}}</label>
                            <input v-model="user.lname" required type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Alesso">
                        </div>  
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.other')}}</label>
                            <input v-model="user.other" type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Bam">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.mobile')}}</label>
                            <input v-model="user.phone" required type="tel" autocomplete="mobile" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="+12394993939">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.whatsapp')}}</label>
                            <input v-model="user.whatsapp" type="tel" autocomplete="mobile" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="+12394993939">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.email')}}</label>
                            <input v-model="user.email" type="email" autocomplete="email" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="mail@mail.br">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.country')}}</label>
                            <select v-model="user.country" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
                                <option value="" disabled selected>--Select One--</option>
                            </select>
                        </div>  
                           <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.practice')}}</label>
                            <select v-model="user.desi" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
                                <option value="" disabled selected>--Select One--</option>
                                <option value="community">{{$t('form.areas.community')}}</option>
                                <option value="hospital">{{$t('form.areas.hospital')}}</option>
                                <option value="admin">{{$t('form.areas.admin')}}</option>
                                <option value="industry">{{$t('form.areas.industry')}}</option>
                                <option value="public">{{$t('form.areas.public')}}</option>
                                <option value="others">{{$t('form.areas.others')}}</option>
                            </select>
                        </div> 
                        <div class="relative">
                            <label class="font-medium text-gray-900">{{$t('form.password')}}</label>
                            <input v-model="user.password" autocomplete="new-password" type="password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="*********">
                        </div>
                        <div class="relative">
                            <button type="submit" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">{{$t('form.register')}}</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import app from '../assets/firebaseconf'
import firebase from 'firebase'
export default {
    name:'register',
    data(){
        return{
            user:{
            
            }
        }
    },
    methods:{
        register(){
            if(document.querySelector('form').reportValidity()){
                app.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((user)=>{
                    app.firestore().collection('users').doc(user.user.uid).set({
                        time:firebase.firestore.FieldValue.serverTimestamp,
                        firstname:this.user.fname,
                        lastname:this.user.lname,
                        othername:this.user.other,
                        email:this.user.email,
                        country:this.user.country,
                        mobile:this.user.phone,
                        whatsapp:this.user.whatsapp,
                        designation:this.user.desi,
                        password:this.user.password,
                    }).then(()=>{
                        alert('Registration sucessfull');
                    })
                }) .catch((error) => {
                         var errorCode = error.code;
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
<template>
  <section class="relative py-20 overflow-hidden bg-white">
    <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span class="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>

    <span class="absolute bottom-0 left-0"> </span>

    <div class="relative px-16 mx-auto max-w-7xl">
        <p class="font-medium tracking-wide text-blue-500 uppercase">{{$t("speakers.speakers")}}</p>
        <div class="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.cyril">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Prof. Cyril Usifoh</h3>
                        <p class="text-blue-600">Professor of Pharmaceutical Chemistry <br> University of Benin</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                       <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.hiag">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Dr Prosper Hiag</h3>
                        <p class="text-blue-600">{{$t('speakers.designations[3].designation')}}</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                      <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.jackie">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Pharm Jackie Maimin</h3>
                        <p class="text-blue-600">{{$t('speakers.designations[1].designation')}}</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                      <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.john">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Dr. John M. Marfo</h3>
                        <p class="text-blue-600">{{$t('speakers.designations[2].designation')}}</p>
                    </div>

                </div>
            </div>

            <!-- <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                  <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.cyril">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Ron Jenson</h3>
                        <p class="text-blue-600">Senior Developer</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <div class="overflow-hidden w-44 h-44 relative rounded-full">
                    <img class="relative z-20 w-full  object-top" :src="speakers.cyril">
                    </div>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Pete Tompkins</h3>
                        <p class="text-blue-600">Web Developer</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-16.jpg">
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Kelly Richards</h3>
                        <p class="text-blue-600">Sales Manager</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-08.jpg">
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Alexis Jordan</h3>
                        <p class="text-blue-600">Affiliate Manager</p>
                    </div>

                </div>
            </div> -->
        </div>
    </div>
</section>
</template>

<script>
export default {
    name:'speakers',
    data(){
        return{
            speakers:{
                cyril:require('../assets/img/cyril.jpeg'),
                hiag:require('../assets/img/hiag.jpeg'),
                jackie:require('../assets/img/jakie.jpeg'),
                john:require('../assets/img/john.jpeg'),
            }
        }
    }
}
</script>
<i18n>
{
    "en":{

    }
}
</i18n>
<style>

</style>
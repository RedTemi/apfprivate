<template>
  <section class="w-full px-3 antialiased bg-indigo-600 lg:px-6">
    <div class="mx-auto max-w-7xl">
      <nav
        class="flex items-center w-full h-24 select-none"
      >
        <div
          class="
            relative
            flex flex-wrap
            items-center
            justify-between
            w-full
            h-24
            mx-auto
            font-medium
            md:justify-center
          "
        >
          <a href="#_" class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
            <span
              class="p-1 text-xl font-black leading-none text-white select-none"
              ><span>APF 2021</span><span class="text-indigo-300">.</span></span
            >
          </a>
                         <div
                  class="
                  bg-white
                    rounded-full
                    shadow-inner
                    border
                    sm:hidden
                    inline-block
                    px-2
                    overflow-hidden
                  "
                >
                  <select
                    v-model="$root.$i18n.locale"
                    class="py-1 px-2 bg-white border-none w-full focus:border-0"
                  >
                    <option value="pt">
                      <img src="https://www.countryflags.io/PT/flat/64.png" />
                      Portugese
                    </option> 
                    <option value="en">
                      <img src="https://www.countryflags.io/GB/flat/64.png" />
                      English
                    </option>
                    <option value="fr">
                      <img src="https://www.countryflags.io/FR/flat/64.png" />
                      French
                    </option>
                  </select>
                </div>
          <div
            class="
              fixed
              top-0
              left-0
              z-40
              items-center
              hidden
              w-full
              h-full
              p-3
              text-xl
              bg-gray-900 bg-opacity-50
              md:text-sm
              lg:text-base
              md:w-3/4
              md:bg-transparent
              md:p-0
              md:relative
              md:flex
            "
            v-bind:class="{ flex: showMenu, hidden: !showMenu }"
          >
            <div
              class="
                flex-col
                w-full
                h-auto h-full
                overflow-hidden
                bg-white
                rounded-lg
                select-none
                md:bg-transparent
                md:rounded-none
                md:relative
                md:flex md:flex-row
                md:overflow-auto
              "
            >
              <div
                class="
                  flex flex-col
                  items-center
                  justify-center
                  w-full
                  h-full
                  mt-12
                  text-center text-indigo-700
                  md:text-indigo-200
                  md:w-2/3
                  md:mt-0
                  md:flex-row
                  md:items-center
                "
              >
                <!-- <a href="#" class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">{{$t("nav.home")}}</a> -->
                <a
                  v-if="!authed"
                  href="#register_"
                  class="
                    inline-block
                    px-0 px-4
                    py-2
                    mx-2
                    font-medium
                    text-left
                    md:px-0
                    hover:text-indigo-800
                    md:hover:text-white
                    lg:mx-3
                    md:text-center
                  "
                  >{{ $t("nav.register") }}</a
                >
              </div>
              <div
                class="
                  flex flex-col
                  items-center
                  justify-end
                  w-full
                  h-full
                  pt-4
                  md:w-1/3
                  md:flex-row
                  md:py-0
                "
              >
                <div
                  class="
                  bg-white
                    rounded-full
                    shadow-inner
                    border
                    inline-block
                    px-2
                    overflow-hidden
                  "
                >
                  <select
                    v-model="$root.$i18n.locale"
                    class="py-1 px-2 bg-white border-none w-full focus:border-0"
                  >
                    <option value="pt">
                      <img src="https://www.countryflags.io/PT/flat/64.png" />
                      Portugese
                    </option> 
                    <option value="en">
                      <img src="https://www.countryflags.io/GB/flat/64.png" />
                      English
                    </option>
                    <option value="fr">
                      <img src="https://www.countryflags.io/FR/flat/64.png" />
                      French
                    </option>
                  </select>
                </div>
                <!-- <a href="#_" class="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a> -->
                <a
                  v-if="authed"
                  href="_"
                  @click.prevent="logout"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    mr-1
                    text-base
                    font-medium
                    leading-6
                    text-indigo-600
                    whitespace-no-wrap
                    transition
                    duration-150
                    ease-in-out
                    bg-white
                    border border-transparent
                    rounded-full
                    hover:bg-white
                    focus:outline-none
                    focus:border-indigo-700
                    focus:shadow-outline-indigo
                    active:bg-indigo-700
                  "
                  >{{ $t("nav.logout") }}</a
                >
                <a
                  v-if="!authed"
                  href="#login_"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    mr-1
                    text-base
                    font-medium
                    leading-6
                    text-indigo-600
                    whitespace-no-wrap
                    transition
                    duration-150
                    ease-in-out
                    bg-white
                    border border-transparent
                    rounded-full
                    hover:bg-white
                    focus:outline-none
                    focus:border-indigo-700
                    focus:shadow-outline-indigo
                    active:bg-indigo-700
                  "
                  >{{ $t("nav.login") }}</a
                >
              </div>
            </div>
          </div>
          <div
            @click="showMenu = !showMenu"
            class="
              absolute
              right-0
              z-50
              flex flex-col
              items-end
              w-10
              h-10
              p-2
              mr-4
              rounded-full
              cursor-pointer
              md:hidden
              hover:bg-gray-900 hover:bg-opacity-10
            "
            :class="{ 'text-gray-400': showMenu, 'text-gray-100': !showMenu }"
          >
            <svg
              class="w-6 h-6"
              v-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              x-cloak=""
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              class="w-6 h-6"
              v-show="showMenu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              x-cloak=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <div class="container py-32 mx-auto text-center sm:px-4">
        <h1
          class="
            text-4xl
            font-extrabold
            leading-10
            tracking-tight
            text-white
            sm:text-5xl
            sm:leading-none
            md:text-6xl
            xl:text-7xl
          "
        >
          <span class="block">{{ $t("header.title") }}</span>
          <span class="relative inline-block mt-3 text-transparent text-white"
            >2021</span
          >
        </h1>
        <div
          v-html="$t('header.theme')"
          class="
            max-w-lg
            mx-auto
            mt-6
            text-base text-center text-indigo-200
            md:mt-12
            sm:text-base
            md:max-w-xl
            md:text-lg
            xl:text-xl
          "
        ></div>
        <div
          class="
            max-w-lg
            mx-auto
            mt-6
            text-base text-center text-indigo-200
            md:mt-12
            sm:text-base
            md:max-w-xl
            md:text-lg
            xl:text-xl
          "
        >
          <span class="font-extrabold">{{ $t("header.time") }}</span>
        </div>
        <div
          class="
            relative
            flex
            items-center
            max-w-md
            mx-auto
            mt-12
            overflow-hidden
            text-center
            rounded-full
          "
        >
          <a href="#register_" class="w-full">
            <button
              v-if="!authed"
              type="button"
              class="
                inline-flex
                items-center
                w-full
                h-12
                px-8
                text-base
                font-bold
                leading-6
                text-white
                transition
                duration-150
                ease-in-out
                bg-indigo-400
                border border-transparent
                hover:bg-indigo-700
                focus:outline-none
                active:bg-indigo-700
              "
            >
              {{ $t("header.action") }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import app from "../assets/firebaseconf";
export default {
  name: "headerNav",
  data(){
    return{
      showMenu:false,
    }
  },
  computed: {
    authed() {
      return app.auth().currentUser;
    },
  },
  methods: {
    logout() {
      app.auth().signOut();
      window.location.reload();
    },
  },
};
</script>

<style>
</style>
export default defineNuxtConfig({
    app:{
        head:{
            link: [
                {
                    rel: "stylesheet",
                    href:"/assets/styles/global.css"
                }
            ]
        }
    },
    modules:[ 
        'nuxt-windicss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        apiKey: '',
        apiBaseUrl: '',
        public:{
            imgBaseUrl: ''
        }
    }
})
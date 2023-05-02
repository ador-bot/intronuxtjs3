<template>
    <div>
        <Navbar></Navbar>

        <main class="container p-3 my-5 border rounded shadow">
            <slot></slot>
        </main>

        <Footer></Footer>
       
    </div>
</template>

<script setup>
useHead({
    titleTemplate: "%s - Intro Nuxt",
    bodyAttrs:[
        {
            class: "text-center"
        }
    ],
    link: [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            integrity: "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
            crossorigin: "anonymous"
        }
    ],
    script: [
        {   
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
            body: true
        }
        
    ]
})

</script>
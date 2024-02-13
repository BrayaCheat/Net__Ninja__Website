<template>
    <section id="viewer">
        <div class="container mx-auto md:p-36 p-10 grid grid-cols-3 gap-9">
            <header class="text-4xl text-white font-bold text-center col-span-3 my-9">
                <h1>Reviews from Net Ninja Viewers</h1>
            </header>
            <div
            class="p-9 bg-zinc-900 text-zinc-300 grid place-items-center rounded shadow-xl"
            v-for="Viewer in ViewerCard"
            :key="Viewer.id"
            >
            <img :src="Viewer.profile" alt="">
            <h1 class="text-xl my-3 font-semibold">{{ Viewer.name }}</h1>
            <h1>{{ Viewer.comment }}</h1>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import axios from 'axios'

    const ViewerURL = 'http://localhost:3000/Viewer'
    const ViewerCard = ref([])

    onMounted(async () => {
        try {
        await axios.get(ViewerURL)   
        .then((Response) => ViewerCard.value = Response.data)  
        } catch (error) {
         console.log(error)   
        }
    })


</script>

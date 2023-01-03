<template>
    <div class="w-full flex justify-center">
        <div class="justify-center py-5 w-full lg:w-1/2 md:w-3/4 md:block">
            <div class="pb-2">
                <h1 class="text-center text-white text-6xl font-semibold">
                    Miquel-Generator
                </h1>
            </div>

            <div class="mt-20 flex flex-col text-center space-y-4">
                <div>
                    <nuxt-link
                        class="menu-item"
                        to="/miquel-names"
                    >
                        Miquel's namen
                    </nuxt-link>
                </div>

                <div>
                    <nuxt-link
                        class="menu-item"
                        to="/miquel-sentences"
                    >
                        Miquel's uitspraken
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component
export default class index extends Vue {
}
</script>

<style scoped>
.menu-item {
    @apply
    px-12 py-2
    text-lg text-white
    hover:underline
}
</style>

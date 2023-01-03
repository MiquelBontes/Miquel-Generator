<template>
    <div>
        <button
            @click="generateFullName"
            class="name-text"
        >
            {{ fullName }}
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import IName from '~/core/interfaces/Name';

@Component
export default class NameGenerator extends Vue {
    @Prop({required: true})
    readonly names!: IName

    fullName: string = ''

    mounted() {
        this.generateFullName()
    }

    generateFullName(): void {
        this.fullName = this.generateFirstName()

        this.fullName += ' '

        if (this.names.prepositions) {
            this.fullName += this.names.prepositions[Math.floor(Math.random() * this.names.prepositions.length)]

            this.fullName += ' '
        }

        this.fullName += this.generateLastName()
    }

    generateFirstName(): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && this.names.firstNames.single) {
            return this.names.firstNames.single[Math.floor(Math.random() * this.names.firstNames.single.length)]
        }

        return this.names.firstNames.firstHalf[Math.floor(Math.random() * this.names.firstNames.firstHalf.length)] +
            this.names.firstNames.secondHalf[Math.floor(Math.random() * this.names.firstNames.secondHalf.length)]
    }

    generateLastName(): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && this.names.lastNames.single) {
            return this.names.lastNames.single[Math.floor(Math.random() * this.names.lastNames.single.length)]
        }

        return this.names.lastNames.firstHalf[Math.floor(Math.random() * this.names.lastNames.firstHalf.length)] +
            this.names.lastNames.secondHalf[Math.floor(Math.random() * this.names.lastNames.secondHalf.length)]
    }
}
</script>

<style scoped>
.name-text {
    @apply
    text-7xl text-gray-300 hover:text-white
    cursor-pointer
}
</style>
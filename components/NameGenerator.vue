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
    readonly nameParts!: IName

    fullName: string = ''

    mounted() {
        this.generateFullName()
    }

    generateFullName(): void {
        this.fullName = ''

        this.fullName += this.generateFirstName()

        this.fullName += ' '

        if (this.nameParts.prepositions) {
            this.fullName += this.nameParts.prepositions[Math.floor(Math.random() * this.nameParts.prepositions.length)]

            this.fullName += ' '
        }

        this.fullName += this.generateLastName()
    }

    generateFirstName(): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && this.nameParts.firstNames.single) {
            return this.nameParts.firstNames.single[Math.floor(Math.random() * this.nameParts.firstNames.single.length)]
        }

        return this.nameParts.firstNames.firstHalf[Math.floor(Math.random() * this.nameParts.firstNames.firstHalf.length)] +
            this.nameParts.firstNames.secondHalf[Math.floor(Math.random() * this.nameParts.firstNames.secondHalf.length)]
    }

    generateLastName(): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && this.nameParts.lastNames.single) {
            return this.nameParts.lastNames.single[Math.floor(Math.random() * this.nameParts.lastNames.single.length)]
        }

        return this.nameParts.lastNames.firstHalf[Math.floor(Math.random() * this.nameParts.lastNames.firstHalf.length)] +
            this.nameParts.lastNames.secondHalf[Math.floor(Math.random() * this.nameParts.lastNames.secondHalf.length)]
    }
}
</script>

<style scoped>
.name-text {
    @apply
    text-7xl text-gray-200 hover:text-white
    cursor-pointer
}
</style>
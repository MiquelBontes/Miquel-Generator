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
    @Prop({type: IName, required: true})
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

        if (randomValue === 0 && this.nameParts.firstName.single) {
            return this.nameParts.firstName.single[Math.floor(Math.random() * this.nameParts.firstName.single.length)]
        }

        return this.nameParts.firstName.firstHalf[Math.floor(Math.random() * this.nameParts.firstName.firstHalf.length)] +
            this.nameParts.firstName.secondHalf[Math.floor(Math.random() * this.nameParts.firstName.secondHalf.length)]
    }

    generateLastName(): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && this.nameParts.lastName.single) {
            return this.nameParts.lastName.single[Math.floor(Math.random() * this.nameParts.lastName.single.length)]
        }

        return this.nameParts.lastName.firstHalf[Math.floor(Math.random() * this.nameParts.lastName.firstHalf.length)] +
            this.nameParts.lastName.secondHalf[Math.floor(Math.random() * this.nameParts.lastName.secondHalf.length)]
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
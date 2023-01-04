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
import INamePart from '~/core/interfaces/NamePart';

@Component
export default class NameGenerator extends Vue {
    @Prop({required: true})
    readonly names!: IName

    fullName: string = ''

    mounted() {
        this.generateFullName()
    }

    generateFullName(): void {
        this.fullName = this.generateName(this.names.firstNames)

        this.fullName += ' '

        if (this.names.prepositions) {
            this.fullName += this.names.prepositions[Math.floor(Math.random() * this.names.prepositions.length)]

            this.fullName += ' '
        }

        this.fullName += this.generateName(this.names.lastNames)
    }

    generateName(nameList: INamePart): string {
        const randomValue = Math.floor(Math.random() * 4)

        if (randomValue === 0 && nameList.single) {
            return nameList.single[Math.floor(Math.random() * nameList.single.length)]
        }

        return nameList.firstHalf[Math.floor(Math.random() * nameList.firstHalf.length)] +
            nameList.secondHalf[Math.floor(Math.random() * nameList.secondHalf.length)]
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
interface INameParts {
    firstHalf: string[]
    secondHalf: string[]
    single?: string[]
}

export default interface IName {
    firstNames: INameParts
    lastNames: INameParts
    prepositions?: string[]
}
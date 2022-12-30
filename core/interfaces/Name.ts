interface INameParts {
    firstHalf: string[]
    secondHalf: string[]
    single?: string[]
}

export default interface IName {
    firstName: INameParts
    lastName: INameParts
    prepositions?: string[]
}
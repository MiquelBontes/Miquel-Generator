import INamePart from '~/core/interfaces/NamePart';

export default interface IName {
    firstNames: INamePart
    lastNames: INamePart
    prepositions?: string[]
}
export interface IRecipes {
    id: number,
    name: string,
    picture: string,
    ingredients: string[],
    time: string,
    step1?: string,
    step2?: string,
    step3?: string,
    step4?: string,
    step5?: string
}
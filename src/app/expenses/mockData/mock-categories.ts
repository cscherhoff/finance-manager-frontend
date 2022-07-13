import { Category } from "../data/category";

export const CATEGORIES_MOCK: Category[] = [
    {categoryName: 'Haushalt', budget: 120, currentBudget: 114, articles: [{articleName: 'Besen', defaultAmount:  1, defaultPrice: 32.58}, {articleName: 'Schwamm', defaultAmount:  4, defaultPrice: 2.58}]},
    {categoryName: 'Lebensmittel', budget: 75, currentBudget: 23, articles: [{articleName: 'Schinken', defaultAmount:  450, defaultPrice: 2.75}, {articleName: 'Milch', defaultAmount:  1.5, defaultPrice: 0.71}, {articleName: 'Wasser', defaultAmount:  1500, defaultPrice: 0.25}]}
]
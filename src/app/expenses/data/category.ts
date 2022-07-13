import { Article } from "./Article";

export interface Category {
    categoryName: string;
    budget: number;
    currentBudget: number;
    articles: Article[];
}
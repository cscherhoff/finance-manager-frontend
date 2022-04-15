import { Category } from "./Category";
import { FixCost } from "./FixCost";

export interface Allocation {
    income: number;
    fixCosts: FixCost[];
    categories: Category[];
}
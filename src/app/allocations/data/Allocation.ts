import { Category } from "./Category";
import { FixCost } from "./FixCost";

export interface Allocation {
    investment: number;
    fixCosts: FixCost[];
    categories: Category[];
}
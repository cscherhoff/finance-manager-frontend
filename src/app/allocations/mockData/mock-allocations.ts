import { Allocation } from "../data/Allocation";

export const ALLOCATION_Mock: Allocation = {
    investment: 1234.56,
    fixCosts: [{fixCostName: 'Miete', value: 200}, {fixCostName: 'GEZ', value: 17.99}, {fixCostName: 'AV', value: 117.99}],
    categories: [{categoryName: 'Haushalt', budget: 22.77}, {categoryName: 'Freizeit', budget: 330.55}],
  }
  ;
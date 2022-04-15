import { Allocation } from "../Allocation";

export const ALLOCATION_Mock: Allocation = {
    income: 1234.56,
    fixCosts: [{fixCostName: 'Miete', value: 200}, {fixCostName: 'GEZ', value: 17.99}, {fixCostName: 'AV', value: 117.99}],
    categories: [{categoryName: 'Haushalt', budget: 22.77}, {categoryName: 'Freizeit', budget: 330.55}],
  }
  ;
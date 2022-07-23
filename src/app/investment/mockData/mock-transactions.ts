import { Transaction } from "../data/Transaction";

export const TRANSACTION_MOCK: Transaction[] = [
    {
    depotName:"degiro",
    date: new Date("2021-05-24"),
    type: "Buy",
    isin: "XX1234567890",
    securityName: "bmw",
    price: 22.45,
    number: 10,
    expenses: 1,
    totalPrice: 225.5
    },
    {
    depotName:"degiro",
    date: new Date("2021-05-25"),
    type: "Buy",
    isin: "XX1234567890",
    securityName: "Apple",
    price: 212.45,
    number: 130,
    expenses: 1,
    totalPrice: 2325.5
    },
    {
    depotName:"flatex",
    date: new Date("2021-06-24"),
    type: "Sell",
    isin: "XX1234567890",
    securityName: "bmw",
    price: 29.45,
    number: 14,
    expenses: 1,
    totalPrice: 125.5
    }
]
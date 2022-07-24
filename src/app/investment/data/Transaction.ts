export interface Transaction {
    depotName: string;
    date: string;
    type: string;
    isin: string;
    securityName: string;
    number: number;
    price: number;
    expenses: number;
    totalPrice: string;
}
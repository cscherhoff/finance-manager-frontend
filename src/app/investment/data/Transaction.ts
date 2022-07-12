export interface Transaction {
    depotName: string;
    date: Date;
    type: string;
    securityName: string;
    price: number;
    number: number;
    expenses: number;
    totalPrice: number;
}
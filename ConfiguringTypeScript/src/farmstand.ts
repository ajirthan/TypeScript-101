interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProductSummary = (product: Product): void => {
    const { name, price } = product;
    console.log(`${name} - $${price}`);
};

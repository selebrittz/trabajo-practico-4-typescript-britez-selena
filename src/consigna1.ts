let productName: string = "Labial Maybelline";
let productPrice: number = 9000;

let productId: string | number;

productId = 1;
productId = "LM";

console.log(productId);

interface Product {
  name: string;
  price: number;
}

let myproduct: Product = {
  name: "Rimel Avon",
  price: 20000,
};

console.log(myproduct);

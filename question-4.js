// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = Infinity;
let minName = "";
for (let index = 0; index < inventory.length; index++) {
  if (minQuantity > inventory[index].quantity) {
    minQuantity = inventory[index].quantity;
    minName = inventory[index].name;
  }
}
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`
);

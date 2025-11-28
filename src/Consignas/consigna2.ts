function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const newStock = updateStock(210, 100);
console.log("Nuevo stock:", newStock);

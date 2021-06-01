import ProductModel from "./ProductModel";

interface CartItemModelDTO {
  id: String;
  quantity: number;
  product: ProductModel;
}

class ItemCartModel {
  id: String;
  quantity: number;
  product: ProductModel;
  total: number;
  totalPoints: number;
    constructor({
        id: id,
        quantity: quantity,
        product: product,
    }: CartItemModelDTO) {
        this.id = id;
        this.quantity = quantity;
        this.total = Math.floor(product.price * quantity);
        this.totalPoints = product.points * quantity
        this.product = product;
    }
}

export default ItemCartModel;

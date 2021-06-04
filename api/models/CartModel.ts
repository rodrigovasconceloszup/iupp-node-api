import ItemCartModel from "./ItemCartModel";
import ShippingModel from "./ShippingModel";

interface CartModelDTO {
  id: String;
  total: number;
  subtotal: number
  totalPoints: number;
  shipping?: ShippingModel;
  items: Array<ItemCartModel>;
}

class CartModel {
  id: String;
  total: number;
  subtotal: number
  totalPoints: number;
  shipping: ShippingModel;
  items: Array<ItemCartModel>;

  constructor({ id,
    total,
    subtotal,
    totalPoints,
    shipping,
    items
  }: CartModelDTO) {
    this.id = id;
    this.total = total;
    this.totalPoints = totalPoints;
    this.items = items;
    this.subtotal = subtotal;
    if (shipping) {
      this.shipping = shipping;
    }
  }
}

export default CartModel;

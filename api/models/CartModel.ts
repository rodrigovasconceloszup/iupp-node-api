import ItemCartModel from "./ItemCartModel";

class CartModel {
  id: String;
  total: number;
  subtotal: number
  totalPoints: number;
  shipping: ShippingModel;
  items: Array<ItemCartModel>;
}

export default CartModel;

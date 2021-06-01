import { v4 as uuid } from 'uuid';
import ItemCartModel from 'models/ItemCartModel';
import CartModel from 'models/CartModel';
import cartData from '../data/cart/cart.json';
import AppError from 'utils/AppError';
import allProducts from 'data/products/all_products';

interface IRequestAddProduct {
  cart_id: String;
  product_id: String;
}

interface IRequestUpdateProduct {
  cart_id: String;
  item_cart_id: String;
}

interface IRequestUpdateShipping {
  cart_id: String;
  cep: String;
}

class CartRepository {
  cartList: Array<CartModel> = [];

  create(): CartModel {
    const cartObject = Object.assign({
      ...cartData,
      id: uuid()
    }) as CartModel;

    this.cartList.push(cartObject);
    return cartObject;
  }

  get(cart_id: String): CartModel {
    const cartFromList = this.cartList.find((cart) => cart.id === cart_id);
    if (!cartFromList) {
      const createdCart = this.create();
      return createdCart;
    };
    return cartFromList;
  }

  addItemCart({ cart_id, product_id }: IRequestAddProduct): CartModel {
    const cart = this.get(cart_id);

    const productFromList = allProducts.find((product) => product.id === product_id);
    if (!productFromList) throw new AppError("Product Not Found");

    const itemCartIndex = cart.items.findIndex(itemCart => itemCart.product.id === product_id);

    console.log('Item Cart >>>>>>>>>>>>>>>>>>>>>>', itemCartIndex);

    if (itemCartIndex < 0) {
      const itemCart = new ItemCartModel({
        id: uuid(),
        quantity: 1,
        product: productFromList,
      });

      cart.items.push(itemCart);

    } else {
      const currentItemCart = cart.items[itemCartIndex];

      const updatedItemCart = new ItemCartModel({
        ...currentItemCart,
        quantity: currentItemCart.quantity + 1,
      })
      cart.items[itemCartIndex] = updatedItemCart;
    }

    const cartReponse = this._updateCart(cart, cart_id);
    return cartReponse;
  }

  incrementItem({ cart_id, item_cart_id }: IRequestUpdateProduct): CartModel {
    const cart = this.get(cart_id);
    cart.items.map(itemCart => {
      if (itemCart.id === item_cart_id) {
        itemCart.quantity + 1;
        itemCart.total = itemCart.product.price * itemCart.quantity;
        itemCart.totalPoints = itemCart.product.points * itemCart.quantity;
      }
      return itemCart;
    });

    const cartReponse = this._updateCart(cart, cart_id);
    return cartReponse;
  }

  decrementItem({ cart_id, item_cart_id }: IRequestUpdateProduct): CartModel {
    const cart = this.get(cart_id);
    cart.items.map(itemCart => {
      if (itemCart.id === item_cart_id) {
        itemCart.quantity - 1;
        itemCart.total = itemCart.product.price * itemCart.quantity;
        itemCart.totalPoints = itemCart.product.points * itemCart.quantity;
      }
      return itemCart;
    });

    const cartReponse = this._updateCart(cart, cart_id);
    return cartReponse;
  }

  addShipping({ cart_id, cep }: IRequestUpdateShipping): CartModel {
    let cart = this.get(cart_id);
    cart.shipping = {
      "cep": cep,
      "expectedDeliveryDays": 5,
      "value": Math.random() < 0.5 ? 0 : 9.90,
    };

    const cartReponse = this._updateCart(cart, cart_id);
    return cartReponse;
  }

  _updateCart(cart: CartModel, uuid: String) {
    const totalProducts = cart.items.reduce((total, itemCart) => total + itemCart.total, 0);
    const totalPoints = cart.items.reduce((total, itemCart) => total + itemCart.totalPoints, 0);

    cart.total = totalProducts;
    cart.subtotal = totalProducts;
    cart.totalPoints = totalPoints;

    this._updateCartInList(cart, uuid);

    return cart;
  }

  _updateCartInList(updatedCart: CartModel, cart_id: String): void {
    const cartIndex = this.cartList.findIndex(cart => cart.id === cart_id);
    this.cartList[cartIndex] = updatedCart;
  }
}

export default CartRepository;

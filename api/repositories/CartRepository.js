import * as cartData from '../data/cart.json';
import * as itemCartData from '../data/itemcart.json';

class CartRepository {
    cartList = [];

    create() {
        this.cartList.push(cartData)
        return cartData;
    }

    get(cartId) {
        return this.cartList.find(cart => cart.id === cartId);
    }

    addItemCart(cartId, itemId) {
        let cart = this.get(cartId);
        let item = itemCartData;
        item.id++;
        cart.items.push(item);
        return cart;
    }

    incrementItem(cartId, itemId) {
        const cart = this.get(cartId);
        cart.items.map(itemCart => {
            if(itemCart.id === itemId) {
                itemCart.quantity++;
            }
            return itemCart;
        });
        return cart;
    }

    decrementItem(cartId, itemId) {
        const cart = this.get(cartId);
        cart.items.map(itemCart => {
            if(itemCart.id === itemId) {
                itemCart.quantity--;
            }
            return itemCart;
        });
        return cart;
    }

    addShipping(cartId, cep) {
        let cart = this.get(cartId);
        cart['shipping'] = {
            "cep": cep,
            "expectedDeliveryDays": 5,
            "value": Math.random() < 0.5 ? 0 : 9.90,
        };
        return cart;
    }
}

export default CartRepository;
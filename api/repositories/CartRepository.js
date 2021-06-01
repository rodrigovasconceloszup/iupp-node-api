import cartData from '../data/cart/cart.json';
import allProducts from '../data/products/all_products';
import CartItemModel from '../models/CartItemModel';

class CartRepository {
    cartList = [];

    create() {
        const id = this.cartList.length + 1;
        const cartObject = Object.assign({
            ...cartData,
            id
        });
        this.cartList.push(cartObject);
        return cartObject;
    }

    get(cartId) {
        const cartFromList = this.cartList.find(cart => cart.id === parseInt(cartId));
        if(!cartFromList) throw "Cart notfound";
        return cartFromList;
    }

    addItemCart(cartId, itemId) {
        let cart = this.get(cartId);
        const productFromList = allProducts.find(product => product.id === parseInt(itemId));
        if(!productFromList) throw "Product notfound";
        
        const itemCart = new CartItemModel({
            id: cart.items.length + 1,
            quantity: 1,
            product: productFromList,
        });

        if(cart.items.some(product => product.id === parseInt(itemId))){
            cart.items.map(itemCart => {
                if(itemCart.id === parseInt(itemId)) {
                    itemCart.quantity++;
                    itemCart.total = itemCart.product.price * itemCart.quantity;
                    itemCart.totalPoints = itemCart.product.points * itemCart.quantity;
                }
                return itemCart;
            });
        } else {
            cart.items.push(itemCart);
        }
        cart = this._updateCartTotals(cart);
        return cart;
    }

    incrementItem(cartId, itemId) {
        const cart = this.get(cartId);
        cart.items.map(itemCart => {
            if(itemCart.id === itemId) {
                itemCart.quantity++;
                itemCart.total = itemCart.product.price * itemCart.quantity;
                itemCart.totalPoints = itemCart.product.points * itemCart.quantity;
            }
            return itemCart;
        });
        cart = this._updateCartTotals(cart);
        return cart;
    }

    decrementItem(cartId, itemId) {
        const cart = this.get(cartId);
        cart.items.map(itemCart => {
            if(itemCart.id === itemId) {
                itemCart.quantity--;
                itemCart.total = itemCart.product.price * itemCart.quantity;
                itemCart.totalPoints = itemCart.product.points * itemCart.quantity;
            }
            return itemCart;
        });
        cart = this._updateCartTotals(cart);
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

    _updateCartTotals(cart) {
        const totalProducts = cart.items.reduce((total, itemCart) => total + itemCart.total, 0);
        const totalPoints = cart.items.reduce((total, itemCart) => total + itemCart.totalPoints, 0);
        
        cart.total = totalProducts;
        cart.subtotal = totalProducts;
        cart.totalPoints = totalPoints;

        return cart;
    }
}

export default CartRepository;
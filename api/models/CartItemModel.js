class CartItemModel {
    constructor({ 
        id: id,
        quantity: quantity,
        product: product,
    }) {
        this.id = id;
        this.quantity = quantity;
        this.total = product.price * quantity;
        this.totalPoints = product.points * quantity
        this.product = product;
    }
}
export default CartItemModel;
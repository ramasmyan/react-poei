class CartService {
    // Pas besoin de constructeur vide

    addToCart(product) {
        let cart = this.getCartFromLocalStorage();
        if (!cart) {
            product.quantity = 1;
            cart = [product];
        } else {
            const existingProduct = cart.find(item => item._id === product._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }
        }
        this.saveCartToLocalStorage(cart);
    }

    deleteFromCart(id) {
        let cart = this.getCartFromLocalStorage();
        const product = cart.find(item => item._id === id);
        if (product) {
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                cart = cart.filter(item => item._id !== id);
            }
            this.saveCartToLocalStorage(cart);
        }
    }

    getCart() {
        return this.getCartFromLocalStorage() || [];
    }

    deleteCart() {
        localStorage.removeItem('cart');
    }

    getAllPrice(cart) {
        if (cart) {
            if (cart.length > 1) {
                return cart ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
            } else {
                return cart[0].price * cart[0].quantity;
            }
        }
    }

    getAllQuantity(cart) {
        return cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
    }

    // Méthodes privées
    getCartFromLocalStorage() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : null;
    }

    saveCartToLocalStorage(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

const cartService = new CartService();
export default cartService;


class CartService{
    constructor() {

    }

    addToCart(product) {
       const cart = localStorage.getItem('cart');
       if(!cart) {
           product.quantity = 1;
            const cart = [product]
           localStorage.setItem('cart',JSON.stringify(cart));
       }else {
           const cart = JSON.parse(localStorage.getItem('cart'));
           const newProduct = cart.find((item) => item._id === product._id);
              if(newProduct) {
                  newProduct.quantity += 1;
                  const newCart = [...cart.filter((item) => item._id !== product._id), newProduct]
                  localStorage.setItem('cart', JSON.stringify(newCart));
              }else {
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
              }
       }
    }

    deleteFromCart(id) {
        const cart = JSON.parse(localStorage.getItem('cart'));
       const product = cart.find((item) => item._id === id);
         if(product.quantity > 1) {
             product.quantity -= 1;
             localStorage.setItem('cart', JSON.stringify(cart));
         }else {
             const newCart = cart.filter((item) => item._id !== id);
                localStorage.setItem('cart', JSON.stringify(newCart));
         }


    }

    getCart() {
        const cart = localStorage.getItem('cart');
        if(cart){
             return JSON.parse(cart);
        }else {
           return null;
        }
    }
    deleteCart() {
        localStorage.removeItem('cart');
    }
    getAllPrice() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart) {
            let total = 0;
            cart.forEach((item) => {
                total += item.price * item.quantity;
            })
            return total;
        }else {
            return 0;
        }
    }
    getAllQuantity() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart) {
            let total = 0;
            cart.forEach((item) => {
                total += item.quantity;
                console.log(item.quantity)
            })

            return total;
        }else {
            return 0;
        }
    }
}

const  cartService = new CartService();
export default cartService;
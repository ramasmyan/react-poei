class ProductManager {
    constructor() {
      this.products = [];
    }

    async fetchProducts() {
      return fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => {
          this.products = data.map((item) => new Shoes(item.id, item.ref, item.name, item.description, item.price, item.image, item.category, item.brand, item.color));
          return this.products;
        })
        .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
    }

    async sortByAscendingName() {
      this.deleteHTML();
      return this.products.sort((a, b) => a.name.localeCompare(b.name));
    }

    async sortByDecreasingName() {
      this.deleteHTML();
      return this.products.sort((a, b) => b.name.localeCompare(a.name));
    }

    async sortByAscendingPrice() {
      this.deleteHTML();
      return this.products.sort((a, b) => a.price - b.price);
    }
  
    async sortByDecreasingPrice() {
      this.deleteHTML();
      return this.products.sort((a, b) => b.price - a.price);
    }

    async deleteHTML() {
      const parent = document.getElementById("productContainer");
      parent.innerHTML = '';
    }

    async displayButton(btn) {
      const divWithBtnPrimary = document.querySelector('.m-button-filters.btn-primary');
      if(divWithBtnPrimary === null) {
        btn.classList.remove("btn-light");
        btn.classList.add("btn-primary");
      }else if(divWithBtnPrimary.id != btn.id) {
        divWithBtnPrimary.classList.remove("btn-primary");
        divWithBtnPrimary.classList.add("btn-light");
        btn.classList.remove("btn-light");
        btn.classList.add("btn-primary");
      }
    }

    async search() {
      const query = searchInput.value.toLowerCase(); // Obtenez la requête de recherche et convertissez-la en minuscules
      // Filtrer les produits qui correspondent à la requête
      const displayDiv = document.getElementsByClassName('products-container');

      if(query != '') {
        displayDiv[0].style = "display: none;";
      } else {
        displayDiv[0].style = "display: flex;";
      }
      const filteredProducts = this.products.filter((product) => {
        const productName = product.name.toLowerCase();
        const productBrand = product.brand.toLowerCase();
        if (productName.includes(query)) {
          return productName.includes(query);
        } else if(productBrand.includes(query)) {
          return productBrand.includes(query);
        }
      });
      return filteredProducts;
    }

    async updateNavCart() {
      let carts = document.querySelectorAll('.shopping-cart-items');
      for(const cart of carts) {
        cart.innerHTML = '';
      }
      let productCart = document.querySelector('.product-cart');

      if(productCart){
        document.querySelector('.product-cart').innerHTML = '';
      } 
      cart.displayCart;
      cart.removeItemFromCart;
      cart.removeItem;
      cart.addToCartEvent;
    }

      // Ajoutez d'autres méthodes pour gérer les produits, par exemple, trier, ajouter au panier, etc.
   
    async filtrebyCategory(selectedcategory)
    {
       this.deleteHTML();
       var tabcategory = this.products.filter(function(product) {
         return product.category == selectedcategory;
       });
      console.log(tabcategory);
      return tabcategory;
      
    }
  
    async filtrebyBrand(selectedbrand)
    {
      this.deleteHTML();
       var tabbrand = this.products.filter(function(product) {

         return selectedbrand.includes(product.brand);
       });
      return tabbrand;
      
    }

    async filtrebyColor(selectedcolor)
    {
      this.deleteHTML();
       var tabcolor = this.products.filter(function(product) {
         return product.color.includes(selectedcolor);
       });
      console.log(tabcolor);
      return tabcolor;
      
    }
}

export default ProductManager; 
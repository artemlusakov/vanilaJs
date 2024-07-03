class Products {
    constructor(){
        this.classNameActive = `products-element__button_activ`;
        this.labelAdd = `Добавить в корзину`;
        this.labelRemov = `Удалить из корзины`;
    }

    hendlSetLocationStorage(element, id){
        const { pushProduct, products } = localStorageUtil.putProducts(id)
    
        if(pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemov;
        } else {            
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, price, img})=>{
            let activClass = '';
            let activText ='';
            if (productsStore.indexOf(id) === -1){
                activText = this.labelAdd
            } else {
                activClass = " " + this.classNameActive 
                activText = this.labelRemov 
            }

            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">😻 ${price.toLocaleString()} V</span>
                <button 
                onclick="productsPage.hendlSetLocationStorage(this, '${id}')" 
                class="products-element__button ${activClass}"> 
                ${activText}
                </button>
            </li>
            `;

        })

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products();
productsPage.render();

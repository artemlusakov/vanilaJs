class Header {
    hendlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render(count){
        const html = `
            <div class="header-container"> 
                <img src="./logo.png" alt="">

                <div class="header-counter" onclick="headerPage.hendlerOpenShoppingPage();"> 
                    <img src="./bin.png" alt="">
                    ${count}
                </div>
            </div>  
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const productsStore = localStorageUtil.getProducts()


const headerPage = new Header();
headerPage.render(productsStore.length);
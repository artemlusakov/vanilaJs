class Header {
    render(count){
        const html = `
            <div class="header-container"> 
                <img src="./logo.png" alt="">

                <div class="header-counter"> 
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
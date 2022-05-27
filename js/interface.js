

function renderProduct(){
    products.forEach((product) => {
        let content = document.querySelector('.content')
    
        content.innerHTML += `
            <div class="card">
                <div class="img-wrapper">
                    <img src="${product.imgSrc}" alt="">
                </div>
                <div class="texts">
                    <h1>${product.name}</h1>
                    <div class="text-paragraph">
                        <p>R$${product.price}</p>
                        <i class="fa-solid fa-bag-shopping" onclick='addToCart(${product.id})'></i>
                    </div>
                </div>
            </div>
    
    `
    })
}
renderProduct()

// Cart array

let cart = []




// Função para adicionar no cart

function addToCart(id){
    

    if(cart.some((item)=> item.id === id)){
        alert('Este item ja foi adicionado no carrinho.')
    }else{
        let item = products.find((product)=> product.id === id )

        cart.push(item)
    }
    openBag()
    updateCart()
}

// Atualizar carrinho


let cartItemsEl = document.querySelector('.content-cart')
// Renderizar os itens no carrinho

function renderCartItems(){
        cartItemsEl.innerHTML = ""
    cart.forEach((item) =>{
        cartItemsEl.innerHTML += `
            <div class="item">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>R$${item.price}</p>
                <button class="delete-item" id="deleteItem">&times;</button>
            </div>

      `
    })
}

function updateCart(){
    renderCartItems()
}



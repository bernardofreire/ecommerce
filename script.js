const products = [
{
    id:0,
    name:'Camiseta',
    price: 150,
    imgSrc: './imgs/product1.jpg'  
},
{
    id:1,
    name:'Fone Wireless',
    price: 300,
    imgSrc: './imgs/product2.jpg'  
},
{
    id:2,
    name:'Hooded Parka',
    price: 180,
    imgSrc: './imgs/product3.jpg'  
},
{
    id:3,
    name:'Straw Metal Bottle',
    price: 145,
    imgSrc: './imgs/product4.jpg'  
},
{
    id:4,
    name:'Óculos de Metal',
    price: 150,
    imgSrc: './imgs/product5.jpg'  
},
{
    id:5,
    name:'Boné',
    price: 199,
    imgSrc: './imgs/product6.jpg'  
},
{
    id:6,
    name:'Mochila',
    price: 270,
    imgSrc: './imgs/product7.jpg'  
},
{
    id:7,
    name:'Ultraboost',
    price: 350,
    imgSrc: './imgs/product8.jpg'  
}
]



// Funções para abrir e fechar o sidebar

const openBag = () => {
    document.querySelector('aside').className = 'active'
}

const closeBag = () => {
    document.querySelector('aside').className = ''
}

let bagIcon = document.getElementById('bagIcon')

bagIcon.addEventListener('click', ( e ) => {
    e.preventDefault()
    openBag()
})



document.getElementById('close').onclick = e => {
    closeBag()
}


// Função para carregar os produtos na web

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
function updateCart(){
    renderCartItems()
}

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
                <button class="delete-item" onclick="removeItemCart(${item.id})">&times;</button>
            </div>

      `
    })
}

// Remover itens do carrinho

function removeItemCart(id){
    cart = cart.filter((item)=> item.id !== id)

    updateCart()
}








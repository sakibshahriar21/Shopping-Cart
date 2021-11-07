const products = document.querySelectorAll('#add-to-list');
const shoppingList = document.querySelector('#shopping-list');
const table = shoppingList.querySelector('table');
const tbody = table.querySelector('tbody');
const clearBtn = document.querySelector('#clear');
const totalM = document.getElementById('total');
let total = 0;

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', buyProducts);
}

function showCart() {
    let products = getProducts();
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th><img style="height: 50px; width: 100%; display: block;" src="${product.img}"></th>
            <th>${product.title}</th>
            <th>${product.price}</th>
            <th><a href="#" class="badge badge-danger delete" data-id="${product.id}">X</a></th>
        `;
        tbody.appendChild(row);
        total = total + parseInt(product.price);
        totalM.innerHTML = `${total} ৳`;

    });
}

document.addEventListener('DOMContentLoaded',showCart);

function buyProducts(e) {
    e.preventDefault();
    const product = e.target.parentElement;
    //console.log(e.target.parentElement);
    getProductInfo(product);
}

function getProductInfo(product) {
    const productInfo = {
        img : product.querySelector('img').src,
        title : product.querySelector('h3').textContent,
        price : product.querySelector('#price').textContent,
        id : product.querySelector('a').getAttribute('data-id')
    };
    addToCart(productInfo);
}

function addToCart(productInfo) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th><img style="height: 50px; width: 100%; display: block;" src="${productInfo.img}"></th>
        <th>${productInfo.title}</th>
        <th>${productInfo.price}</th>
        <th><a href="#" class="badge badge-danger delete" data-id="${productInfo.id}">X</a></th>
        `;
    tbody.appendChild(row);
    total = total + parseInt(productInfo.price);
    totalM.innerHTML = `${total} ৳`;
}


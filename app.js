const products = document.querySelectorAll('#add-to-list');
const shoppingList = document.querySelector('#shopping-list');
const table = shoppingList.querySelector('table');
const tbody = table.querySelector('tbody');
const clearBtn = document.querySelector('#clear');
const totalM = document.getElementById('total');
let total = 0;

for(var i = 0; i< products.length; i++) {
    products[i].addEventListener('click',buyProducts);
}

function buyProducts(e) {
    e.preventDefault();
    const product = e.target.parentElement; 
    console.log(e.target.parentElement);
}
let selectedCupcake = null;
const loginForm = document.getElementById('loginForm');

function goBack() {
    window.history.back();
}

function checkout() {
    const cupcakes = document.querySelectorAll('.cupcake-option');
    const arrCupcake = [];
    let isSelected = false;

    cupcakes.forEach(cupcake => {
        let quantity = cupcake.querySelector('.quantity').value;
        if (quantity.trim() !== '' && quantity != 0) {
            isSelected = true
        }
    });

    if (isSelected) {
        cupcakes.forEach(cupcake => {
            let name = cupcake.querySelector('.cupcake-name').textContent;
            let price = parseFloat(cupcake.querySelector('.cupcake-price').textContent.replace('$', ''));
            let quantity = cupcake.querySelector('.quantity').value;
            arrCupcake.push({ name: name, price: price, quantity: Number(quantity) });
        });
        sessionStorage.setItem('cupcakes', JSON.stringify(arrCupcake));
        window.location.href = 'checkout.html';
    } else {
        alert('Selecione um cupcake antes de finalizar a compra.');
    }
}

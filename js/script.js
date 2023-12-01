let selectedCupcake = null;
const loginForm = document.getElementById('loginForm');
const signupButton = document.getElementById('signupButton');
const checkoutFields = document.querySelectorAll('.checkout-finish input');
const completePurchaseButton = document.querySelector('.completePurchase');

function areFieldsValid() {
    const creditCardValue = document.getElementById('creditCard').value;
    const validThruValue = document.getElementById('validThru').value;
    const securityCodeValue = document.getElementById('securityCode').value;
    const addressValue = document.getElementById('address').value;

    return (
        creditCardValue.length === 19 && // Verifica se o campo 'creditCard' tem 19 caracteres
        validThruValue.length === 7 && // Verifica se o campo 'validThru' tem 5 caracteres
        securityCodeValue.length === 3 && // Verifica se o campo 'securityCode' tem 3 caracteres
        addressValue.trim().length > 0 // Verifica se o campo 'address' não está vazio
    );
}

function enableCompletePurchaseButton() {
    completePurchaseButton.disabled = !areFieldsValid();
}

enableCompletePurchaseButton(); // Chama a função inicial para desabilitar o botão se os campos não estiverem preenchidos


// Associa a função de validação ao evento 'input' em todos os campos de checkout
checkoutFields.forEach(field => {
    field.addEventListener('input', enableCompletePurchaseButton);
});

completePurchaseButton.addEventListener('click', function () {
    if (areFieldsValid()) {
        alert('Compra Finalizada!');
    } else {
        alert('Preencha todos os campos obrigatórios para continuar.');
    }
});

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

let selectedCupcake = null;
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Aqui você pode adicionar lógica de autenticação antes do redirecionamento, se necessário.

    // Redireciona para a página cupcakes.html
    window.location.href = 'cupcakes.html';
});


function checkout() {
    const cupcakes = document.querySelectorAll('.cupcake-option');
    const arrCupcake = [];
    let isSelected = false;

    cupcakes.forEach ( cupcake => {
        let quantity = cupcake.querySelector('.quantity').value;
        if (quantity.trim() !== '' && quantity != 0) {
            isSelected = true
        }
    });

    if (isSelected) {
        cupcakes.forEach (cupcake => {
            let name = cupcake.querySelector('.cupcake-name').textContent;
            let price = cupcake.querySelector('.cupcake-price').textContent;
            let quantity = cupcake.querySelector('.quantity').value;
            arrCupcake.push({name:name, price:price, quantity:Number(quantity)});
        });
        sessionStorage.setItem('cupcakes', JSON.stringify(arrCupcake));
        window.location.href = 'checkout.html';
    } else {
        alert('Please select a cupcake before proceeding to checkout.');
    }
    console.log(arrCupcake);
}

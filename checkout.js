function onLoadFunction() {
    const cupcakes = JSON.parse(sessionStorage.getItem('cupcakes'));
    const cupcakesInfo = document.getElementById('cupcakesInfo');

    if (cupcakes) {
        let totalQuantity = 0;
        let cupcakesHTML = '<h3 class="Cupcakes-selecionados">Cupcakes Selecionados:</h3><ul>';

        cupcakes.forEach(cupcake => {
            totalQuantity += cupcake.quantity;
            cupcakesHTML += `<li>Name: ${cupcake.name}, Price: ${cupcake.price}, Quantity: ${cupcake.quantity}</li>`;
        });

        cupcakesHTML += '</ul>';
        cupcakesInfo.innerHTML = cupcakesHTML;

        document.getElementById('selectedQuantity').textContent = totalQuantity;
    }
}
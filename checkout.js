// function onLoadFunction() {
//     const cupcakes = JSON.parse(sessionStorage.getItem('cupcakes'));
//     const cupcakesInfo = document.getElementById('cupcakesInfo');

//     if (cupcakes) {
//         let totalQuantity = 0;
//         let cupcakesHTML = '<h3 class="Cupcakes-selecionados">Cupcakes Selecionados:</h3><ul>';

//         cupcakes.forEach(cupcake => {
//             totalQuantity += cupcake.quantity;
//             cupcakesHTML += `<li>Name: ${cupcake.name}, Price: ${cupcake.price}, Quantity: ${cupcake.quantity}</li>`;
//         });

//         cupcakesHTML += '</ul>';
//         cupcakesInfo.innerHTML = cupcakesHTML;

//         document.getElementById('selectedQuantity').textContent = totalQuantity;
//     }
// }

function onLoadFunction() {
    const cupcakes = JSON.parse(sessionStorage.getItem('cupcakes'));
    const cupcakesInfo = document.getElementById('cupcakesInfo');
    const totalAmount = document.getElementById('totalAmount');
  
    if (cupcakes) {
      let totalQuantity = 0;
      let totalPrice = 0;
  
      let cupcakesHTML = '<h3 class="Cupcakes-selecionados">Cupcakes Selecionados:</h3><ul>';
  
      cupcakes.forEach(cupcake => {
        totalQuantity += parseInt(cupcake.quantity, 10); // Convertendo a quantidade para número inteiro
        totalPrice += parseFloat(cupcake.price) * parseInt(cupcake.quantity, 10); // Convertendo preço e quantidade para números
        cupcakesHTML += `<li>Name: ${cupcake.name}, Price: ${cupcake.price}, Quantity: ${cupcake.quantity}</li>`;
      });
      cupcakesHTML += '</ul>';
      cupcakesInfo.innerHTML = cupcakesHTML;
  
      document.getElementById('selectedQuantity').textContent = totalQuantity;
      totalAmount.textContent = `Total: $${totalPrice.toFixed(2)}`; // Exibe o total formatado em "$0.00"
    }
  }
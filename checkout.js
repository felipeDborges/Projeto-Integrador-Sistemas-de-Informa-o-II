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
        totalQuantity += parseInt(cupcake.quantity, 10); // Convertendo quantidade para número inteiro
        totalPrice += parseFloat(cupcake.price) * parseInt(cupcake.quantity, 10); // Convertendo preço para número decimal e quantidade para número inteiro
        cupcakesHTML += `<li>${cupcake.name}, Preço: ${cupcake.price}, Quantidade: ${cupcake.quantity}</li>`;
      });
      cupcakesHTML += '</ul>';
      cupcakesInfo.innerHTML = cupcakesHTML;
  
      document.getElementById('selectedQuantity').textContent = totalQuantity;
      totalAmount.textContent = `Total: $${totalPrice.toFixed(2)}`; // Exibe o total formatado em "$0.00"
    }
  }


document.getElementById('creditCard').addEventListener('input', function (e) {
    let sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    let formattedValue = '';
    for (let i = 0; i < sanitizedValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Adiciona um espaço a cada 4 dígitos
        }
        formattedValue += sanitizedValue[i];
    }
    e.target.value = formattedValue.trim(); // Atualiza o valor do campo de entrada formatado
});

document.getElementById('validThru').addEventListener('input', function (e) {
    let sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    let formattedValue = '';

    if (sanitizedValue.length > 0) {
        formattedValue = sanitizedValue.slice(0, 2);

        if (sanitizedValue.length > 2) {
            formattedValue += '/' + sanitizedValue.slice(2, 6);
        }
    }

    e.target.value = formattedValue; // Atualiza o valor do campo de entrada formatado
});


document.getElementById('securityCode').addEventListener('input', function(e) {
    let sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    let formattedValue = sanitizedValue.slice(0, 3); // Limita o campo a 3 dígitos
    e.target.value = formattedValue; // Atualiza o valor do campo de entrada formatado
})
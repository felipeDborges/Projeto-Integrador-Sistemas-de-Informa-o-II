function applyPhoneFormatting() {
    function formatPhone(value) {
        let sanitizedValue = value.replace(/\D/g, ''); // Remove tudo exceto números
        let formattedValue = '';

        if (sanitizedValue.length > 0) {
            formattedValue = sanitizedValue.slice(0, 2);

            if (sanitizedValue.length >= 3) {
                formattedValue += ' ' + sanitizedValue.slice(2, 3);
            }

            if (sanitizedValue.length >= 4) {
                formattedValue += '.' + sanitizedValue.slice(3, 7);
            }

            if (sanitizedValue.length >= 8) {
                formattedValue += '-' + sanitizedValue.slice(7, 11);
            }
        }

        return formattedValue.trim();
    }

    document.getElementById('phone').addEventListener('blur', function (e) {
        e.target.value = formatPhone(e.target.value);
    });
}

// Chama a função para aplicar a formatação do telefone
applyPhoneFormatting();


function goBack() {
    window.history.back();
}
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let request = indexedDB.open('CadastroDB', 1); // Abre o banco de dados ou cria um novo se não existir

    request.onerror = function (event) {
        console.log("Erro ao abrir o banco de dados 'CadastroDB'.");
    };

    request.onupgradeneeded = function (event) {
        let db = event.target.result;

        let objectStore = db.createObjectStore("users", { keyPath: "email" }); // Cria um objeto store "users" no banco de dados
        objectStore.createIndex("phone", "phone", { unique: false });
        objectStore.createIndex("password", "password", { unique: false });

        console.log("Banco de dados 'CadastroDB' e objeto store 'users' criados com sucesso.");
    };

    request.onsuccess = function (event) {
        let db = event.target.result;
        let transaction = db.transaction(["users"], "readwrite");
        let objectStore = transaction.objectStore("users");

        let newUser = {
            email: email,
            phone: phone,
            password: password
        };

        let addRequest = objectStore.add(newUser); // Adiciona o novo usuário à IndexedDB

        addRequest.onsuccess = function (event) {
            console.log("Dados do usuário cadastrados com sucesso.");
            alert("Dados do usuário cadastrados com sucesso.");
        };

        addRequest.onerror = function (event) {
            console.log("Erro ao cadastrar dados do usuário.");
            alert("Usuario já cadastrado.");
        };
    };
});

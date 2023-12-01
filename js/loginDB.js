document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    let request = indexedDB.open('CadastroDB', 1); // Abre o banco de dados ou cria um novo se não existir

    request.onerror = function (event) {
        console.log("Erro ao abrir o banco de dados 'CadastroDB'.");
    };

    request.onsuccess = function (event) {
        let db = event.target.result;

        let transaction = db.transaction(["users"], "readonly");
        let objectStore = transaction.objectStore("users");


        let getRequest = objectStore.get(username); // Encontra o usuário pelo e-mail

        getRequest.onsuccess = function (event) {
            let userData = event.target.result;
            if (userData && userData.password === password) {
                console.log("Usuário autenticado. Redirecionando...");


                window.location.href = "cupcakes.html";  // Redireciona para a próxima página após a autenticação
            } else {
                console.log("Usuário ou senha incorretos.");
                alert("Usuário ou senha incorretos. Tente novamente.");
            }
        };

        getRequest.onerror = function (event) {
            console.log("Erro ao buscar dados do usuário.");
        };
    };
});

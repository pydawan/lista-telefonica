// Serviços são singletons criados na inicialização da aplicação e que podem ser injetados em componentes.
// Tipos de serviço
// 1. Factory
// 2. Service
// 3. Value (objetos mutáveis compartilhados)
// 4. Provider (dá origem a todos outros serviços, um pouco mais difícil de criar, serviço configurável externamente antes da inicialização)
angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
    var _getContatos = function() {
        // return $http.get("http://localhost:3412/contatos");
        return $http.get(config.baseUrl + "/contatos");
    };

    var _saveContato = function(contato) {
        // return $http.post("http://localhost:3412/contatos", contato);
        return $http.post(config.baseUrl + "/contatos", contato);
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});
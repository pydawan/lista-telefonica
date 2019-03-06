angular.module("listaTelefonica").service("operadorasAPI", function($http, config) {
    this.getOperadoras = function() {
        // return $http.get("http://localhost:3412/operadoras");
        return $http.get(config.baseUrl + "/operadoras");
    };
});
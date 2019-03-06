angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $filter, uppercaseFilter) {
    $scope.app = "Lista Telefônica";
    /*
    contatosAPI.getContatos()
    .success(function(data) {
        console.log(data);
    })
    .error(function(data, status) {
        console.log(data);
    });
    */
    $scope.contatos = [
        { nome: $filter("uppercase")("Pedro"), telefone: "99998888", cor: "blue", data: new Date(), serial: serialGenerator.generate() },
        { nome: $filter("uppercase")("Ana"), telefone: "99998877", cor: "yellow", data: new Date(), serial: serialGenerator.generate() },
        { nome: uppercaseFilter("Maria"), telefone: "99998866", cor: "red", data: new Date(), serial: serialGenerator.generate() }
    ];
    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
        { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
        { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
        { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 },
    ];
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
}); 
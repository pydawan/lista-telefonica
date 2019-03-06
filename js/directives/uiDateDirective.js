angular.module("listaTelefonica").directive("uiDate", function($filter) {
    // 1. link - Executada depois do template ter sido compilado, podemos utilizá-la para interagir com a DOM, tratando eventos
    //    ou mesmo para definir o comportamento associado com a lógica da diretiva.
    return {
        // scope é o mesmo escopo do controller (escopo externo) caso a diretiva não tenha um escopo interno (isolado).
        // Não é uma boa prática interagir diretamente com o escopo externo pois com isso a diretiva perde sua capacidade de reuso ficando
        // dependente do escopo de um controller específico.

        // require - Estabelece um vínculo com outra diretiva, interagindo por meio do controller, que é um dos parâmetros da função link.
        require: "ngModel", // API exposta pela propriedade controller.
        link: function(scope, element, attrs, ctrl) {
            var _formatDate = function(date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            };
            element.bind("keyup", function() {
                // console.log(ctrl.$viewValue);
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
            // Faz com que a interação com o escopo ocorra apenas quando o dado estiver correto.
            ctrl.$parsers.push(function(value) {
                console.log(value);
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    // return value; // envia o valor para o escopo.
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
                }
            });

            ctrl.$formatters.push(function(value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});
// 1. Filtros podem ter dependências injetadas em sua function.
// 2. O primeiro parâmetro do retorno do filtro sempre é o input a ser transformado.

angular.module("listaTelefonica").filter("ellipsis", function() {
    return function(input, size) {
        if (input.length <= size) return input;
        var output = input.substring(0, (size || 2)) + "...";
        return output;
    };
});
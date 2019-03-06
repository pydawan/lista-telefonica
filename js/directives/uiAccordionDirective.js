angular.module("listaTelefonica").directive("uiAccordions", function() {
    return {
        controller: function($scope, $element, $attrs) {
            // OBSERVAÇÃO: como é uma função construtora só consegue visualizar o que estiver sendo atribuído a this.
            var accordions = [];
            this.registerAccordion = function(accordion) {
                // console.log(accordion.$id); $id é o id do escopo do componente.
                accordions.push(accordion);
            };
            this.closeAll = function() {
                accordions.forEach(function(accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("listaTelefonica").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function() {
                ctrl.closeAll();
                scope.isOpened = true;
            };
        }
    };
});
angular.module("listaTelefonica").directive("uiAlert", function() {
    // DDO - Directive Definition Object.
    // Propriedades
    // 1. template especifica o template da diretiva.
    // 2. templateUrl especifica o local do arquivo de template.
    // 3. replace substitui o elemento pleo template da diretiva.
    // 4. Restringe o modo de utilização da diretiva ao atributo, elemento, classe e comentário,
    //    ou ainda uma combinação deles. Por default a diretiva é atribuída pelo atributo.
    // 4.1 Tipos de Restrição
    // 4.1.1 A - Diretiva restrita ao atributo do elemento.
    // 4.1.2 E - Diretiva restrita ao elemento.
    // 4.1.3 C - Diretiva restrita a classe do elemento.
    // 4.1.4 M - Diretiva restrita ao comentário do elemento.
    // 5. Scope
    // 5.1 Por padrão uma diretiva compartilha o mesmo scope de onde é utilizada.
    //     Para aumentar seu potencial de reuso, podemos isolar seu scope, passando os dados necessários por parâmetro.
    // @ Vincula o valor do atributo diretamente a uma propriedade do scope da diretiva.
    // = Cria um vínculo bi-direcional entre uma propriedade do scope do template a uma propriedade do scope da diretiva.
    // 6. transclude
    // 6.1 Permite encapsular elementos dentro de uma diretiva, criando um scope não isolado.
    return {
        // template: "",
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            // topic: "@title"
            title: "@",
            // error: "=message"
            message: "="
        },
        transclude: true // habilita o encapsulamento de conteúdo dentro da diretiva. herda propriedades do escopo externo.
    };
});
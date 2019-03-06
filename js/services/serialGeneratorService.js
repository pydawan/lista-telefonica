// Apenas serviços do tipo provider podem ser configurados antes de sua inicialização.
// Uma constant pode ser injetada em um provider mas um value não isso se deve ao fato de configurações mutáveis
// poderem quebrar o funcionamento correto de um serviço publicado.

angular.module("listaTelefonica").provider("serialGenerator", function() {
    var _length = 10;

    this.getLength = function() {
        return _length;
    };

    this.setLength = function(length) {
        _length = length;
    };

    this.$get = function() {
        return {
            generate: function() {
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});
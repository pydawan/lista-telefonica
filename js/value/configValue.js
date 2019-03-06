angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3412"
});

// Um value não pode ser injetado em um serviço do tipo provider.
// Um constant pode ser injetado em um provider.
//angular.module("listaTelefonica").constant("config", {});
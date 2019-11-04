var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        $scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";
        $scope.vm.contratos = this.contratosJson;
        console.debug("cargando contratos %o", $scope.vm.contratos);
        $scope.vm.contratosMapeados = $scope.vm.contratos.map(function (elem) {
            return {
                "id": elem.idColumn,
                "nombre": (elem.nombre) ? elem.nombre : "Sin Nombre",
                "numeroAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            };
        });
        $scope.vm.sinAcciones = $scope.vm.contratosMapeados.filter(function (elem) { return elem.numeroAcciones == 0; });
        console.debug("datos de contratos sin acciones %o ", $scope.vm.sinAcciones);
        $scope.vm.accionesEntre = $scope.vm.contratosMapeados.filter(function (elem) { return elem.numeroAcciones >= 1 && elem.numeroAcciones <= 3; });
        console.debug("datos de contratos con acciones  entre 1 y 3 %o ", $scope.vm.accionesEntre);
        $scope.vm.accionesMayor = $scope.vm.contratosMapeados.filter(function (elem) { return elem.numeroAcciones > 3; });
        console.debug("datos de contratos con acciones mayor que 3 %o ", $scope.vm.accionesEntre);
        $scope.vm.temporal = $scope.vm.contratos.filter(function (elem) { return elem.ACCIONES != "" && elem.ACCIONES != undefined; });
        $scope.vm.accionesDif = $scope.vm.temporal.map(function (elem) { return elem.ACCIONES; }).filter(function (v, i, a) {
            if (!$scope.vm.temporal.titulo && !$scope.vm.temporal.clave) {
                return a.indexOf(v) === i;
            }
        });
        console.debug("datos de contratos listado acciones ", $scope.vm.accionesDif);
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map
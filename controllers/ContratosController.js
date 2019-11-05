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
        console.debug('temporales %o', $scope.vm.temporal);
        $scope.vm.temp = $scope.vm.temporal.map(function (elem) { return elem.ACCIONES.map(function (e) { return e.titulo; }).flat(); });
        $scope.vm.accionesDif = $scope.vm.temp.flat().filter(function (v, i, a) { return a.indexOf(v) === i; });
        console.debug('temporales unidos %o', $scope.vm.temp);
        console.debug("datos de contratos listado acciones ", $scope.vm.accionesDif);
        $scope.vm.accionesFindPrimero = $scope.vm.temporal.find(function (elem) { return elem.ACCIONES.find(function (elem) { return elem.clave === 'SITUACION'; }); });
        console.debug("datos del primer contrato con acciones con clave SITUACION %o ", $scope.vm.accionesFindPrimero);
        $scope.vm.accionesFindUltimo = $scope.vm.temporal.reverse().find(function (elem) { return elem.ACCIONES.find(function (elem) { return elem.clave == 'SITUACION'; }); });
        console.debug("datos del ultimo contrato con acciones con clave SITUACION %o ", $scope.vm.accionesFindUltimo);
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map
var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        this.$scope = $scope;
        this.librosService = librosService;
        console.trace("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        librosService.getLibros().then(function (datos) {
            $scope.vm.libros = datos;
            console.debug($scope.vm.libros);
        });
        $scope.vm.formulario = function (libro) {
            $scope.vm.mostrarForm = true;
            $scope.vm.libroEditar = libro;
            console.debug("libro %o", libro);
            $scope.vm.obternerFormatos();
        };
        $scope.vm.crear = function () {
            $scope.vm.mostrarForm = false;
            console.debug("crear");
        };
        $scope.vm.editar = function () {
            $scope.vm.mostrarForm = false;
            console.debug("editar");
        };
        $scope.vm.obternerFormatos = function () {
            $scope.vm.temp = $scope.vm.libros.filter(function (elem) { return elem.formatos != undefined; });
            var temporal = $scope.vm.temp.map(function (elem) { return elem.formatos; }).flat();
            console.debug('temporales %o', temporal);
            $scope.vm.formatos = temporal.filter(function (v, i, a) { return a.indexOf(v) === i; });
            console.debug("formatos %o", $scope.vm.formatos);
        };
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map
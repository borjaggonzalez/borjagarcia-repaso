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
        $scope.vm.editar = function (libro) {
            console.trace("funcion editar");
            $scope.vm.mostrarForm = true;
            $scope.vm.libroEditar = libro;
        };
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map
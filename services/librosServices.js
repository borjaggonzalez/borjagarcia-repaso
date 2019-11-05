var ENDPOINT = "http://localhost:3000/libros/";
var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.getLibros = function () {
            console.trace('GET' + ENDPOINT);
            return _this.http.get(ENDPOINT).then(function (result) {
                return result.data;
            });
        };
        this.getLibroDetalle = function (id) {
            throw new Error("Method not implemented.");
        };
        this.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        this.crear = function (libro) {
            throw new Error("Method not implemented.");
        };
        this.modificar = function (id, libro) {
            throw new Error("Method not implemented.");
        };
        this.http = $http;
    }
    return LibrosService;
}());
//# sourceMappingURL=librosServices.js.map
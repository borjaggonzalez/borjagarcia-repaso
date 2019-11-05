interface ILibrosControllerScope extends ng.IScope{
    vm:LibrosController;
}


class LibrosController implements ng.IController{
    public libros:Array<ILibro>;

    public static $inject=["$scope","librosService"];
    public mostrarForm:boolean;
    public editar:any;
    public libroEditar:ILibro;


    constructor(private $scope:ILibrosControllerScope, private librosService:ILibrosService){
        console.trace("LibrosController constructor")
        this.$scope.vm = this;
        $scope.vm.libros=[];

        librosService.getLibros().then((datos)=>{
            $scope.vm.libros=datos;
            console.debug($scope.vm.libros);
        });
        
        $scope.vm.editar = function(libro){
            console.trace("funcion editar");
                $scope.vm.mostrarForm=true; 
                $scope.vm.libroEditar = libro;
        }
    
        
    }


   

}
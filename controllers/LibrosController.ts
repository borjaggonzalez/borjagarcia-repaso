interface ILibrosControllerScope extends ng.IScope{
    vm:LibrosController;
}


class LibrosController implements ng.IController{
    public libros:Array<ILibro>;

    public static $inject=["$scope","librosService"];
    public mostrarForm:boolean;
    public formulario:any;
    public crear:any;
    public editar:any;
    public obternerFormatos:any;
    public libroEditar:ILibro;
    public formatos:any;
    public temp:any;

    constructor(private $scope:ILibrosControllerScope, private librosService:ILibrosService){
        console.trace("LibrosController constructor")
        this.$scope.vm = this;
        $scope.vm.libros=[];

        librosService.getLibros().then((datos)=>{
            $scope.vm.libros=datos;
            console.debug($scope.vm.libros);
        });
        



        /**
         * Funcion para abrir la vista del formulario y cargar los datos de un libro en el caso de que no fuera un alta
         */
        $scope.vm.formulario = function(libro){
                $scope.vm.mostrarForm=true; 
                $scope.vm.libroEditar = libro;
                console.debug("libro %o", libro);
                $scope.vm.obternerFormatos();
                
               
        }
        

         /**
         * Funcion para abrir la vista del formulario y cargar los datos de un libro en el caso de que no fuera un alta
         */
        $scope.vm.crear = function(){
            $scope.vm.mostrarForm=false; 
            console.debug("crear");
        }

        /**
         * Funcion para abrir la vista del formulario y cargar los datos de un libro en el caso de que no fuera un alta
         */
        $scope.vm.editar = function(){
            $scope.vm.mostrarForm=false; 
            console.debug("editar");
        }
        

        /**
         * Funcion para obtener los formatos de forma dinamica desde los datos almacenados en el json
         */
        $scope.vm.obternerFormatos = () =>{
            $scope.vm.temp = $scope.vm.libros.filter((elem)=>elem.formatos != undefined);
            let temporal=$scope.vm.temp.map((elem)=>elem.formatos).flat();
            console.debug('temporales %o',  temporal);
          
            $scope.vm.formatos = temporal.filter((v,i,a)=>a.indexOf(v)===i);
            console.debug("formatos %o", $scope.vm.formatos)
        } 
    
        
    }


   

}
interface IContratosControllerScope extends ng.IScope{
    vm:ContratosController;
}

interface IContratosResumen{
    id:String;
    nombre:String;
    numeroAcciones:number;
}

class ContratosController implements ng.IController{

public titulo:string;
public contratos:any;
public contratosMapeados:Array<IContratosResumen>;
public static $inject=["$scope","contratosJson"];
public sinAcciones:Array<IContratosResumen>;
public accionesEntre:Array<IContratosResumen>;
public accionesMayor:Array<IContratosResumen>;
public accionesDif:any;
public temporal:any;

constructor(private $scope:IContratosControllerScope, private contratosJson:any){
    $scope.vm = this;
    $scope.vm.titulo = "Contratos Titulo";
    $scope.vm.contratos = this.contratosJson;
   
    console.debug("cargando contratos %o", $scope.vm.contratos);

    $scope.vm.contratosMapeados=$scope.vm.contratos.map((elem)=>{
        return{
            "id":elem.idColumn,
            "nombre":(elem.nombre)?elem.nombre:"Sin Nombre",
            "numeroAcciones":(elem.ACCIONES)?elem.ACCIONES.length:0
        }

    });
    // 1- Numero contratos sin acciones
    $scope.vm.sinAcciones=$scope.vm.contratosMapeados.filter((elem)=>elem.numeroAcciones==0);
        console.debug("datos de contratos sin acciones %o ",$scope.vm.sinAcciones);
    
    // 2- Numero contratos con numero de acciones entre 1 y 3
    $scope.vm.accionesEntre = $scope.vm.contratosMapeados.filter(
        (elem)=>elem.numeroAcciones>=1 &&  elem.numeroAcciones<=3
        );
    // 3- Numero contratos con numero de acciones > 3
    console.debug("datos de contratos con acciones  entre 1 y 3 %o ",$scope.vm.accionesEntre);
    
    $scope.vm.accionesMayor = $scope.vm.contratosMapeados.filter(
        (elem)=>  elem.numeroAcciones>3
        );

    // 4- Mostrar todas las acciones sin duplicados
    console.debug("datos de contratos con acciones mayor que 3 %o ",$scope.vm.accionesEntre);

        $scope.vm.temporal = $scope.vm.contratos.filter((elem)=>elem.ACCIONES!="" && elem.ACCIONES != undefined );
    $scope.vm.accionesDif = $scope.vm.temporal.map((elem)=>elem.ACCIONES).filter((v,i,a)=>{

            if(!$scope.vm.temporal.titulo && !$scope.vm.temporal.clave){
                
                return a.indexOf(v)===i;
            }

    });

    console.debug("datos de contratos listado acciones ",$scope.vm.accionesDif);

     //5- Find - Buscar primer contrato que en las acciones tenga  clave = SITUACION





     //6- Find - Buscar ultimo contrato que en las acciones tenga  clave = SITUACION


}
}
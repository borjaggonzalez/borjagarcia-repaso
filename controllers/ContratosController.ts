interface IContratosControllerScope extends ng.IScope{
    vm:ContratosController;
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
public accionesFindPrimero:any;
public accionesFindUltimo:any;
public temporal:any;
public temp:any;

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

    $scope.vm.sinAcciones=$scope.vm.contratosMapeados.filter((elem)=>elem.numeroAcciones==0);
        console.debug("datos de contratos sin acciones %o ",$scope.vm.sinAcciones);
    


    $scope.vm.accionesEntre = $scope.vm.contratosMapeados.filter(
        (elem)=>elem.numeroAcciones>=1 &&  elem.numeroAcciones<=3
        );

    console.debug("datos de contratos con acciones  entre 1 y 3 %o ",$scope.vm.accionesEntre);
    


    $scope.vm.accionesMayor = $scope.vm.contratosMapeados.filter(
        (elem)=>  elem.numeroAcciones>3
        );

    console.debug("datos de contratos con acciones mayor que 3 %o ",$scope.vm.accionesEntre);



 $scope.vm.temporal = $scope.vm.contratos.filter((elem)=>elem.ACCIONES!="" && elem.ACCIONES != undefined );
 console.debug('temporales %o', $scope.vm.temporal);



        $scope.vm.temp=$scope.vm.temporal.map((elem)=>elem.ACCIONES.map(e=>e.titulo).flat());
        $scope.vm.accionesDif = $scope.vm.temp.flat().filter((v,i,a)=>a.indexOf(v)===i);

        console.debug('temporales unidos %o',$scope.vm.temp);
         console.debug("datos de contratos listado acciones ",$scope.vm.accionesDif);


      
    $scope.vm.accionesFindPrimero = $scope.vm.temporal.find(
            (elem)=> elem.ACCIONES.find(  (elem) =>elem.clave === 'SITUACION')
        );

    console.debug("datos del primer contrato con acciones con clave SITUACION %o ",$scope.vm.accionesFindPrimero);




      
    $scope.vm.accionesFindUltimo = $scope.vm.temporal.reverse().find(
        (elem)=> elem.ACCIONES.find((elem) =>elem.clave == 'SITUACION')
    );

console.debug("datos del ultimo contrato con acciones con clave SITUACION %o ",$scope.vm.accionesFindUltimo);

}
}
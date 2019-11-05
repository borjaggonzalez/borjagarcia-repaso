interface ILibrosService {


    /**
     * peticion GET para obtener todos los libros
     * @return angular.IPromise<ILibro[]>
     */
    getLibros(): angular.IPromise<ILibro[]>;



    getLibroDetalle(id:number) : angular.IPromise<ILibro>;
    


    delete(id:number):angular.IPromise<boolean>;
    


    crear(libro:ILibro):angular.IPromise<boolean>;
    

    /**
     * Modifica un ILibro existente
     * @param id identificador del libro a modificar
     * @param libro para modificar
     * @return true si lo modifica, false en caso contrario
     * 
     */
    modificar(id:number,libro:ILibro):angular.IPromise<boolean>;


}

const ENDPOINT= "http://localhost:3000/libros/";

class LibrosService implements ILibrosService {
   
    private http: ng.IHttpService;
    

    constructor($http) {
           this.http = $http;
    }

   
  public getLibros = (): angular.IPromise<ILibro[]> => {
        console.trace('GET' + ENDPOINT);
        return this.http.get<any>(ENDPOINT).then(result => {
              return result.data;
        });
    }
 
    public getLibroDetalle = (id: number): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }
    public delete = (id: number): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }
    public crear = (libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }
    public modificar = (id: number, libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }




}
interface ILibro{
    id:number;
    titulo:string;
    ISBN:string;
    numeroPaginas:number;
    autor:string;
    digital:boolean;
    formatos?:Array<string>;//el simbolo ? indica que el parametro es opcional
}
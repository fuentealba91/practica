export class Users 
{
    public Id: number;
    public name: string;
    public clave:string;
    public usuario:string;
    public perfil:string;
    
    constructor(Id:number,name: string,clave:string,usuario:string,perfil:string) 
    {
        this.Id = Id;
        this.name = name;
        this.clave = clave;
        this.usuario = usuario;
        this.perfil = perfil;
    }
}
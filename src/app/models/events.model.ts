export interface Events {
  oid:string;
  code:string;
  name:string;
  date:Date;
  maxnettime:number;
  optimisticlockfield:number;
}
export interface EventFromServer{
  sucess:boolean;
  data:Events[];
  message:string
}

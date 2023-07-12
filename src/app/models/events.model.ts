export interface Events {
  oid:string;
  code:string;
  name:string;
  date:Date;
  maxnettime:Number;
  optimisticLockfield:Number;
}
export interface EventFromServer{
  sucess:boolean;
  data:Events[];
  message:string
}

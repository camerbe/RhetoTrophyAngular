export interface EventTeams {
    oid:string;
    eventoid:string;
    position:number;
    teamnumber:number;
    name:string;
    zipcode:string;
    city:string;
    responsible:string;
    status:number;
    notes:string;
    nettime:number;
    endtime:number;
    completedtracks:number;
    totalpenalties:number;
}
export interface EventTeamFromServer{
    sucess:boolean;
    data:EventTeams[];
    message:string
  }
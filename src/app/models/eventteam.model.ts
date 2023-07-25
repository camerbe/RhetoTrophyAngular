export interface EventTeams {
    Oid:string;
    EventOid:string;
    Position:number;
    TeamNumber:number;
    Name:string;
    ZipCode:string;
    City:string;
    Responsible:string;
    Status:number;
    Notes:string;
    NetTime:number;
    EndTime:number;
    CompletedTracks:number;
    TotalPenalties:number;
}
export interface EventTeamFromServer{
    sucess:boolean;
    data:EventTeams[];
    message:string
  }
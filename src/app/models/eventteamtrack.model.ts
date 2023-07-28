export interface EventTeamTrack {
    Oid: string;
    TeamOid: string;
    TrackOid: string;
    Start: Date;
    Finish: Date;
    Completed: boolean;
    RawTime: number;
    DwnTime: number
    NetTime: number;
    EndTime: number;
    TotBonus: number;
    TotMalus: number;
    DeltaBonusMalus: number;
    TotalPenalties: number;
}
export interface EventTeamTrackFromServer{
    sucess:boolean;
    data:EventTeamTrack[];
    message:string
}

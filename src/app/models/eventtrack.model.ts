export interface EventTracksExtended {
    eventtracks_oid:string;
    eventtracks_name:string;
    eventtracks_code:string;
    eventteams_oid:string;
    oid:string;
    eventoid:string;
    code:string;
    seq:number;
    color:number;
    name:string;
    multiplytimefactor:number;
    optimisticlockfield:number;
    events_name:string;
    date:Date;
    maxnettime:number;
    position:number;
    teamnumber:number;
    city:string;
    responsible:string;
    status:number;
    notes:string;
    NetTime:number;
    endtime:number;
    completedtracks:number;
    totalpenalties:number;
}

export interface EventTrackExtendedFromServer{
    sucess:boolean;
    data:EventTracksExtended[];
    message:string
}
export interface EventTracks {
    Oid:string;
    EventOid:string;
    Name:string;
    Code:string;
    Seq:number;
    Color:number;
    MultiplyTimeFactor:number;
    OptimisticLockField:number;
}

export interface EventTrackFromServer{
    sucess:boolean;
    data:EventTracks[];
    message:string
}
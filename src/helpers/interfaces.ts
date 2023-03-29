export interface SateliteObj {
    id:string,
    country:string,
    launch_date:string,
    mass:string,
    launcher:string
}

export interface LauncherObj {
    id:string, 
    category: string, 
    status: string
}

export interface CentreObj {
    id:number,
    name:string, 
    place:string, 
    state:string
}

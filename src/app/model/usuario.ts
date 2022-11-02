export interface Usuario {
    name : string;
    LastName : string;
    age : number;
    adress: string;
    height: number;
    company : company
}

export interface company {
    name : string;
    value : number;
    location : location
}

export interface location {
    lat : number;
    lon : number
}
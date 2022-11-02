export interface user {
  name: string;
  lastName: string;
  age: number;
  address: string;
  height: number;
  company: company;
}

export interface company {
  name: string;
  value: number;
  location: location;
}

export interface location {
  latitude: string;
  longitud: string;
}

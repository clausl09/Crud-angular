export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  }

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

//Modelos para criação
export interface ResquestCreate {
    name: string;
    job: string;
  }

export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: string;
  }

//Modelos para o getUser(um usuario)
export interface ResponseUser {
  data: User
}

//Modelos para update
export interface ResquestUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  createdAt: string;
}
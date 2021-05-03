import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class Imagetable{
  constructor(
    public id : number,
    public name: string,
    public type:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class UploadDocService {

  constructor(
    private httpClient:HttpClient
  ) { 
   
  }

  getImageData()
  {
    console.log("test call");
    return this.httpClient.get<Imagetable[]>('http://localhost:7001/show');
  }
}

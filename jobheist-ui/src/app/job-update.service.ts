import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobUpdateService {

  constructor(private _http : HttpClient) { }

  public updateJob(job:Job):Observable<any>{
    return this._http.post("http://localhost:8080/api/v1/hire",job); 
  
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsEditService {

  constructor(private http: HttpClient) { }

  addSkill(skill: Skill): Observable<any>{
    return this.http.post<any>('http://localhost:3000/skill', skill);
  }

  getSkills(): Observable<any> {
    return this.http.get('http://localhost:3000/skill');
  }

  deleteSkill(id:number){
    return this.http.delete('http://localhost:3000/skill/' + id);
  }
}

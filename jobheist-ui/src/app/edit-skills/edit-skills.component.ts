import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillsEditService } from '../skills-edit.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skillsList: Skill[]=[];
  isEmpty=true;
  constructor(private skill_edit:SkillsEditService) {
    
   }

  ngOnInit(): void {
    this.skill_edit.getSkills().subscribe((data)=>{
      this.skillsList=data;
    },()=>{
      console.log("Error getting data");
    });
    if(this.skillsList.length===0){
      this.isEmpty = true;
    }
    else{
      this.isEmpty = false;
    }
  }

  addSkill(value: string){
    this.skillsList.push({skillName: value});
    this.isEmpty=false;
    this.skill_edit.addSkill({skillName:value}).subscribe(()=>{
      console.log("skill added in db");
    }, ()=>{
      console.log("some error occurred");
    });
    this.ngOnInit();
  }

  onDeletingSkill(id: number){
    this.skill_edit.deleteSkill(id).subscribe(()=>{
      this.ngOnInit();
    });
    if(this.skillsList.length===0){
      this.isEmpty = true;
    }
  }
  
}

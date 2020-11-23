import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditSkillsComponent } from '../edit-skills/edit-skills.component';
import { Skill } from '../skill';
import { SkillsEditService } from '../skills-edit.service';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css']
})
export class JobSeekerProfileComponent implements OnInit {

  skillsList: Skill[]=[];

  infoUpdateForm: FormGroup;
  emailid = 'parasarayush@gmail.com';
  currentLocation: string;
  disabled=true;
  dob: Date;
  preferredLocation: string;
  saved=0;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private skill_edit: SkillsEditService) { }

  ngOnInit(): void {
    this.skill_edit.getSkills().subscribe((data)=>{
      this.skillsList=data;
    },()=>{
      console.log("Error getting data");
    });
    this.infoUpdateForm = this.formBuilder.group({
      emailid : [{value:this.emailid, disabled: true}, [Validators.required]],
      currentLocation : [{value:this.currentLocation, disabled: this.disabled}, [Validators.required]],
      dob: [{value:this.dob, disabled: this.disabled}],
      preferredLocation : [{value:this.preferredLocation, disabled: this.disabled}, [Validators.required]]
    });
  }

  onInfoEdit(){
    this.saved++;
    console.log(this.infoUpdateForm.value);
    this.disabled=true;
    this.ngOnInit();
  }

  onEditClick(){
    this.disabled=false;
    this.ngOnInit();
    
  }

  onEditCancel(){
    if(this.saved==0){
      this.currentLocation="";
      this.preferredLocation="";
      this.dob=null;
    }
    this.disabled=true;
    this.ngOnInit();
    console.log(this.infoUpdateForm.value);
    //this.infoUpdateForm.controls.currentLocation.setValue(this.currentLocation);
  }

  onEditSkillsClick(){
    this.ngOnInit();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditSkillsComponent, dialogConfig);
    this.ngOnInit();
  }
}

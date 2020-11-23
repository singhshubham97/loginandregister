import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../job';
import { JobUpdateService } from '../job-update.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  job: Job =new Job();
  jobUpdateForm:FormGroup;
  msg = "";

  constructor(private formBuilder: FormBuilder ,private _service:JobUpdateService,private _router:Router) { }

  ngOnInit(): void {
    this.jobUpdateForm = this.formBuilder.group({
      'post' : [this.job.post, [Validators.required]],
      'location' : [this.job.location,[Validators.required]],
      'joiningDate' : [this.job.joiningDate,[Validators.required]],
      'Compensation' : [this.job.compensation,[Validators.required]]
    });
  }

  onJobPost(){
    this._service.updateJob(this.job).subscribe(
      data=>{
        //console.log("response received");
        this.msg="Job posted Successfully";
        //this._router.navigate(['jobCard']);
      },
      error=>{
        //console.log("exception occured");
        this.msg=error.error;
      }
    )
  }
}

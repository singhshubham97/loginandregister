import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

export interface field {
  Organisation: string;
  Jobtitle: string;
  Location: string;
  Experience: string;
  Skills:string[];
  Salary: string;
}

  const fields: field[] = [
    {
    Organisation: 'XYZ', 
    Jobtitle: 'Jobtitle', 
    Location: 'Location here', 
    Experience:'2 years', 
    Skills:['Spring', 'Angular'],
    Salary: '7 LPA' 
    },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
    {Organisation: 'Organisation', Jobtitle: 'Jobtitle', Location: 'Location here', Experience:'2 years', Skills:['Spring', 'Angular'],Salary: '7 LPA'   },
  ];

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
  
    
    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }
  
    @ViewChild(MatPaginator) paginator : MatPaginator;
    obs: Observable<any>;
    dataSource: MatTableDataSource<field> = new MatTableDataSource<field>(fields);
  
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

}

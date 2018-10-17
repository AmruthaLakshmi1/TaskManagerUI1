import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { SharedService } from 'src/app/services/shared.service';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
TaskId:number;
item:Task;
list:Task[];
list1:Task[];
msg:any;
rangevalue=0;
Recordadded:string;
  constructor(private _service:SharedService, private _active:ActivatedRoute,private _router:Router) { 
    this.item=new Task(); 
    //console.log(this.item.TaskId);  
    this._active.params.subscribe(k=>this.TaskId=k['TaskId']);
    this._service.Search(this.TaskId).subscribe(i=>this.item=i);
    this._service.GetAll().subscribe(i=>this.list=i);  
    this._service.GetAll().subscribe(i=>this.list1=i);  
       }
  ngOnInit() {    
  } 
  Update()
{
//Invoke angulsr
this.Recordadded="Record has been updated successfully";
this._service.Edit(this.item)
.subscribe(i=>
  {
    this._service.GetAll().subscribe(j=>this.list1=j);
  }
  );  
  //this._router.navigateByUrl('view');
//console.log(this.msg); 

}
Cancel()
{
  this.Recordadded="";
  this._router.navigateByUrl('add');  
}
// valueChanged(e) {
//   this.rangevalue = e.target.value;
// }
}
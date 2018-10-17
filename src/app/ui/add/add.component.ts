import { Component, OnInit, inject } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {FormGroup , FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
item:Task;
list:Task[];
msg:any;
text:any;
myform:FormGroup;
rangevalue=0;
showSuccessMessage:boolean;
Recordadded:string;
//modalTitle:string;

constructor(private _service:SharedService, private _router:Router) {
    this.text='';
    this.item=new Task();
        this._service.GetAll()
        .subscribe(i=>this.list=i);  
       // this.modalTitle=data.modalTitle;
   }  
  ngOnInit() {
  }
Add()
{
//Invoke angulsr  
//if(confirm('Do you want to add this record')){
this._service.Add(this.item)
.subscribe(i=>this.msg=i);
console.log(this.msg);
this.Recordadded="Record addedd successfully";
}
TaskName:string='';
Reset()
{
   //console.log("Reset");
  // this.TaskName='';
   //this.myform.reset;
   //this.myform.reset();
  //this.item.Task=this.text
  //if(confirm('Do you want to reset values?')){
  $('#Taskname').val('');
  $('#Priority').val('');
  $('#Sdate').val('');
  $('#Edate').val('');
  $('#Parenttask').val('');
  this.Recordadded='';
  //}
}  
// valueChanged(e) {
//   this.rangevalue = e.target.value;
// }
}
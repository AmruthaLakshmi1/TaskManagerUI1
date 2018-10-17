import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { Task } from 'src/app/Models/task';
import { inject } from '@angular/core';
import {Response,HttpModule} from '@angular/http';
//import {it} from '@angular/core';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpModule],
    providers:[SharedService,HttpModule]
  }));
  

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);    
    const item:Task = {TaskId:123,TaskName:'Testtask',ParentName:'parenttest',Priority:10,Priorityto:10,SDate:new Date(2014,4,4) ,EDate:new Date(2014,4,4) ,flag:true}
    const res=service.Add(item); 
    expect(service).toBeTruthy();
  });
    // it('Add a task', inject([SharedService], (service: SharedService) => {
    // const item:Task = {TaskId:123,TaskName:'Testtask',ParentName:'parenttest',Priority:10,Priorityto:10,SDate:new Date(2014,4,4) ,EDate:new Date(2014,4,4) ,flag:true}
    // const res=service.Add(item); 
    // }));
});

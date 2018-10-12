import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { Task } from 'src/app/Models/task';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('Add a task', () => {
  //   const item:Task = {TaskId:123,TaskName:'Testtask',ParentName:'parenttest',Priority:10,SDate:new Date(2014,4,4) ,EDate:new Date(2014,4,4) ,flag:true}
  //   component.Add();
  //  });
  
});

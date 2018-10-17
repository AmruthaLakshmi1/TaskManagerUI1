import { async, ComponentFixture, TestBed} from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule],
      providers:[HttpModule,FormsModule],
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

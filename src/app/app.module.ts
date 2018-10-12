import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'
import {Http} from '@angular/http'
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { Route } from '@angular/compiler/src/core';
import { SharedService } from 'src/app/services/shared.service';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {path:'add', component:AddComponent},
  {path:'view', component:ViewComponent},
  {path:'update/:TaskId', component:UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AddComponent,
    UpdateComponent,
    ViewComponent,

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule,HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

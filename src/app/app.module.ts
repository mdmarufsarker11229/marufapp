import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { UserService } from './user.service';




@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    CategoryComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule
  

  
  
  ],
  exports:[
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';






const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
{
  path:'home',component:HomeComponent
},
{
  path:'about/:id',component:AboutComponent
},
{
  path:'user',component:UserComponent
},

{
  path:'category/:id',component:CategoryComponent
}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

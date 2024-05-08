import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts:any
  constructor(private _userservice:UserService,private _router:Router){

  }

  ngOnInit(): void {
      this.getpost();
  }
  getpost(){
    this._userservice.getpost().subscribe((data:any)=>{
      this.posts=data;
    })
  }
  detailpost(id:any){
    this._router.navigate(['/about',id])
  }

}

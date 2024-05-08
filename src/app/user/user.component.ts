import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

users:any;
  constructor(private _router:Router,private _activeroute:ActivatedRoute,private _userservice:UserService){}


  ngOnInit(): void {
     this.getuser();
      
  };

  getuser(){
    this._userservice.getUser().subscribe((data:any)=>{
      this.users=data;
    })
  }
  viewdetails(id:any){
    this._router.navigate(['/category',id])
  }
 



}

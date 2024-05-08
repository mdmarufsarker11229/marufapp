import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  viewpost:any
  

  constructor(private _canActive:ActivatedRoute,private _userservice:UserService,private _location:Location){

  }

  ngOnInit(): void {
      this._userservice.getpostbyid(this._canActive.snapshot.params['id']).subscribe((data:any)=>{
        this.viewpost=data;
      })
  }

  goback():void{
    this._location.back();
  }
}

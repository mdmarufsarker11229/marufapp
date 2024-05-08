import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  viewuser:any
  constructor(private _userservice:UserService,private _canAtive:ActivatedRoute,private _location:Location){
    
  }
ngOnInit(): void {
  this._userservice.viewdetailsbyid(this._canAtive.snapshot.params['id']).subscribe((data:any)=>{
    this.viewuser=data;
  })
}

goback(){
  this._location.back();
}








 
}

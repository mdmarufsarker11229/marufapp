import { Component } from '@angular/core';
// import { FormGroup ,FormBuilder,FormArray,FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
//   myform:FormGroup;
//   totalrow:any;

//   constructor(private _fb:FormBuilder){
//     this.myform=this._fb.group({
//       itemrows:this._fb.array([this.initItemRow()]),
//     });
//   }
constructor(){}



  
// initItemRow(){
//   return this._fb.group({
//     Name:[''],
//     RollNo:[''],
//     Class:[''],
//     MobileNo:[''],
//   });
// }

// addRow(){
//   const control=<FormArray>this.myform.controls['itemrows'];
//   control.push(this.initItemRow());
// }
// deleteRow(index:any){
//   const control=<FormArray>this.myform.controls['itemrows'];
//   if(control!=null){
//     this.totalrow=control.value.length;
//   }
//   if(this.totalrow>1){
//     control.removeAt(index);
//   }else {
//     alert("one record is medatory");
    
//   }
//   return false;
  
// }
  
}


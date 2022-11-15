import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //userDetails is the database we created it is created as object of object
  // therfore key is needed therefore account number is taken as key
  aim="Your Perfect Banking Partner" //string interpolation
  data="Enter Account number" 
  data1="Enter Password" //property binding
  acno:any
  psw:any
constructor(private router:Router,private ds:DataService){}
  ngOnInit():void{

  }
  login(){
   var acno=this.acno
   var psw=this.psw
const result=this.ds.login(acno,psw)
if(result){
  alert("login success")
  this.router.navigateByUrl('dashboard')
}

}
}
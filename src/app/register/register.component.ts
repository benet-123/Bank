import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname:any
acno:any
psw:any

  constructor(private ds:DataService,private router:Router){ }

  ngOnInit(): void {
  }
  register(){
    var username=this.uname
    var accountnumber=this.acno
    var password=this.psw
    const result= this.ds.register(accountnumber,username,password) //to store the true and false value 

if(result){  //if condition stores the true value
alert("Successfully Registered")
this.router.navigateByUrl('')
}
else{
alert("User already exist")
}

  }


}

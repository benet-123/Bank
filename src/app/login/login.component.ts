import { Component, OnInit } from '@angular/core';

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
userDetails:any={
1000:{acno:1000,username:"amal",password:123,balance:0},
1001:{acno:1000,username:"anu",password:456,balance:0},
1002:{acno:1000,username:"hari",password:789,balance:0},
1003:{acno:1000,username:"shiva",password:100,balance:0}

}
constructor(){}
  ngOnInit():void{

  }
//   login(){
//     alert("login clicked") //event binding
//    var acno=this.acno
//    var psw=this.psw
//    var userdetails=this.userDetails
//    if(acno in userdetails){
// if(psw==userdetails[acno]["password"]){

// }
// else{
//   alert("incorrect password")
// }
//    }
//    else{
//     alert("user not exist")
//    }
//   }
//   acnoChange(event:any){
// this.acno=event.target.value

//   }
//   pswChange(event:any){
//     this.psw=event.target.value
    
//   }
login(a:any,b:any){
  alert("login clicked") //event binding
 var acno=a.value  //its accessed inside a tag to get the value use a.value
 var psw=b.value
 var userdetails=this.userDetails
 if(acno in userdetails){
if(psw==userdetails[acno]["password"]){
alert("login success")
}
else{
alert("incorrect password")
}
 }
 else{
  alert("user not exist")
 }
}

}

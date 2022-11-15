import { Injectable } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser:any
  // to store the acno of login person
  currentacno:any
//reductant data
userDetails:any={
  1000:{acno:1000,username:"amal",password:123,balance:0,transaction:[]},
  1001:{acno:1001,username:"anu",password:456,balance:0,transaction:[]},
  1002:{acno:1002,username:"hari",password:789,balance:0,transaction:[]},
  1003:{acno:1003,username:"shiva",password:100,balance:0,transaction:[]}
  
  }
  
  constructor() { }
  //same variables in databse
register(acno:any,username:any,password:any){   //these arguemnts are the input 
var userdetails=this.userDetails
if(acno in userdetails){
  return false
}
else{
  userdetails[acno]={acno,username,password,balance:0,transaction:[]} 
   //to add new user
  return true
}
}

login(acno:any,psw:any){
  
  var userdetails=this.userDetails
  this.currentuser=userdetails[acno]["username"]

  if(acno in userdetails){
if(psw==userdetails[acno]["password"]){
  this.currentacno=acno
  return true
//redirection
}
else{
 alert("incorrect password")
 return false
}
  }
  else{
   alert("user not exist")
   return false
  }
 }

 deposit(acno:any,psw:any,amnt:any){
var userdetails=this.userDetails
// to convert amount type to integer
var amount=parseInt(amnt)
if(acno in userdetails){
  if(psw==userdetails[acno]["password"]){
    userdetails[acno]["balance"]+=amount
    // add deposit details in transaction array
    userdetails[acno]["transaction"].push({type:"CREDIT",amount})
    return userdetails[acno]["balance"]

  }
  else{
    alert("incorrect password")
    return false
  }
}
else{
  alert("account number not correct")
  return false
}
 }

 withdraw(amnt1:any,psw1:any,acno1:any){
  var userdetails=this.userDetails
// to convert amount type to integer
var amount=parseInt(amnt1)
if(acno1 in userdetails){
  if(psw1==userdetails[acno1]["password"]){
    if(amount<=userdetails[acno1]["balance"]){
    userdetails[acno1]["balance"]-=amount
    // add withdraw details in transaction array
    userdetails[acno1]["transaction"].push({type:"DEBIT",amount})

    return userdetails[acno1]["balance"]
}
else{
  alert("insufficinet balance")
  return false
}
  }
  else{
    alert("incorrect password")
    return false
  }
}
else{
  alert("account number not correct")
  return false
}

 }

 getTransaction(acno:any){
   return this.userDetails[acno]['transaction']
 }

}


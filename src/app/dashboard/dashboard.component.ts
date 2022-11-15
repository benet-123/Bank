import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any


  amnt:any
  acno:any
  psw:any

  amnt1:any
  acno1:any
  psw1:any
  constructor( private ds:DataService) {
    this.user=this.ds.currentuser
    

   }

  ngOnInit(): void {
  }
 deposit(){
  var acno=this.acno
  var psw=this.psw
  var amnt=this.amnt
  alert("deposit worked")
  const result=this.ds.deposit(acno,psw,amnt)
  if(result){
    alert(`${amnt} is credited in your account and the available balance is${result}`)
  }
 }
 withdraw(){
  var amnt1=this.amnt1
  var psw1=this.psw1
  var acno1=this.acno1
  alert("withdraw worked")
  const result=this.ds.withdraw(amnt1,psw1,acno1)
  if(result){
    alert(`${amnt1} is debited fro your account reamining balance is ${result}`)
  }
 }
}

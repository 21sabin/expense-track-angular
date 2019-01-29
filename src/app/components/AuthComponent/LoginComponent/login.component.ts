import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router , private userService:UserService) { }

  user={ email:'' , password:''}
  authFlag:boolean=false;
  authMsg:string=""
  ngOnInit() {
  }

  navigateToRegister(){
    this.router.navigateByUrl('registration')
  }

  onLogin( form ){
    this.user.email = form.value.email;
    this.user.password = form.value.password ; 
    this.userService.login( this.user ).subscribe(response=>{
      console.log( response, "--")
      if( response.succes ){
        localStorage.setItem('user', JSON.stringify(response ));
        this.router.navigateByUrl('dashboard/sales-entry') 
      }else{
        this.authFlag = false;
        this.authMsg = "Authentication failed ."
      }     
    },error=>{
      console.log(error)
    })
  }
}

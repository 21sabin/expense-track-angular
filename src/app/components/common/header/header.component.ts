import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }
  user:{}

  ngOnInit() {
    this.user = JSON.parse( localStorage.getItem('user'));
    console.log(this.user,"header component")
  }

  logout(){
    this.router.navigateByUrl('/login')
  }

}

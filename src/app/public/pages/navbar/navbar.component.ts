import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { path: '/home', title: 'Home'},
    { path: '/about', title: 'About'},
    { path: '/login', title: 'Login'},
    { path: '/sign-in', title: 'Sing In'},
    // { path: '/character', title: 'Character'},

  ]

}

import { Component } from '@angular/core';
import {AutheticationService} from "./overview/services/authetication.service";
import {Router} from "@angular/router";
import {ProfilesImgService} from "./overview/services/profiles-img.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-dermApp';
  user$ = this.userService.currentUserProfile$;

  constructor(private authService: AutheticationService,
              private router: Router,
              private userService: ProfilesImgService
  ) {}
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

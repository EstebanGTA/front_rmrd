import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogged = true;
  isAdmin = true;
  nombres_usuario = '';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged() ? true : this.isLogged = false;
    this.isAdmin = this.tokenService.isAdmin() ?? false;
    this.nombres_usuario = this.tokenService.getInfoUser() ?? ''
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/'])
  }

}

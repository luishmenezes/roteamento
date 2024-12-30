import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-protegida',
  imports: [],
  templateUrl: './pagina-protegida.component.html',
  styleUrl: './pagina-protegida.component.css'
})
export class PaginaProtegidaComponent {

  constructor( private auth: AuthService,
    private router : Router
  ){}

  logout(){
    this.auth.logout();
    this.router.navigate(["primeira-pagina"])
  }
}

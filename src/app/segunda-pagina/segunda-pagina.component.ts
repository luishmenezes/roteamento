import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  imports: [],
  templateUrl: './segunda-pagina.component.html',
  styleUrl: './segunda-pagina.component.css'
})
export class SegundaPaginaComponent {
  constructor(
    private router: Router
  ){}

  moverParaPrimeiraPagina(){
    this.router.navigate(["primeira-pagina"])
  }
}

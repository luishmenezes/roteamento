import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegundaPaginaComponent } from "./segunda-pagina/segunda-pagina.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roteamento';
}

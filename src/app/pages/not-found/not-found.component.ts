import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a routerLink="/">Volver a la página de inicio</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      padding: 50px;
    }
    h2 {
      color: #005a87;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #005a87;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
  `]
})
export class NotFoundComponent {}
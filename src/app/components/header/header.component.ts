import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a></li>
          <li><a routerLink="/quienes-somos" routerLinkActive="active">Quiénes Somos</a></li>
          <li><a routerLink="/ubicacion" routerLinkActive="active">Ubicación</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #005a87;
      padding: 10px 0;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }
    nav ul li {
      margin: 0 15px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    .active {
      border-bottom: 2px solid white;
    }
  `]
})
export class HeaderComponent {}
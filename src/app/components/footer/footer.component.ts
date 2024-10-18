import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2024 Servicio Médico de la Asamblea Nacional de Venezuela. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #005a87;
      color: white;
      text-align: center;
      padding: 10px 0;
      position: relative;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class FooterComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Bienvenidos al Servicio Médico de la Asamblea Nacional de Venezuela</h1>
    <div class="photo-gallery">
      <!-- Aquí puedes agregar las fotos del servicio médico -->
      <img src="assets/images/foto1.jpg" alt="Instalaciones del Servicio Médico">
      <img src="assets/images/foto2.jpg" alt="Personal médico">
      <img src="assets/images/foto3.jpg" alt="Equipamiento médico">
    </div>
  `,
  styles: [`
    h1 {
      color: #005a87;
      text-align: center;
    }
    .photo-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .photo-gallery img {
      width: 30%;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class HomeComponent {}
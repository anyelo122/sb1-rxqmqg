import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  template: `
    <h2>Dónde Estamos Ubicados</h2>
    <p>El Servicio Médico de la Asamblea Nacional de Venezuela se encuentra en:</p>
    <address>
      Sede La Francia<br>
      Caracas, Venezuela
    </address>
    <div class="map">
      <!-- Aquí puedes insertar un mapa de Google Maps o una imagen del mapa -->
      <img src="assets/images/mapa.jpg" alt="Mapa de ubicación">
    </div>
    <h3>Horario de Atención</h3>
    <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
    <p>Sábados: 9:00 AM - 1:00 PM</p>
    <p>Domingos y Feriados: Cerrado</p>
  `,
  styles: [`
    h2, h3 {
      color: #005a87;
    }
    address {
      font-style: normal;
      margin-bottom: 20px;
    }
    .map {
      margin-top: 20px;
      text-align: center;
    }
    .map img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class UbicacionComponent {}
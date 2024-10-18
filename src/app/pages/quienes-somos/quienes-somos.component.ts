import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  template: `
    <h2>Quiénes Somos</h2>
    <p>El Servicio Médico de la Asamblea Nacional de Venezuela es una unidad dedicada a proporcionar atención médica de calidad a los miembros de la Asamblea Nacional y sus familias. Nuestro equipo está compuesto por profesionales altamente calificados comprometidos con el bienestar de nuestra comunidad legislativa.</p>
    <h3>Nuestra Misión</h3>
    <p>Brindar servicios de salud integrales y de excelencia, garantizando la atención oportuna y eficiente a nuestros beneficiarios.</p>
    <h3>Nuestra Visión</h3>
    <p>Ser reconocidos como un servicio médico de referencia en el ámbito institucional, destacando por nuestra calidad humana y profesional.</p>
  `,
  styles: [`
    h2, h3 {
      color: #005a87;
    }
    p {
      line-height: 1.6;
      margin-bottom: 20px;
    }
  `]
})
export class QuienesSomosComponent {}
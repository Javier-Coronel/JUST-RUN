import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  eventos: Object[];

  constructor() {
    this.eventos = [
      {
        fecha: '08/10/2023',
        personas: '39/100',
        urlImg: '../../../assets/images/GorbeiaSuzien.jpg', 
        titulo: 'Gorbeia Suzien',
        subtitulo1: 'Pais Vasco · Bilbao',
        subtitulo2: '25KM · PENDIENTE',
      },
      {
        fecha: '19/12/2022',
        personas: '78/100',
        urlImg: '../../../assets/images/5kRunAndWalk.png', 
        titulo: '5K Run & Walk',
        subtitulo1: 'Cataluña · Barcelona',
        subtitulo2: '37KM · PENDIENTE',
      },
      {
        fecha: '24/04/2023',
        personas: '42/100',
        urlImg: '../../../assets/images/trailsInMotion.jpg', 
        titulo: 'Trails in Motion 6',
        subtitulo1: 'Andalucia · Sevilla',
        subtitulo2: '42KM · PENDIENTE',
      },
      {
        fecha: '13/01/2023',
        personas: '38/40',
        urlImg: '../../../assets/images/pequeTrail.webp', 
        titulo: 'Peque Trail Bosques',
        subtitulo1: 'Jaén · Cazorla',
        subtitulo2: '4KM · PENDIENTE',
      },
      {
        fecha: '08/10/2023',
        personas: '27/70',
        urlImg: '../../../assets/images/miniTrail.webp', 
        titulo: 'Mini Trail Bosques',
        subtitulo1: 'Jaén · Cazorla',
        subtitulo2: '12KM · PENDIENTE',
      },
      {
        fecha: '23/03/2023',
        personas: '67/100',
        urlImg: '../../../assets/images/huluLanga.jpg', 
        titulo: 'Hulu Langat Marathon',
        subtitulo1: 'Galicia · A Coruña',
        subtitulo2: '62KM · PENDIENTE',
      },
      {
        fecha: '29/07/2022',
        personas: '94/100',
        urlImg: '../../../assets/images/21Kfinisher.jpg', 
        titulo: '21K - Finisher',
        subtitulo1: 'Madrid · Madrid',
        subtitulo2: '21KM · PENDIENTE',
      },
      {
        fecha: '18/03/2023',
        personas: '88/100',
        urlImg: '../../../assets/images/42KRun.jpg', 
        titulo: 'Marathon 42K Run',
        subtitulo1: 'Madrid · Madrid',
        subtitulo2: '42KM · PENDIENTE',
      },
    ];
  }
}

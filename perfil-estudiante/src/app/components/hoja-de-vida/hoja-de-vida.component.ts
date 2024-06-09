import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-hoja-de-vida',
  standalone: true,
  imports: [],
  templateUrl: './hoja-de-vida.component.html',
  styleUrl: './hoja-de-vida.component.scss'
})
export class HojaDeVidaComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite()
  }
  descargarPDF() {
    const link = document.createElement('a');
    link.href = 'assets/CV-Miguel.pdf';
    link.download = 'archivo.pdf'; 
    link.click();
  }
}

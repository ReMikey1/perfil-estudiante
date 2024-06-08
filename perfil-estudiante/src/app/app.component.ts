import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  title = 'perfil-estudiante';
  ngOnInit(): void {
    initFlowbite();
  }
}

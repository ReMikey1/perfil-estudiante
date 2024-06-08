import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
    initFlowbite()
}
perfil() {
  this.router.navigate(['/perfil']);

}
hojadevida() {
  this.router.navigate(['/hojadevida']);

}
}

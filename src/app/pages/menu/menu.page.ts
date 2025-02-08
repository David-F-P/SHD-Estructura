
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage {
  constructor(private router: Router) {}

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irAInventario() {
    this.router.navigate(['/inventario']);
  }
}
;
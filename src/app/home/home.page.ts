import { Component } from '@angular/core';
import { InventarioService } from '../services/inventario.service';
import { Prenda } from '../models/prenda';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nuevaPrenda: Prenda = { nombre: '', disenador: '', anioColeccion: new Date().getFullYear(), precio: 0 };

  constructor(private inventarioService: InventarioService, private navCtrl: NavController) {}

  agregarPrenda() {
    if (this.nuevaPrenda.nombre && this.nuevaPrenda.disenador && this.nuevaPrenda.anioColeccion > 0 && this.nuevaPrenda.precio > 0) {
      this.inventarioService.agregarPrenda(this.nuevaPrenda);
      this.nuevaPrenda = { nombre: '', disenador: '', anioColeccion: new Date().getFullYear(), precio: 0 };

      // Redirigir a la pantalla de inventario después de agregar
      this.navCtrl.navigateForward('/inventario');
    } else {
      alert('Todos los campos son obligatorios y deben tener valores válidos.');
    }
  }
}
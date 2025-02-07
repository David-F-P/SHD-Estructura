import { Component } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';
import { Prenda } from 'src/app/models/prenda';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nuevaPrenda: Prenda = {
    nombre: '',
    disenador: '',
    anioColeccion: new Date().getFullYear(),
    precio: 0
  };

  constructor(private inventarioService: InventarioService, private navCtrl: NavController) {}

  registrarPrenda() {
    if (this.nuevaPrenda.nombre.trim() && this.nuevaPrenda.disenador.trim() && this.nuevaPrenda.anioColeccion > 0 && this.nuevaPrenda.precio > 0) {
      this.inventarioService.agregarPrenda(this.nuevaPrenda);
      this.nuevaPrenda = { nombre: '', disenador: '', anioColeccion: new Date().getFullYear(), precio: 0 };

      this.navCtrl.navigateBack('/inventario'); // Redirige al Inventario
    } else {
      alert('Todos los campos son obligatorios y deben tener valores válidos.');
    }
  }
}
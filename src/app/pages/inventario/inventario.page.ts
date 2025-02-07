import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InventarioService } from 'src/app/services/inventario.service';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  standalone: false,
})
export class InventarioPage {
  inventario: Prenda[] = [];
  valorTotal: number = 0;
  disenador: string = '';

  constructor(private inventarioService: InventarioService, private navCtrl: NavController) {}

  ngOnInit() {
    this.inventario = this.inventarioService.getInventario();
    this.valorTotal = this.inventarioService.calcularValorTotal();
  }

  ordenar() {
    this.inventario = this.inventarioService.ordenarPorAnio();
  }

  buscar() {
    this.inventario = this.inventarioService.buscarPorDisenador(this.disenador);
  }

  /**
   * Redirige a la página de Registro
   */
  irARegistro() {
    this.navCtrl.navigateForward('/registro');
  }
}
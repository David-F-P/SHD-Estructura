import { Component } from '@angular/core';
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

  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.inventario = this.inventarioService.getInventario();
    this.valorTotal = this.inventarioService.calcularValorTotal();
  }

  ordenar() {
    this.inventario = this.inventarioService.ordenarPorAnio();
  }

  buscar(disenador: string) {
    this.inventario = this.inventarioService.buscarPorDisenador(disenador);
  }
}

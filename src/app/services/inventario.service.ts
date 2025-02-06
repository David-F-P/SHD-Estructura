import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private inventario: Prenda[] = [
    { nombre: 'Vestido Rojo', disenador: 'Chanel', anioColeccion: 2022, precio: 1200 },
    { nombre: 'Blazer Azul', disenador: 'Gucci', anioColeccion: 2021, precio: 1500 },
    { nombre: 'Pantalón Negro', disenador: 'Versace', anioColeccion: 2023, precio: 900 },
    { nombre: 'Falda Rosa', disenador: 'Dior', anioColeccion: 2020, precio: 800 },
    { nombre: 'Camisa Blanca', disenador: 'Armani', anioColeccion: 2022, precio: 700 },
  ];

  getInventario(): Prenda[] {
    return this.inventario;
  }

  agregarPrenda(prenda: Prenda) {
    this.inventario.push(prenda);
  }

  ordenarPorAnio(): Prenda[] {
    return this.inventario.sort((a, b) => a.anioColeccion - b.anioColeccion);
  }

  buscarPorDisenador(disenador: string): Prenda[] {
    return this.inventario.filter(prenda => prenda.disenador.toLowerCase() === disenador.toLowerCase());
  }

  calcularValorTotal(): number {
    return this.inventario.reduce((total, prenda) => total + prenda.precio, 0);
  }
}

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

  constructor() {}

  /**
   * Devuelve una copia del inventario actual.
   */
  getInventario(): Prenda[] {
    return [...this.inventario]; // Retorna una copia para evitar modificaciones directas
  }

  /**
   * Agrega una nueva prenda al inventario.
   * @param prenda Objeto Prenda a agregar
   */
  agregarPrenda(prenda: Prenda) {
    this.inventario.push(prenda);
    console.log('Nueva prenda agregada:', prenda);
  }

  /**
   * Ordena el inventario por año de colección y devuelve una copia.
   */
  ordenarPorAnio(): Prenda[] {
    return [...this.inventario].sort((a, b) => a.anioColeccion - b.anioColeccion);
  }

  /**
   * Busca prendas por diseñador (coincidencia parcial, no exacta).
   * @param disenador Nombre del diseñador a buscar
   */
  buscarPorDisenador(disenador: string): Prenda[] {
    return this.inventario.filter(prenda =>
      prenda.disenador.toLowerCase().includes(disenador.toLowerCase())
    );
  }

  /**
   * Calcula el valor total del inventario sumando los precios de todas las prendas.
   */
  calcularValorTotal(): number {
    return this.inventario.reduce((total, prenda) => total + prenda.precio, 0);
  }

  /**
   * Elimina una prenda del inventario por su nombre.
   * @param nombre Nombre de la prenda a eliminar
   */
  eliminarPrenda(nombre: string) {
    const index = this.inventario.findIndex(prenda => prenda.nombre.toLowerCase() === nombre.toLowerCase());
    if (index !== -1) {
      console.log(`Prenda eliminada: ${this.inventario[index].nombre}`);
      this.inventario.splice(index, 1);
    } else {
      console.warn(`Prenda con nombre '${nombre}' no encontrada.`);
    }
  }

  /**
   * Vacía completamente el inventario.
   */
  limpiarInventario() {
    this.inventario = [];
    console.log('Inventario vaciado.');
  }
}
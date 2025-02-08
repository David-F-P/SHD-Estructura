import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { RegistroPageModule } from './pages/registro/registro.module';


const routes: Route[] = [
  { path: 'inventario', loadChildren: () => import('./pages/inventario/inventario.module').then(m => m.InventarioPageModule) },
  // Agrega la ruta de la página de registro
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    
    RegistroPageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
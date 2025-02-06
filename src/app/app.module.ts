import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Route[] = [
  { path: 'inventario', loadChildren: () => import('./pages/inventario/inventario.module').then(m => m.InventarioPageModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

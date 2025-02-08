import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === '123456') {
      this.navCtrl.navigateForward('/home'); // Redirige a Home después del login
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
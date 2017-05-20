import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bandera: boolean;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
    this.nativeStorage.setItem('data', { name: 'Victor Manuel', lastName: 'Ceballos Cruz' })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );

    this.nativeStorage.getItem('data')
      .then(
      data => {
        this.bandera = true;
      },
      error => {
        this.bandera = false;
      }
      );
  }

}

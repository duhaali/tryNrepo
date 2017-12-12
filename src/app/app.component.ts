import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import {MapPage} from '../pages/map/map';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

rootPage:any = MapPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              // public loadingCtrl: LoadingController,
              public menu: MenuController ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  map(){
    this.menu.close();
    this.nav.push(MapPage);
  }
}


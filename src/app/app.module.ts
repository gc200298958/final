import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TdeePage } from '../pages/tdee/tdee';



import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyCQf0Z1UmSrMOQowu7JXzc_JagbnRo4w8E",
    authDomain: "final-7ab38.firebaseapp.com",
    databaseURL: "https://final-7ab38.firebaseio.com",
    storageBucket: "final-7ab38.appspot.com",
    messagingSenderId: "113410975499"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TdeePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TdeePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

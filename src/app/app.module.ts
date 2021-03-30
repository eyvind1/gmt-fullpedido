  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { environment } from '../environments/environment'; //API key is imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){         
    //firebase.initializeApp(environment.firebase);
    firebase.initializeApp(environment.firebase);
  }
}

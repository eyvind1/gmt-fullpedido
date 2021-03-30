import firebase from 'firebase/app';
import 'firebase/firestore';
//import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //var db = firebase.firestore()
  constructor(
    //private db: firebase;
  ) {
    //firebase.initializeApp(environment.firebase);
    firebase.initializeApp(environment.firebase);
   }

   consultarPrueba(){
    db.collection("Gmtc_cotizacion").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }
}

var db = firebase.firestore();
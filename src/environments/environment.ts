// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // Initialize Cloud Firestore through Firebase
  firebase: {
    apiKey: "AIzaSyCfv7io1liNeZwLuTwMtph38_jDkut1H0w",
    authDomain: "gmtc-74128.firebaseapp.com",
    databaseURL: "https://gmtc-74128.firebaseio.com",
    projectId: "gmtc-74128",
    storageBucket: "gmtc-74128.appspot.com",
    messagingSenderId: "545299813599",
    appId: "1:545299813599:web:9d1b1b59b4439ab07d456a",
    measurementId: "G-MG7J2XFCQM"
  },

  //var db = firebase.firestore();
};
//var db = firebase.firestore();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

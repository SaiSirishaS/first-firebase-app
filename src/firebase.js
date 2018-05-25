// import React from 'react';

import * as fb from "firebase";

const config = {
  apiKey: "AIzaSyCYIUGi9WaM6lxTEmKVZGi4N58u2nd2eCM",
  authDomain: "test-sss-6eb20.firebaseapp.com",
  databaseURL: "https://test-sss-6eb20.firebaseio.com",
  projectId: "test-sss-6eb20",
  storageBucket: "test-sss-6eb20.appspot.com",
  messagingSenderId: "94879234250"
};

fb.initializeApp(config);

// fb
//   .database()
//   .ref()
//   .set({
//     name: "sss",
//     age: 100,
//     location: {
//       city: "Hyd",
//       country: "USA"
//     }
//   });

// // fb
// //   .database()
// //   .ref("age")
// //   .set(20);

// fb
//   .database()
//   .ref("location/city")
//   .set("Chennai");
export default fb;

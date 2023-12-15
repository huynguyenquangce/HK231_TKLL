import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCG9h956JQ8nm2O7PCnCVwOOZZR-BTvo-M",
    authDomain: "fir-c20cd.firebaseapp.com",
    databaseURL: "https://fir-c20cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-c20cd",
    storageBucket: "fir-c20cd.appspot.com",
    messagingSenderId: "700025485100",
    appId: "1:700025485100:web:44372832338203bcbdde89"
};

initializeApp(firebaseConfig);


export const db = getFirestore();
export const realtimeDb = getDatabase();





//  cách 2




// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import * as admin from "firebase-admin";

// const firebaseConfig = {
//     apiKey: "AIzaSyCG9h956JQ8nm2O7PCnCVwOOZZR-BTvo-M",
//     authDomain: "fir-c20cd.firebaseapp.com",
//     databaseURL: "https://fir-c20cd-default-rtdb.asia-southeast1.firebasedatabase.app/",
//     projectId: "fir-c20cd",
//     storageBucket: "fir-c20cd.appspot.com",
//     messagingSenderId: "700025485100",
//     appId: "1:700025485100:web:44372832338203bcbdde89"
// };

// initializeApp(firebaseConfig);

// // Initialize Firebase Admin SDK
// const serviceAccount = require("../../fir-c20cd-firebase-adminsdk-xnf9k-ca674167b6.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://fir-c20cd-default-rtdb.asia-southeast1.firebasedatabase.app/"
// });

// export const db = getFirestore();
// export const realtimeDb = getDatabase();
// export const adminSdk = admin;
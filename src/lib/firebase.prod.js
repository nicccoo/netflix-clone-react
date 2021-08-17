import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5IrHFtEcSIlSHy5I1hHVz09Vehnoez04",
  authDomain: "netflix-clone-d02ff.firebaseapp.com",
  projectId: "netflix-clone-d02ff",
  storageBucket: "netflix-clone-d02ff.appspot.com",
  messagingSenderId: "1063988328516",
  appId: "1:1063988328516:web:c8a9b7001edcc2e27b6411",
  measurementId: "G-Q9VZNLR72H",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

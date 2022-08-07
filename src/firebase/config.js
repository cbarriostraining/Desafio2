import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaqI2bacI7GXD5BgAi_A-qxlko8BQ4YqY",
  authDomain: "perfumesrosalia.firebaseapp.com",
  projectId: "perfumesrosalia",
  storageBucket: "perfumesrosalia.appspot.com",
  messagingSenderId: "105635333133",
  appId: "1:105635333133:web:c608cf3cae6df4ec540144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnections =()=>app
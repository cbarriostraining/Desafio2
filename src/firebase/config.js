import { initializeApp } from "firebase/app";
import { CONSTANTS } from "../common/constants";
const  {FIRE_BASE_CONFIG} = CONSTANTS;
const firebaseConfig = FIRE_BASE_CONFIG;

const app = initializeApp(firebaseConfig);
export const firebaseConnections =()=>app
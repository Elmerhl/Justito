import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, increment } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6yM2EKZpLV_xlvRgNPZv4ADo8ENwfe4Q",
  authDomain: "justito-f0623.firebaseapp.com",
  projectId: "justito-f0623",
  storageBucket: "justito-f0623.appspot.com",
  messagingSenderId: "474284576080",
  appId: "1:474284576080:web:a3aafcd34f8db44b8ab055",
  measurementId: "G-L0E7D67F7P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function votarSugerenciaPositiva(id: string) {
  const ref = doc(db, "Sugerencias", id);
  await updateDoc(ref, {
    votosSi: increment(1)
  });
}

export async function votarSugerenciaNegativa(id: string) {
  const ref = doc(db, "Sugerencias", id);
  await updateDoc(ref, {
    votosNo: increment(1)
  });
}

// Función genérica para mantener compatibilidad
export async function votarSugerencia(id: string) {
  await votarSugerenciaPositiva(id);
}

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export function useSugerencias() {
  const [sugerencias, setSugerencias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "Sugerencias"), orderBy("nombre", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.data().id,
        name: doc.data().nombre,
        description: doc.data().descripcion,
        image: doc.data().image,
        votosSi: doc.data().votosSi,
        votosNo: doc.data().votosNo,
      }));
      // Ordenar primero por votosSi (mayor a menor), luego por diferencia votosSi-votosNo
      data.sort((a, b) => {
        if (b.votosSi !== a.votosSi) {
          return b.votosSi - a.votosSi;
        }
        return (b.votosSi - b.votosNo) - (a.votosSi - a.votosNo);
      });
      setSugerencias(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { sugerencias, loading };
}
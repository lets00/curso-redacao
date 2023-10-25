
import { useEffect, useState } from "react";
import { db } from "./config";

const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDoc = await db.collection("Estudante").doc(userId).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          setUserData(null); 
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do Firestore:", error);
        setUserData(null);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  return userData;
};

export default useUserData;


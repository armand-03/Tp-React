import { createContext, useState } from "react";

// 1. Création du contexte global
export const UserContext = createContext();

export default function UserProvider({ children }) {
  // 2. état global : pseudo joueur
  const [username, setUsername] = useState(null);

  // 3. état global : meilleur score
  const [bestScore, setBestScore] = useState(0);

  return (
    // 4. on partage les données à toute l'app
    <UserContext.Provider
      value={{
        username,
        setUsername,
        bestScore,
        setBestScore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
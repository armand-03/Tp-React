import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const [name, setName] = useState("");
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name) return;

    setUsername(name);
    navigate("/quiz");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>PolyQuiz</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Pseudo"
      />

      <br /><br />

      <button onClick={handleStart}>
        Commencer
      </button>
    </div>
  );
}
import "./App.css";
import ButtonComp from "./components/ButtonComp";
import { useContext } from "react";
import { CountContext } from "./context/CountContext";
import { UserContext } from "./context/UserContext";
import HeaderComp from "./components/HeaderComp";

function App() {
  const { count, setCount } = useContext(CountContext);
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleLogIn = () => {
    if (!user) {
      setUser("User Name");
    } else {
      setUser(null);
    }
  };

  return (
    <main
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        backgroundColor: user ? "#4caf50" : "#f44336", // Green if logged in, Red if logged out
        padding: ".5em",
        color: "white", // Ensure all text is white
      }}
    >
      <HeaderComp />
      <ButtonComp text="Add" onClick={handleClick} />
      <div>Your result is: {count}</div>
      <ButtonComp
        text={user ? "Log Out" : "Log In"}
        onClick={handleLogIn}
      />
      {user && <div className="alert">You are now logged in !!!</div>}
    </main>
  );
}

export default App;

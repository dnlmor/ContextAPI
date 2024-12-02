import { useContext } from "react";
import ButtonComp from "./components/ButtonComp";
import { CountContext } from "./context/CountContext";
import { UserContext } from "./context/UserContext";
import HeaderComp from "./components/HeaderComp";
import "./App.css";

function App() {
  const { count, setCount } = useContext(CountContext);
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleLogIn = () => {
    setUser(user ? null : "User Name");
  };

  const getBackgroundColor = () => {
    if (count < 5) return "#1a1a1a";
    if (count < 10) return "#3b3b3b";
    return "#024d1021";
  };

  return (
    <main
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        backgroundColor: getBackgroundColor(),
        padding: "1em",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease",
      }}
    >
      <HeaderComp />
      <ButtonComp text="Add" onClick={handleClick} />
      <div>Your result is: {count}</div>
      <ButtonComp text={user ? "Log Out" : "Log In"} onClick={handleLogIn} />
      {user && <div className="alert">You are now logged in !!!</div>}
    </main>
  );
}

export default App;

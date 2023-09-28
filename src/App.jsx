import reactLogo from "./assets/react.svg";
import Member from "./components/Member";

function App() {
  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      <Member member={{ firstName: "Rasmus", lastName: "Cederdorff", mail: "race@eaaa.dk" }} />
      <Member member={{ firstName: "Rasmus", lastName: "Cederdorff", mail: "race@eaaa.dk" }} />
      <Member member={{ firstName: "Rasmus", lastName: "Cederdorff", mail: "race@eaaa.dk" }} />
    </>
  );
}

export default App;

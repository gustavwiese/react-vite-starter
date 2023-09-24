import reactLogo from "./assets/react.svg";
import Person from "./components/Person";

function App() {
    return (
        <>
            <header>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>RACE Your React 🎉</h1>
            </header>
            <section className="grid">
                <Person name="Morten" mail="moab@eaaa.dk" />
                <Person name="Maria" mail="mlbe@eaaa.dk" />
                <Person name="Martin" mail="mnor@eaaa.dk" />
            </section>
        </>
    );
}

export default App;

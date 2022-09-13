import Counter from "./features/counter/Counter.js";
import "./index.css";
function App() {
  return (
    <main className="App">
      <h1>state managment with Modern redux </h1>
      <p>
        TakeAway : State managment with redux toolkit is easier why ?<br />{" "}
        because we don't have to worry about mutating the state immer js library
        will do that automatically for us behind the scene such a cool
        abstraction.
      </p>
      <Counter />
    </main>
  );
}

export default App;

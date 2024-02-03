import Ninjas from "./Ninjas";
import AddNinja from "./Addninja";
function App() {
  const state = {
    ninjas: [
      { name: 'Ryu', age: 10, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 22, belt: 'black', id: 2 },
      { name: 'Mario', age: 22, belt: 'black', id: 3 }
    ]
  }
  return (
    <div className="App">
      <h2>Hello</h2>
      <Ninjas ninjas={state.ninjas} />
      <AddNinja />
    </div>
  )
}

export default App;

import './App.css';
import ItemCard from './components/Card/Card'
import Inventory from './UIE-InterviewProject.json'

function App() {
  return (
    <div className="App">
      {Inventory.map((item, index) =>
      <ItemCard heading={item.Heading} subheading={item.Subheading} price={item.Price} bridge={item.showBridge}/>
      )}
    </div>
  );
}

export default App;

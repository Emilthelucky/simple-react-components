import './App.css';
import Accordion from './components/accordion';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Adding React Component */}
      <Accordion></Accordion>
      <StarRating stars={10}></StarRating>
    </div>
  );
}

export default App;

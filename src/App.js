import './App.css';
import { CityList } from './components/cityList';
import { CITYS } from './components/citys';

function App() {
  return (
    <div>
      <CityList citys={CITYS}/>
    </div>
  );
}

export default App;

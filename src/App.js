import Slider from './component/Slider/Slider';
import './App.css';
import ImageOver from './component/imageOver/ImageOver';
import Button from './component/button/button/Button';
import Cyber from './component/cyberpunk/Cyber';
// import Content from './component/Content';


function App() {
  return (
    <div className="App">
      <div>
        <Slider/>
        <ImageOver/>
        <Button/>
        <Cyber/>
      </div>
    </div>
  );
}

export default App;

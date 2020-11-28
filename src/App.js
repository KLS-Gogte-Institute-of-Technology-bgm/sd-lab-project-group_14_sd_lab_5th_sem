import './App.css';
import ButtonAppBar from './Components/Navigation/Navigation';
import FullWidthTabs from './Components/Tabs/Tabs';
import ImagePreview from './Components/ImagePreview/ImagePreview';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="App-header">
        <ImagePreview/>
        <br/>
        <FullWidthTabs/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import ButtonAppBar from './Components/Navigation/Navigation';
import FullWidthTabs from './Components/Tabs/Tabs';
import Box from '@material-ui/core/Box';
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Box>
        <FullWidthTabs/>
        <FullWidthTabs/>
      </Box>
    </div>
  );
}

export default App;

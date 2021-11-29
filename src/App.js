import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/Header';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <br/>
      <Typography variant="h4" component="h5">Take your Note</Typography>
    </div>
  );
}

export default App;

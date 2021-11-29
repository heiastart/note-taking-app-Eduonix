import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/Header';
import { TextField, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <br/>
      <Typography variant="h4" component="h5">Take your Note</Typography>
      <br/>
      <TextField
        id="outlined-full-width"
        label="Note"
        style={{ margin: 8, width: 520 }}
        placeholder="Enter Note Title"
        margin="normal"
        //value={note}
        //onChange={(e) => setNote(e.target.value)}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </div>
  );
}

export default App;

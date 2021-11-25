import {useState} from 'react';
import { Button } from '@mui/material';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <p>Github Search App</p>
      <Button variant="contained" sx={{backgroundColor: 'red'}} onClick={async () => {
        const serverResponse = await getData('https://api.github.com/search/users?q=aar9nk')
        setUsername(serverResponse.items[0].login);
      }}>Get Facts</Button>
      <p>{username}</p>
    </div>
  );
}

export default App;

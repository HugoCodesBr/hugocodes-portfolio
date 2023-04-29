import './sass/normalize.scss';
import './sass/reset.scss';
import './sass/main.scss';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
    window.localStorage.setItem('dark', !darkTheme);
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('dark');
    const valueTheme = JSON.parse(storageTheme);
    setDarkTheme(valueTheme);
  }, []);

  return (
    <>
      <Header changeTheme={changeTheme} darkTheme={darkTheme} />
    </>
  );
}

export default App;

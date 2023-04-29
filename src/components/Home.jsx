import '../sass/components/dark.scss';
import { useEffect, useState } from 'react';
import MainBanner from './Banner/MainBanner';
import Header from './Header';

const Home = () => {
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
      <main className={darkTheme ? 'dark' : ''}>
        <MainBanner />
      </main>
    </>
  );
};

export default Home;

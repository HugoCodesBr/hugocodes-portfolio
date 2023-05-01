import '../sass/components/dark.scss';
import { useEffect, useState } from 'react';
import MainBanner from './Banner/MainBanner';
import Header from './Header';
import Techs from './Techs';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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
        <Techs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

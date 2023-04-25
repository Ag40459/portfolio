import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Navbar from '../../components/NavBar/navBar';
import './home.css'

function Home() {

  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <div>


    </div>

  )

}

export default Home

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './home.css'

function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>

      <h1>{theme}</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>

  )

}

export default Home

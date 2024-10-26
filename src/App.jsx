import './App.css'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './Contexts/theme'
import { useEffect, useState } from 'react'
import Team from './Components/Team'
function App() {
  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode('dark');
  }
  const lightTheme = () => {
    setThemeMode('light');
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <Router>
          <div className='flex flex-row dark:bg-black'>
            <Sidebar />
            <div className="flex flex-col flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App

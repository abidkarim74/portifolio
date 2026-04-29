import { Route, Routes } from 'react-router-dom'
import Layout from "./Layout"
import HomePage from './pages/Home'
import Experience from './pages/Experience'
import Teaching from './pages/Teaching'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/teaching' element={<Teaching />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />


      </Route>
    </Routes>
  )
}

export default App
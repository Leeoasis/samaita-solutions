import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Services from './routes/Services'
import Contact from './routes/Contact'
import About from './components/about';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;

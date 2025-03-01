import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import RootLayout from './shardeComponenents/Layout/Root-Layout/RootLayout'
function App() {
  return (
    <BrowserRouter>
        <Routes >
          <Route element = {<RootLayout />}>
            <Route path='/' element = {<Home />}/>
            <Route path='/about' element = {<About />}/>
            <Route path='/contact' element = {<Contact />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

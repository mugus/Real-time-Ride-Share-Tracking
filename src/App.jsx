import { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import Map from './components/Map';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
        <main className="flex-grow-1">
          
          <Map />
        
        </main>
      <Footer/>
    </div>
  )
}

export default App

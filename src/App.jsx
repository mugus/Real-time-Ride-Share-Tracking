import { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
        <main className="flex-grow-1">
          
          <h1>Map Content will be here</h1>
        
        </main>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import Cards from './components/Cards'
import Menu from './components/Menu'
import './assets/App.css';

function App() {
  return (
      <div className="App container d-flex justify-content-center align-items-center h-100">
          <div className="row justify-content-center align-items-end">
            <Menu />
            <Cards />
          </div>

    </div>
  )
}

export default App

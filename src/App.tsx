import Theme from 'Theme'
import './App.css'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Theme>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Theme>
      </div>
    </BrowserRouter>
  )
}

export default App

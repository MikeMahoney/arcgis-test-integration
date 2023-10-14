import Theme from 'Theme'
import './App.css'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </div>
      </Theme>
    </BrowserRouter>
  )
}

export default App

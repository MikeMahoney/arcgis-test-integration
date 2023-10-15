import Theme from 'Theme'
import './App.css'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { wildLifesStore } from 'store/wildLifeStore'

function App() {
  return (
    <BrowserRouter>
      <StoreProvider store={wildLifesStore}>
        <Theme>
          <div className='App'>
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
          </div>
        </Theme>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App

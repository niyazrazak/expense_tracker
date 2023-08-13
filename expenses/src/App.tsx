import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Expenses } from './pages/Expenses'
function App() {

  return (
    <div className="App">
      <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
        <BrowserRouter basename={import.meta.env.VITE_BASE}>
          <Routes>
            <Route path='/login' element={<h1>Login</h1>}></Route>
            <Route path='/' element={<Expenses/>}></Route>
          </Routes>
        </BrowserRouter>
      </FrappeProvider>
    </div>
  )
}

export default App

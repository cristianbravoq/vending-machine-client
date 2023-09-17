import './App.css'
import { Suspense, lazy } from 'react'
import RoutesWithNotFound from './RoutesWithNotFound'
import { BrowserRouter, Route } from 'react-router-dom'
import { StateSalesProvider } from '@contexts/index'
import { Admin } from '@pages/private'

const Start = lazy(() => import('@pages/Start'));

function App() {

  return (
    <>
      <Suspense fallback={<div className="w-screen h-screen fixed font-extrabold text-4xl justify-center items-center">Cargando...</div>}>
        <BrowserRouter>
          <StateSalesProvider>
            <RoutesWithNotFound>
              <Route path="/" element={<Start />} />
              <Route path='/admin' element={<Admin />} />
            </RoutesWithNotFound>
          </StateSalesProvider>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App

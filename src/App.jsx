import { Suspense } from 'react'
import './app.scss'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {
  
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

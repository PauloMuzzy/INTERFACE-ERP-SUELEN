import 'bootstrap/dist/css/bootstrap.min.css'
import RouterApp from './routes/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <RouterApp />
      <ToastContainer />
    </>
  )
}

export default App

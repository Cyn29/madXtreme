import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home'
import { Solutions } from './pages/solutions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/solutions',
    element: <Solutions />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}

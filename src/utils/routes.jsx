import App from '../routes/App'
import Home from '../routes/Home'
import Shop from '../routes/Shop'
import Cart from '../routes/Cart'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  }
];

export default routes;
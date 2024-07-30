import React from 'react'
import Body from './components/Body'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch/:videoId",
          element:<WatchPage/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App

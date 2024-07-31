import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

// Root component to include Header and an outlet for nested routes
const Root = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Use Root component as the top-level element
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          {
            path: '/',
            element: <MainContainer />
          },
          {
            path: '/watch/:videoId',
            element: <WatchPage />
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

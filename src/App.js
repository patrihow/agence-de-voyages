   import { createBrowserRouter, RouterProvider } from 'react-router-dom';
   import React from 'react';
   import Header from './components/Header';
import HomePage from './components/Home';

   const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
   ]);

   function App() {
       return <RouterProvider router={router} />;
   }

   export default App;
   

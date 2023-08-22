import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import About from './Pages/About.page';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Layout from './Pages/Lauout/Layout.jsx';
import PageNotFound from './Pages/PageNotFound.page.jsx';
import Home from './Pages/Home.page.jsx';
import PizzaDisc from './Pages/PizzaDisc.jsx';
import PizzaContextProvider from './Context/pizzaContext.jsx';

function App() {
  let id=useParams();
  let router = createBrowserRouter([
    {
      path: '', element: <Layout /> ,
      children: [
        {index:true, element:<PizzaContextProvider ><Home /></PizzaContextProvider> },
        { path: 'about', element: <About /> },
        { path: `pizzaInfo/:id`, element: <PizzaContextProvider ><PizzaDisc /></PizzaContextProvider> },
        { path: '*', element: <PageNotFound/> }
        
      ]
    }
    // ,{
    //   path:'admin',element:<AdminLayOut/>,
    // }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

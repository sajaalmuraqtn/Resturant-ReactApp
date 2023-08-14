import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Lauout/Layout';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AdminLayOut from './Components/Admin/AdminLayOut';

function App() {
  let router = createBrowserRouter([
    {
      path: '', element: <Layout /> ,
      children: [
        {index:true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <PageNotFound /> }
        
      ]
    },{
      path:'admin',element:<AdminLayOut/>,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

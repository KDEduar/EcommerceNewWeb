import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="flex contentMain">
              <div className="sidebarWrapper w-[13%]">
                <Sidebar />
              </div>
              <div className="px-5 py-4 contentRight w-[87%]">
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
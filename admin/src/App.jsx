import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { createContext, useState } from 'react';

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="flex contentMain">
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[13%]' : 'w-[0px] opacity-0'} transition-all`}>
                <Sidebar />
              </div>
              <div className={`px-5 py-4 contentRight ${isSidebarOpen === false ? 'w-[100%]' : 'w-[87%]'} transition-all`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      )
    }
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  )
}

export default App;
export { MyContext };
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/ProductListing';
import { ProductDetails } from './pages/ProductDetails';
import { createContext, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { ProductZoom } from './components/ProductZoom';
import { IoCloseSharp } from 'react-icons/io5';
import { ProductDetailsComponent } from './components/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/Verify';
import CartPage from './pages/Cart';
import ForgotPassword from './pages/ForgotPassword';

import toast, { Toaster } from 'react-hot-toast';
import Checkout from './pages/Checkout';

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);
  // const [maxWidth, setMaxWidth] = useState('lg'); ocultar la variable setMaxWidth
  // const [fullWidth, setFullWidth] = useState(true); ocultar la variable setFullWidth

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    } if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route path={"/productListing"} exact={true} element={<ProductListing />} />
            <Route path={"/product/:id"} exact={true} element={<ProductDetails />} />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className="relative flex items-center w-full productDetailsModalContent">
            <Button
              className='!w-[40px] !absolute top-[15px] right-[15px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !bg-[#f1f1f1]'
              onClick={handleCloseProductDetailsModal}>
              <IoCloseSharp className='text-[22px]' />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App;
export { MyContext };
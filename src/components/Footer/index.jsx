import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { IoMdStopwatch } from "react-icons/io";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button, Drawer } from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoChatboxOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import { useContext } from "react";
import { MyContext } from "../../App";
import CartPanel from "../CartPanel";

const Footer = () => {
    const context = useContext(MyContext);

    return (
        <>
            <footer className="py-6 bg-[#fafafa]">
                <div className="container">
                    <div className="flex items-center justify-center gap-2 py-8 pb-8">
                        <div className="flex flex-col items-center w-[20%] justify-center col group">
                            <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
                            <p className="text-[13px] text-[rgba(56,56,56,0.8)] font-[500]">For all Orders Over $100</p>
                        </div>
                        <div className="flex flex-col items-center w-[20%] justify-center col group">
                            <IoMdStopwatch className="text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
                            <p className="text-[13px] text-[rgba(56,56,56,0.8)] font-[500]">For an Exchange Product</p>
                        </div>
                        <div className="flex flex-col items-center w-[20%] justify-center col group">
                            <BsWallet2 className="text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                            <p className="text-[13px] text-[rgba(56,56,56,0.8)] font-[500]">Payment Cards Accepted</p>
                        </div>
                        <div className="flex flex-col items-center w-[20%] justify-center col group">
                            <LiaGiftSolid className="text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                            <p className="text-[13px] text-[rgba(56,56,56,0.8)] font-[500]">Our First Product Order</p>
                        </div>
                        <div className="flex flex-col items-center w-[20%] justify-center col group">
                            <BiSupport className="text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                            <p className="text-[13px] font-[500] text-[rgba(56,56,56,0.8)]">Contact us Anytime</p>
                        </div>
                    </div>

                    <br />
                    <hr />

                    <div className="flex py-8 footer">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]">
                            <h2 className="text-[20px] mb-4 font-[600]">Contact us</h2>
                            <p className="pb-4 text-[14px] font-[400]">Classyshop - Mega Super Store<br /> 507-Union Trade Center France</p>

                            <Link to="mailto:sempitufo@example.com" className="link text-[15px]">sempitufo@example.com</Link>

                            <span className="mt-3 text-primary text-[22px] block mb-5 w-full font-[600]">(+51) 987-456-321</span>

                            <div className="flex items-center">
                                <IoChatboxOutline className="text-[35px] text-primary" />
                                <span className="text-[14px] font-[600] pl-3">Online Chat <br />Get Expert Help </span>
                            </div>
                        </div>

                        <div className="part2 w-[40%] flex pl-8">
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[20px] font-[600] mb-4">Products</h2>

                                <ul className="list">
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Prices drop</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">New products</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Best sales</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Contact us</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Sitemap</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Stores</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="part2_col2 w-[50%]">
                                <h2 className="text-[20px] font-[600] mb-4">Our company</h2>

                                <ul className="list">
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Delivery</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Legal Notice</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Terms And Conditions Of Use</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">About Us</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Secure Payment</Link>
                                    </li>
                                    <li className="list-none text-[15px] w-full mb-2">
                                        <Link to="/" className="link">Login</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="part2 w-[35%] flex pl-8 flex-col">
                            <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
                            <p className="text-[14px]">Subscribe to our latest newsletter to get news about special discounts.</p>

                            <form className="mt-5">
                                <input type="text" className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]" placeholder="Your Email Address" />
                                <Button className="btn-org">Subscribe</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
                <div className="container flex items-center justify-between">
                    <ul className="flex items-center gap-4">
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex group hover:bg-primary items-center justify-center transition-all">
                                <FaFacebookF className="text-[20px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex group hover:bg-primary items-center justify-center transition-all">
                                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex group hover:bg-primary items-center justify-center transition-all">
                                <FaPinterestP className="text-[20px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex group hover:bg-primary items-center justify-center transition-all">
                                <FaInstagram className="text-[20px] group-hover:text-white" />
                            </Link>
                        </li>
                    </ul>

                    <p className="text-[14px] text-center mb-0">
                        © 2021 Classyshop. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-2">
                        <img src="/footerTarjet/visa.svg" className="h-[20px]" />
                        <img src="/footerTarjet/mastercard.svg" className="h-[20px]" />
                        <img src="/footerTarjet/bcp.svg" className="h-[15px]" />
                        <img src="/footerTarjet/mercado.svg" className="h-[20px]" />
                        <img src="/footerTarjet/paypal.svg" className="h-[20px]" />
                    </div>
                </div>
            </div>

            {/* Cart Panel */}
            <Drawer
                anchor={'right'}
                open={context.openCartPanel}
                onClose={context.toggleCartPanel(false)}
                className='cartPanel'
            >
                <div className='flex items-center justify-between gap-3 px-4 py-3 overflow-hidden border-b border-gray-250'>
                    <h4>Shopping Cart (1)</h4>
                    <IoCloseSharp className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)} />
                </div>

                <CartPanel />
            </Drawer>
        </>
    )
}

export default Footer;
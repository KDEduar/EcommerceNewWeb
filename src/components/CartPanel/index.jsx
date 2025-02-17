import { Button } from "@mui/material";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = () => {
    return (
        <>
            <div className="scroll w-full max-h-[370px] overflow-y-scroll overflow-x-hidden py-3 px-4">
                <div className="flex items-center w-full gap-4 pb-4 border-b cartItem border-gray-250">
                    <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
                        <Link to="/product/3" className="block group">
                            <img src="https://i.pinimg.com/736x/02/9e/8e/029e8e1eca8c0edfa31428b0bea91264.jpg" alt="imgProductCart" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className="info w-[75] pr-5 relative">
                        <h4 className="text-15px font-[500]">
                            <Link to="/product/3" className="transition-all link">
                                A-Line Kurti With Shara Dupatta
                            </Link>
                        </h4>
                        <p className="flex items-center gap-5 mt-2 mb-2">
                            <span>Qty : <span>2</span></span>
                            <span className="font-bold text-primary">Price : $55</span>
                        </p>
                        <MdOutlineDeleteOutline className='text-[#000] text-[20px] cursor-pointer absolute top-[10px] right-[10px] link transition-all' />
                    </div>
                </div>

                <div className="flex items-center w-full gap-4 py-3 pb-4 border-b cartItem border-gray-250">
                    <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
                        <Link to="/product/3" className="block group">
                            <img src="https://i.pinimg.com/736x/02/9e/8e/029e8e1eca8c0edfa31428b0bea91264.jpg" alt="imgProductCart" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className="info w-[75] pr-5 relative">
                        <h4 className="text-15px font-[500]">
                            <Link to="/product/3" className="transition-all link">
                                A-Line Kurti With Shara Dupatta
                            </Link>
                        </h4>
                        <p className="flex items-center gap-5 mt-2 mb-2">
                            <span>Qty : <span>2</span></span>
                            <span className="font-bold text-primary">Price : $55</span>
                        </p>
                        <MdOutlineDeleteOutline className='text-[#000] text-[20px] cursor-pointer absolute top-[10px] right-[10px] link transition-all' />
                    </div>
                </div>

                <div className="flex items-center w-full gap-4 py-3 pb-4 border-b cartItem border-gray-250">
                    <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
                        <Link to="/product/3" className="block group">
                            <img src="https://i.pinimg.com/736x/02/9e/8e/029e8e1eca8c0edfa31428b0bea91264.jpg" alt="imgProductCart" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className="info w-[75] pr-5 relative">
                        <h4 className="text-15px font-[500]">
                            <Link to="/product/3" className="transition-all link">
                                A-Line Kurti With Shara Dupatta
                            </Link>
                        </h4>
                        <p className="flex items-center gap-5 mt-2 mb-2">
                            <span>Qty : <span>2</span></span>
                            <span className="font-bold text-primary">Price : $55</span>
                        </p>
                        <MdOutlineDeleteOutline className='text-[#000] text-[20px] cursor-pointer absolute top-[10px] right-[10px] link transition-all' />
                    </div>
                </div>

                <div className="flex items-center w-full gap-4 py-3 pb-4 border-b cartItem border-gray-250">
                    <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
                        <Link to="/product/3" className="block group">
                            <img src="https://i.pinimg.com/736x/02/9e/8e/029e8e1eca8c0edfa31428b0bea91264.jpg" alt="imgProductCart" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className="info w-[75] pr-5 relative">
                        <h4 className="text-15px font-[500]">
                            <Link to="/product/3" className="transition-all link">
                                A-Line Kurti With Shara Dupatta
                            </Link>
                        </h4>
                        <p className="flex items-center gap-5 mt-2 mb-2">
                            <span>Qty : <span>2</span></span>
                            <span className="font-bold text-primary">Price : $55</span>
                        </p>
                        <MdOutlineDeleteOutline className='text-[#000] text-[20px] cursor-pointer absolute top-[10px] right-[10px] link transition-all' />
                    </div>
                </div>
            </div>

            <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
                <div className="bottomInfo py-3 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between px-4 flex-col">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">1 item</span>
                        <span className="font-bold text-primary">$155.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Shipping</span>
                        <span className="font-bold text-primary">$55.00</span>
                    </div>
                </div>

                <div className="bottomInfo py-3 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between px-4 flex-col">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total (tax excl.)</span>
                        <span className="font-bold text-primary">$93.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total (tax incl.)</span>
                        <span className="font-bold text-primary">$93.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Taxes :</span>
                        <span className="font-bold text-primary">$18.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full gap-5 mt-4">
                        <Link className="w-[50%] d-block" to="/cart">
                            <Button className="w-full btn-org btn-lg">View Cart</Button>
                        </Link>
                        <Link className="w-[50%] d-block" to="/checkout">
                            <Button className="w-full btn-org btn-lg">Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPanel;
import { Button } from "@mui/material";

import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from "./cartItems";

const CartPage = () => {


    return (
        <section className="py-10 pb-10 section">
            <div className="container flex w-[80%] max-w-[80%] gap-5">
                <div className="leftPart w-[70%]">
                    <div className="bg-white rounded-md shadow-md">
                        <div className="px-3 py-2 border-b border-[rgba(0,0,0,0.1)]">
                            <h2>Your Cart</h2>
                            <p className="mt-0">There are <span className="font-bold text-primary">2</span> products in your cart</p>
                        </div>
                        <CartItems size="S" qty={1} />
                        <CartItems size="S" qty={1} />
                        <CartItems size="S" qty={1} />
                    </div>
                </div>

                <div className="rightPart w-[30%]">
                    <div className="p-5 bg-white rounded-md shadow-md">
                        <h3 className="pb-3">Cart Totals</h3>
                        <hr />

                        <p className="flex items-center justify-between">
                            <span className="text-[14px] font-[500]">Subtotal</span>
                            <span className="font-bold text-primary">$1,300.00</span>
                        </p>

                        <p className="flex items-center justify-between">
                            <span className="text-[14px] font-[500]">Shipping</span>
                            <span className="font-bold">Free</span>
                        </p>

                        <p className="flex items-center justify-between">
                            <span className="text-[14px] font-[500]">Estimate for</span>
                            <span className="font-bold">United Kingdom</span>
                        </p>

                        <p className="flex items-center justify-between">
                            <span className="text-[14px] font-[500]">Total</span>
                            <span className="font-bold text-primary">$1,300.00</span>
                        </p>

                        <Button className="flex w-full gap-2 !mt-4 btn-org btn-lg"
                            onClick={() => alert("Checkout")}>
                            <BsFillBagCheckFill className="text-[18px]" />
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartPage;
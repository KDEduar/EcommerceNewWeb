import { Button, TextField } from "@mui/material";
import { BsBagCheckFill } from "react-icons/bs";

const Checkout = () => {
    return (
        <section className="py-10">
            <div className="container flex gap-5">
                <div className="leftCol w-[70%]">
                    <div className="w-full p-5 bg-white rounded-md shadow-md card">
                        <h1>Billing Details</h1>

                        <form className="w-full mt-4">
                            <div className="flex items-center gap-5 pb-3">
                                <div className="col w-[50%]">
                                    <TextField className="w-full" label="Full Name" variant="outlined" size="small" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField className="w-full" type="email" label="Email" variant="outlined" size="small" />
                                </div>
                            </div>

                            <h6 className="text-[14px] font-[500] mb-3">Street address *</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className="col w-[100%]">
                                    <TextField
                                        className="w-full"
                                        label="House No. and Street Name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pb-5">
                                <div className="col w-[100%]">
                                    <TextField
                                        className="w-full"
                                        label="Apartment, suite, unit etc. (optional)"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 pb-3">
                                <div className="col w-[50%]">
                                    <TextField className="w-full" label="Town / City" variant="outlined" size="small" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField className="w-full" type="text" label="State / Country" variant="outlined" size="small" />
                                </div>
                            </div>

                            <h6 className="text-[14px] font-[500] mb-3">Postcode / ZIP *</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className="col w-[100%]">
                                    <TextField
                                        className="w-full"
                                        label="Zip Code"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 pb-3">
                                <div className="col w-[50%]">
                                    <TextField className="w-full" type="number" label="Phone Number" variant="outlined" size="small" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField className="w-full" type="text" label="Email Address" variant="outlined" size="small" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="rightCol w-[30%]">
                    <div className="p-5 bg-white rounded-md shadow-md card">
                        <h2 className="mb-4 uppercase">Your order</h2>

                        <div className="flex justify-between items-center py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                            <span className="text-[14px] font-[600]">Product</span>
                            <span className="text-[14px] font-[600]">Subtotal</span>
                        </div>

                        <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3 part1">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md cursor-pointer group">
                                        <img src="https://placehold.co/50x50.png"
                                            className="w-full transition-all group-hover:scale-105" />
                                    </div>

                                    <div className="info">
                                        <h4 className="text-[14px]">A-Line Kurti Whi Th... </h4>
                                        <span className="text-[13px]">Qty: 1</span>
                                    </div>
                                </div>
                                <span className="text-[14px] font-[500]">$1,300.00</span>
                            </div>
                        </div>

                        <Button className="flex items-center w-full gap-2 btn-org btn-lg">
                            <BsBagCheckFill className="text-[20px]" />
                            Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
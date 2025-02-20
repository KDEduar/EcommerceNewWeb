import { Button, TextField } from "@mui/material";

import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const MyAccount = () => {
    return (
        <section className="w-full py-10">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <div className="bg-white rounded-md shadow-md card">
                        <div className="flex flex-col items-center justify-center w-full p-5">
                            <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                                <img src="https://placehold.co/110x110.png" alt="user-profile" className="object-cover w-full h-full" />

                                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                                    <FaCloudUploadAlt className="text-white text-[22px]" />
                                    <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" />
                                </div>
                            </div>

                            <h3 className="">Eduar Dev Tm</h3>
                            <h6 className="!text-[13px] !font-[500] !text-gray-400">admin@admin.com</h6>
                        </div>

                        <ul className="pb-5 list-none bg-[#faf9f9] myAccountTabs">
                            <li className="w-full">
                                <NavLink to="/my-account" exact={true} activeClassName="isActive">
                                    <Button
                                        className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                                        <FaRegUser className="text-[17px]" /> My Profile
                                    </Button>
                                </NavLink>
                            </li>

                            <li className="w-full">
                                <NavLink to="/my-list" exact={true} activeClassName="isActive">
                                    <Button
                                        className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                                        <IoMdHeartEmpty className="text-[17px]" /> My List
                                    </Button>
                                </NavLink>
                            </li>

                            <li className="w-full">
                                <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                                    <Button
                                        className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                                        <IoBagCheckOutline className="text-[17px]" /> My Orders
                                    </Button>
                                </NavLink>
                            </li>

                            <li className="w-full">
                                <Button
                                    className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                                    <IoIosLogOut className="text-[17px]" /> Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col2 w-[50%]">
                    <div className="p-5 bg-white rounded-md shadow-md card">
                        <h2 className="pb-3">My Profile</h2>
                        <hr />

                        <form className="mt-5">
                            <div className="flex items-center gap-3">
                                <div className="w-[50%]">
                                    <TextField
                                        type="text"
                                        label="Full Name"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <TextField
                                        type="number"
                                        label="Phone Number"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-[100%]">
                                    <TextField
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                                <Button className="w-[100px] btn-border btn-org btn-lg" variant="outlined">Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MyAccount;
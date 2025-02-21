import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const AccountSidebar = () => {
    return (
        <div className="bg-white rounded-md shadow-md card sticky top-[10px]">
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
                            <IoMdHeartEmpty className="text-[20px]" /> My List
                        </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                        <Button
                            className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                            <IoBagCheckOutline className="text-[20px]" /> My Orders
                        </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <Button
                        className="w-full !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] !text-left !px-5 !justify-start !py-2">
                        <IoIosLogOut className="text-[20px]" /> Logout
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default AccountSidebar;
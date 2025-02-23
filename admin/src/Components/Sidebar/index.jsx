import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";

import { Button } from "@mui/material";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineImage, MdProductionQuantityLimits } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";


const Sidebar = () => {
    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const isOpenSubMenu = (index) => {
        if (subMenuIndex === index) {
            setSubMenuIndex(null);
        } else {
            setSubMenuIndex(index);
        }
    }

    return (
        <>
            <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[13%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
                <div className="py-2 w-fit">
                    <Link to="/">
                        <img src="/logo.svg" className="w-[190px]" /></Link>
                </div>

                <ul className="mt-4">
                    <li>
                        <Link to="/">
                            <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2">
                                <LuLayoutDashboard className='!text-[20px]' />
                                <span>Dashboard</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2"
                            onClick={() => isOpenSubMenu(1)}>
                            <MdOutlineImage className='!text-[20px]' />
                            <span>Home Slides</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                            >
                                <FaAngleDown className={`!text-[20px] transition-all
                                    ${subMenuIndex === 1 ? 'rotate-180' : ''}`} />
                            </span>
                        </Button>

                        <Collapse isOpened={
                            subMenuIndex === 1 ? true : false
                        }>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Button
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                        Home banners list
                                    </Button>
                                </li>
                                <li className="w-full">
                                    <Button
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                        Add home banner slide
                                    </Button>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Link to="/users">
                            <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2">
                                <PiUsersBold className='!text-[20px]' />
                                <span>Users</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2"
                            onClick={() => isOpenSubMenu(3)}>
                            <MdProductionQuantityLimits className='!text-[20px]' />
                            <span>Products</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                            >
                                <FaAngleDown className={`!text-[20px] transition-all
                                    ${subMenuIndex === 3 ? 'rotate-180' : ''}`} />
                            </span>
                        </Button>

                        <Collapse isOpened={
                            subMenuIndex === 3 ? true : false
                        }>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to="/products">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Product list
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to="/product/upload">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Product upload
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2"
                            onClick={() => isOpenSubMenu(4)}>
                            <TbCategory className='!text-[20px]' />
                            <span>Category</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                            >
                                <FaAngleDown className={`!text-[20px] transition-all
                                    ${subMenuIndex === 4 ? 'rotate-180' : ''}`} />
                            </span>
                        </Button>

                        <Collapse isOpened={
                            subMenuIndex === 4 ? true : false
                        }>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to="/categories">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Category list
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to="/category/add">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Add a Category
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to="/category/subCat">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Sub Category List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to="/category/subCat/add">
                                        <Button
                                            className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                                            Add a Sub Category
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Link to="/orders">
                            <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2">
                                <BiShoppingBag className='!text-[20px]' />
                                <span>Orders</span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2">
                            <TbLogout2 className='!text-[20px]' />
                            <span>Logout</span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
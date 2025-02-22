import { Button } from '@mui/material';
import React, { useState } from 'react';
import { GoRocket } from 'react-icons/go';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { RiMenu2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
            <nav>
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                            <RiMenu2Fill className='text-[18px]' />Shop By Categories
                            <LiaAngleDownSolid className='text-[13px] ml-auto font-bold' />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className='flex items-center gap-3 nav'>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] !font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Home</Button>
                                </Link>
                            </li>

                            <li className='relative list-none'>
                                <Link to="/productListing" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Fashion</Button>
                                </Link>

                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="relative w-full list-none">
                                            <Link to="/" className='w-full'>
                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Men</Button>

                                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                    <ul>
                                                        <li className="w-full list-none">
                                                            <Link to="/" className='w-full'>
                                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>T-Shirt</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="w-full list-none">
                                                            <Link to="/" className='w-full'>
                                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Jeans</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="w-full list-none">
                                                            <Link to="/" className='w-full'>
                                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Footwear</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="w-full list-none">
                                                            <Link to="/" className='w-full'>
                                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Watch</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="w-full list-none">
                                                            <Link to="/" className='w-full'>
                                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Pents</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </Link>
                                        </li>
                                        <li className="w-full list-none">
                                            <Link to="/" className='w-full'>
                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Women</Button>
                                            </Link>
                                        </li>
                                        <li className="w-full list-none">
                                            <Link to="/" className='w-full'>
                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className="w-full list-none">
                                            <Link to="/" className='w-full'>
                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className="w-full list-none">
                                            <Link to="/" className='w-full'>
                                                <Button className='w-full text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Electronics</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Bags</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Footwear</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Groceries</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Beauty</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Wellnewss</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='transition link text-[14px] font-[500]' >
                                    <Button className='transition link !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !py-3'>Jewellery</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[20%]">
                        <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
                            <GoRocket className='text-[18px]' />
                            Free International Delivery
                        </p>
                    </div>
                </div>
            </nav>

            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
        </>
    )
}

export default Navigation;
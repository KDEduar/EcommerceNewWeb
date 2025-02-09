import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoIosGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa6';

import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    return (
        <header className='bg-white'>
            <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time now.</p>
                        </div>

                        <div className="flex items-center justify-end col2">
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='text-[13px] link font-[500] transition' >Help center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to="/order-tracking" className='text-[13px] link font-[500] transition' >Order Traking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 header border-b-[1px] border-gray-250">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to="/" className='link'><img src='/logo.svg'></img></Link>
                    </div>

                    <div className="col2 w-[45%]">
                        <Search />
                    </div>

                    <div className="col3 w-[30%] flex items-center pl-7">
                        <ul className='flex items-center justify-end w-full gap-3'>
                            <li className='list-none'>
                                <Link to="/login" className='transition link text-[15px] font-[500]'>Login</Link> / &nbsp;
                                <Link to="/register" className='transition link text-[15px] font-[500]'>Register</Link>
                            </li>
                            <li>
                                {/* Iconos del header */}
                                <Tooltip title="Compare" placement='top-end'>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoIosGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Wishlist" placement='top-end'>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Cart" placement='top-end'>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;
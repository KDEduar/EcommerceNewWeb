import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { FaRegHeart, FaRegUser } from 'react-icons/fa6';

import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { TbLogout } from 'react-icons/tb';
import { IoBagCheckOutline } from 'react-icons/io5';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const context = useContext(MyContext);

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

                    <div className="col2 w-[40%]">
                        <Search />
                    </div>

                    <div className="col3 w-[35%] flex items-center pl-7">
                        <ul className='flex items-center justify-end w-full gap-3'>
                            {
                                context.isLogin === false ? (
                                    <li className='list-none'>
                                        <Link to="/login" className='transition link text-[15px] font-[500]'>Login</Link> / &nbsp;
                                        <Link to="/register" className='transition link text-[15px] font-[500]'>Register</Link>
                                    </li>
                                ) : (
                                    <>
                                        <Button
                                            onClick={handleClick}
                                            className="flex items-center gap-3 cursor-pointer myAccountWrap !text-[#000]">
                                            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'>
                                                <FaRegUser className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                            </Button>

                                            <div className="flex flex-col info">
                                                <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[600] mb-0 capitalize text-left justify-start">Eduar Dev</h4>
                                                <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start">admin@admim.com</span>
                                            </div>
                                        </Button>

                                        {/* Options here */}
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to="/my-account" className='block w-full'>
                                                <MenuItem onClick={handleClose} className='flex gap-3'>
                                                    <FaRegUser /> <span className="text-[14px]">My account </span>
                                                </MenuItem>
                                            </Link>
                                            <Divider />
                                            <Link to="/my-orders" className='block w-full'>
                                                <MenuItem onClick={handleClose} className='flex gap-3'>
                                                    <IoBagCheckOutline className='text-[18px]' /> <span className="text-[14px]">Orders</span>
                                                </MenuItem>
                                            </Link>
                                            <Link to="/my-list" className='block w-full'>
                                                <MenuItem onClick={handleClose} className='flex gap-3'>
                                                    <IoMdHeartEmpty className='text-[18px]' /> <span className="text-[14px]">My List</span>
                                                </MenuItem>
                                            </Link>
                                            <Divider />
                                            <MenuItem onClick={handleClose} className='flex gap-3'>
                                                <TbLogout className='text-[18px]' /> <span className="text-[14px]">Logout</span>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )
                            }
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
                                    <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
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
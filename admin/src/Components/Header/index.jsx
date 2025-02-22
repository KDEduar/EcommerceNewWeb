import { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { PiSignOutBold } from "react-icons/pi";
import { FiSearch, FiSettings } from "react-icons/fi";
import { TbActivity } from "react-icons/tb";
import { RiMenu2Line } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { LuUserRound } from "react-icons/lu";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    const [anchorMyAcc, setAnchorMyAcc] = useState(null);
    const openMyAcc = Boolean(anchorMyAcc);
    const handleClickMyAcc = (event) => {
        setAnchorMyAcc(event.currentTarget);
    };
    const handleCloseMyAcc = () => {
        setAnchorMyAcc(null);
    };

    return (
        <header className="w-full h-[auto] pl-64 pr-7 bg-[#fff] flex items-center justify-between py-2 shadow-md">
            <div className="part1">
                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]'>
                    <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]' />
                </Button>
                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]'>
                    <FiSearch className='text-[18px] text-[rgba(0,0,0,0.8)]' />
                </Button>
            </div>

            <div className="part2 w-[40%] flex items-center justify-end gap-5">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <FaRegBell />
                    </StyledBadge>
                </IconButton>

                <div className="relative">
                    <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
                        <img src="https://placehold.co/35x35.png" alt="UserDashboard" className="object-cover w-full h-full" />
                    </div>
                    <Menu
                        anchorEl={anchorMyAcc}
                        id="account-menu"
                        open={openMyAcc}
                        onClose={handleCloseMyAcc}
                        onClick={handleCloseMyAcc}
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
                        <MenuItem onClick={handleCloseMyAcc} className='!bg-white'>
                            <div className="flex items-center gap-3">
                                <div className="rounded-full w-[40px] h-[40px] overflow-hidden cursor-pointer">
                                    <img src="https://placehold.co/40x40.png" alt="UserDashboard" className="object-cover w-full h-full" />
                                </div>

                                <div className="info">
                                    <h3 className="text-[14px] font-semibold leading-5">Mark Down</h3>
                                    <p className="text-[12px] font-[400] opacity-70">admin@admin2.com</p>
                                </div>
                            </div>
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <LuUserRound className='text-[16px]' />
                            <span className='text-[14px]'>Profile</span>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <FiSettings />
                            <span className='text-[14px]'>Account Setting</span>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <TbActivity />
                            <span className='text-[14px]'>Activity Log</span>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <PiSignOutBold className='text-[18px]' />
                            <span className='text-[14px]'>Sign Out</span>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
import Sidebar from "../../components/Sidebar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import React, { useState } from "react";

const ProductListing = () => {
    const [itemView, setItemView] = useState('grid');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className="py-4 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className="transition link">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/" className="transition link">
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>

            <div className="p-2 mt-4 bg-white">
                <div className="container flex gap-3">
                    <div className="w-[20%] h-full bg-white sidebarWrapper">
                        <Sidebar />
                    </div>

                    <div className="rightContent w-[80%] py-3">

                        <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
                            <div className="flex items-center col1 itemViewActions">
                                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "list" && "active"}`} onClick={() => setItemView('list')}>
                                    <CgMenu className="text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "grid" && "active"}`} onClick={() => setItemView('grid')}>
                                    <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <span className="font-[500] pl-3 text-[rgba(0,0,0,0.7)] text-[14px]">There are 27 products</span>
                            </div>

                            <div className="flex items-center justify-end gap-3 pr-4 ml-auto col2">
                                <span className="font-[500] pl-3 text-[rgba(0,0,0,0.7)] text-[14px]">Sort By</span>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className="!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000] !rounded-md"
                                >Sales, highest to lowest
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Sales, highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Revelance</MenuItem>
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Price, high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <div className={`grid ${itemView === 'grid'
                            ? 'grid-cols-4 md:grid-cols-4'
                            : 'grid-cols-1 md:grid-cols-1'
                            } gap-4 `}>
                            {
                                itemView === 'grid' ?
                                    <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </>
                                    :
                                    <>
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                    </>
                            }
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListing;
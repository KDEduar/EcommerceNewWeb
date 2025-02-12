import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { QtyBox } from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';

import ProductsSlider from '../../components/ProductsSlider';

export const ProductDetails = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className="transition link !text-[14px]">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/" className="transition link !text-[14px]">
                            Details
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className="transition link !text-[14px]">
                            White Dress Shirt
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>

            <section className="py-5 bg-white">
                <div className="container flex items-center gap-8">
                    <div className="productZoomContainer w-[40%]">
                        <ProductZoom />
                    </div>

                    <div className="productContent w-[60%] pl-10 pr-10">
                        <h1 className="text-[30px] font-[600] mb-2">
                            White Dress Shirt White & Beige Color Saree | With Blouse Piece White Dress
                        </h1>
                        <div className="flex items-center gap-3">
                            <span className='text-gray-400 text-[15px]'>
                                Brands : <span className="font-[500] opacity-75 text-black">House of White</span>
                            </span>

                            <Rating name="size-small" defaultValue={4} size="small" readOnly />
                            <span className="text-[13px] cursor-pointer">Review (5)</span>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <span className="line-through oldPrice text-gray-500 text-[20px] font-[500]">
                                $58.00
                            </span>
                            <span className="price text-primary text-[20px] font-[600]">
                                $58.00
                            </span>
                            <span className="text-[14px]">
                                Available In Stock: <span className='text-[14px] text-green-600 font-bold'>147 Items</span>
                            </span>
                        </div>

                        <p className='pr-10 mt-3 mb-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veniam totam commodi eveniet facere, libero soluta consequuntur quae placeat doloribus similique alias sapiente odio possimus ad dolores quam eligendi ut.
                            Autem nobis quidem velit ad maiores? Aliquam omnis aperiam quis perspiciatis excepturi magni. Sed modi quia omnis ratione. Obcaecati, aut minus assumenda modi unde cumque distinctio blanditiis dignissimos praesentium iusto.
                        </p><hr />

                        <div className="flex items-center gap-3 mt-3">
                            <span className='text-[16px]'>Size: </span>
                            <div className="flex items-center gap-1 actions">
                                <Button
                                    className={`${productActionIndex === 0
                                        ? '!bg-primary !text-white'
                                        : ''
                                        }`}
                                    onClick={() => setProductActionIndex(0)}>S</Button>
                                <Button
                                    className={`${productActionIndex === 1
                                        ? '!bg-primary !text-white'
                                        : ''
                                        }`}
                                    onClick={() => setProductActionIndex(1)}>M</Button>
                                <Button
                                    className={`${productActionIndex === 2
                                        ? '!bg-primary !text-white'
                                        : ''
                                        }`}
                                    onClick={() => setProductActionIndex(2)}>L</Button>
                                <Button
                                    className={`${productActionIndex === 3
                                        ? '!bg-primary !text-white'
                                        : ''
                                        }`}
                                    onClick={() => setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>

                        <p className='text-[14px] mt-5 mb-2 text-[#000]'>
                            Free Shipping (Est. Delivery Time 2-3 Days)
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                            <div className="qtyBoxWrapper w-[70px]">
                                <QtyBox />
                            </div>

                            <Button className='flex items-center gap-2 btn-org'>
                                <MdOutlineShoppingCart className='text-[22px]' /> Add to Cart
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <span className="flex link cursor-pointer items-center gap-2 text-[15px] font-[500]">
                                <FaRegHeart className='text-[18px]' /> Add to Wishlist
                            </span>
                            <span className="flex link cursor-pointer items-center gap-2 text-[15px] font-[500]">
                                <IoGitCompareOutline className='text-[18px]' /> Add to Compare
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container pt-10">
                    <div className="flex items-center justify-center gap-8 mb-3">
                        <span className={`link text-[17px] cursor-pointer font-[500]
                        ${activeTab === 0 && 'text-primary font-bold'}`}
                            onClick={() => setActiveTab(0)}>Descripction
                        </span>
                        <span className={`link text-[17px] cursor-pointer font-[500]
                        ${activeTab === 1 && 'text-primary font-bold'}`}
                            onClick={() => setActiveTab(1)}>Product Details
                        </span>
                        <span className={`link text-[17px] cursor-pointer font-[500]
                        ${activeTab === 2 && 'text-primary font-bold'}`}
                            onClick={() => setActiveTab(2)}>Review (5)
                        </span>
                    </div>

                    {
                        activeTab === 0 && (
                            <div className={"w-full px-8 py-5 rounded-md shadow-lg"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repudiandae assumenda. Quisquam provident vel, similique esse officia neque doloremque quam porro, quae eveniet ipsam odit omnis repellat molestiae assumenda dignissimos!</p>

                                <h4>Lightweight Design</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit in saepe voluptatum laudantium maxime exercitationem doloremque modi pariatur, perspiciatis ipsam aliquid aliquam cupiditate ipsum error autem dicta illum debitis.</p>

                                <h4>Free Shipping & Return</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, inventore mollitia itaque sapiente eveniet nisi, provident alias libero magnam rerum odit voluptatibus enim illo omnis aspernatur quos amet molestias repellat.</p>

                                <h4>Money Back Guarantee</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, id exercitationem dolore, cupiditate iste harum quo magnam rem laborum saepe maxime consectetur. Asperiores sapiente facere possimus a quibusdam assumenda animi.</p>

                                <h4>Online Support</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        )
                    }

                    {
                        activeTab === 1 && (
                            <div className="w-full px-8 py-5 rounded-md shadow-lg">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                                        <thead className="text-xs !text-gray-700 uppercase !bg-gray-50 dark:bg-gray-700 dark:!text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Stand Up
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Folded (w/o wheels)
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Folded (w/ wheels)
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Door Pass Through
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="!bg-white border-b !border-gray-200">
                                                <th scope="row" className="px-6 py-4 font-medium !text-gray-900 whitespace-nowrap dark:text-white">
                                                    35"L x 24"W (89 cm)
                                                </th>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W
                                                </td>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W x 10.5"H
                                                </td>
                                                <td className="px-6 py-4">
                                                    $299
                                                </td>
                                            </tr>
                                            <tr className="!bg-white border-b !border-gray-200">
                                                <th scope="row" className="px-6 py-4 font-medium !text-gray-900 whitespace-nowrap dark:text-white">
                                                    35"L x 24"W (89 cm)
                                                </th>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W
                                                </td>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W x 10.5"H
                                                </td>
                                                <td className="px-6 py-4">
                                                    $299
                                                </td>
                                            </tr>
                                            <tr className="!bg-white border-b !border-gray-200">
                                                <th scope="row" className="px-6 py-4 font-medium !text-gray-900 whitespace-nowrap dark:text-white">
                                                    35"L x 24"W (89 cm)
                                                </th>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W
                                                </td>
                                                <td className="px-6 py-4">
                                                    21.5"L x 24"W x 10.5"H
                                                </td>
                                                <td className="px-6 py-4">
                                                    $299
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        )
                    }

                    {
                        activeTab === 2 && (
                            <div className="w-[80%] px-8 py-5 rounded-md shadow-lg">
                                <div className="w-full productReviewsContainer">
                                    <h2 className='text-[18px]'>Customer questions & answer (5)</h2>

                                    <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                                        <div className="flex pb-5 border-b border-[rgba(0,0,0,0.1)] pt-5 items-center justify-between w-full review">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVzZXJzfGVufDB8fDB8fHww" alt="user-icon" className='w-full' />
                                                </div>

                                                <div className="w-[80%]">
                                                    <h4 className="text-[16px]">Edwin Ockonel</h4>
                                                    <h5 className="text-[13px] mb-0">2024-02-12</h5>
                                                    <p className="mt-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta alias odit aut omnis impedit consequuntur qui.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={4} readOnly />
                                        </div>
                                        <div className="flex pb-5 border-b border-[rgba(0,0,0,0.1)] pt-5 items-center justify-between w-full review">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzZXJzfGVufDB8fDB8fHww" alt="user-icon" className='w-full' />
                                                </div>

                                                <div className="w-[80%]">
                                                    <h4 className="text-[16px]">Edwin Ockonel</h4>
                                                    <h5 className="text-[13px] mb-0">2024-02-12</h5>
                                                    <p className="mt-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta alias odit aut omnis impedit consequuntur qui.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={4} readOnly />
                                        </div>
                                        <div className="flex pb-5 border-b border-[rgba(0,0,0,0.1)] pt-5 items-center justify-between w-full review">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHVzZXJzfGVufDB8fDB8fHww" alt="user-icon" className='w-full' />
                                                </div>

                                                <div className="w-[80%]">
                                                    <h4 className="text-[16px]">Edwin Ockonel</h4>
                                                    <h5 className="text-[13px] mb-0">2024-02-12</h5>
                                                    <p className="mt-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta alias odit aut omnis impedit consequuntur qui.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={4} readOnly />
                                        </div>
                                        <div className="flex pb-5 border-b border-[rgba(0,0,0,0.1)] pt-5 items-center justify-between w-full review">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img src="https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHVzZXJzfGVufDB8fDB8fHww" alt="user-icon" className='w-full' />
                                                </div>

                                                <div className="w-[80%]">
                                                    <h4 className="text-[16px]">Edwin Ockonel</h4>
                                                    <h5 className="text-[13px] mb-0">2024-02-12</h5>
                                                    <p className="mt-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta alias odit aut omnis impedit consequuntur qui.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={4} readOnly />
                                        </div>
                                        <div className="flex pb-5 border-b border-[rgba(0,0,0,0.1)] pt-5 items-center justify-between w-full review">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHx1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D" alt="user-icon" className='w-full' />
                                                </div>

                                                <div className="w-[80%]">
                                                    <h4 className="text-[16px]">Edwin Ockonel</h4>
                                                    <h5 className="text-[13px] mb-0">2024-02-12</h5>
                                                    <p className="mt-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta alias odit aut omnis impedit consequuntur qui.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={4} readOnly />
                                        </div>
                                    </div>

                                    <div className="reviewForm p-4 bg-[#fafafa] rounded-md">
                                        <h2 className="text-[18px]">Add a review</h2>

                                        <form className='w-full mt-5'>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Multiline"
                                                className='w-full'
                                                multiline
                                                rows={4}
                                            />

                                            <Rating name="size-small" className='mt-3' defaultValue={4} />

                                            <div className="flex items-center mt-5">
                                                <Button className='btn-org'>Submit Review</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="container pt-8">
                    <h2 className="font-[600] pb-0 text-[20px]">Related Products</h2>
                    <ProductsSlider items={5} />
                </div>
            </section>
        </>
    );
};
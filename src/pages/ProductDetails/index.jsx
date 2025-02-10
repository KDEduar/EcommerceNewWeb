import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';

export const ProductDetails = () => {
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
                <div className="container flex gap-8">
                    <div className="productZoomContainer w-[40%]">
                        <ProductZoom />
                    </div>

                    <div className="productContent w-[60%]">
                        <h1 className="text-[30px] font-[600] mb-2">White Dress Shirt</h1>
                        <div className="flex items-center gap-3">
                            <span className='text-gray-400 text-[15px]'>
                                Brands : <span className="font-[500] opacity-75 text-black">House of White</span>
                            </span>

                            <Rating name="size-small" defaultValue={4} size="small" readOnly />
                            <span className="text-[13px] cursor-pointer">Review (5)</span>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <span className="line-through oldPrice text-gray-500 text-[18px] font-[500]">
                                $58.00
                            </span>
                            <span className="price text-primary text-[18px] font-[600]">
                                $58.00
                            </span>
                        </div>
                        <br />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veniam totam commodi eveniet facere, libero soluta consequuntur quae placeat doloribus similique alias sapiente odio possimus ad dolores quam eligendi ut.
                            Autem nobis quidem velit ad maiores? Aliquam omnis aperiam quis perspiciatis excepturi magni. Sed modi quia omnis ratione. Obcaecati, aut minus assumenda modi unde cumque distinctio blanditiis dignissimos praesentium iusto.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
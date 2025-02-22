import { Button, Rating } from "@mui/material"
import { FaRegHeart } from "react-icons/fa6"
import { IoGitCompareOutline } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import { QtyBox } from "../QtyBox"
import { useState } from "react"

export const ProductDetailsComponent = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
    return (
        <>
            <div className="">
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
        </>
    )
}
